// mostly copy-pasta of https://github.com/auth0/angular-jwt/blob/master/src/angularJwt/services/jwt.js

const urlBase64Decode = string => {
  let decoded = string.replace(/-/g, '+').replace(/_/g, '/')
  switch (decoded.length % 4) {
    case 0: {
      break
    }
    case 2: {
      decoded += '=='
      break
    }
    case 3: {
      decoded += '='
      break
    }
    default: {
      throw 'Illegal base64url string!'
    }
  }
  return decodeURIComponent(escape(atob(decoded)))
}

const decodeToken = token => {
  var tokenParts = token.split('.')
  if (tokenParts.length !== 3) {
    throw new Error('JWT must have 3 parts')
  }
  const decoded = urlBase64Decode(tokenParts[1])
  if (!decoded) {
    throw new Error('Cannot decode the token')
  }
  return JSON.parse(decoded)
}

const getTokenExpirationDate = token => {
  var decoded = decodeToken(token)
  if(typeof decoded.exp === 'undefined') {
    return null
  }
  const expiry = new Date(0) // The 0 here is the key, which sets the date to the epoch
  expiry.setUTCSeconds(decoded.exp)
  return expiry
}

export const isTokenExpired = (token, offsetSeconds = 0) => {
  var expiry = getTokenExpirationDate(token)
  if (expiry === null) {
    return false
  }
  return !(expiry.valueOf() > (new Date().valueOf() + (offsetSeconds * 1000)))
}
