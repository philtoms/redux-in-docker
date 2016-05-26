# react-starter-app

Build a React.js app with a compile, bundle, and test pipeline already in place.

# Getting Started

Get [Docker](https://docs.docker.com/linux/step_one/).

**Fork the repo - don't copy and paste and code as it'll make it hard to pick up upstream updates.**

```
$ git clone git@github.com:trueprint/your-fork-of-react-starter-app.git
$ cd your-fork-of-react-starter-app
$ docker-compose build
```


Start the containers, and write your application.


```
$ docker-compose up -d
$ docker-compose logs -f
```


We support [Docker Mac](https://blog.docker.com/2016/03/docker-for-mac-windows-beta/). To activate it 

```
$ echo "DOCKER_MAC_BETA=1" >> .env
```

Visit `http://$(docker-machine ip):8000` to see your changes, if you're not using Docker Mac, else visit `http://localhost:8000`. 

### Development outside the container

This is discouraged, but there might be some unforeseen reason you'd like to develop outside the container. In that case, just run

```
$ npm run dev
```

and visit `http://localhost:8080`.

# Organization

[By feature; with tests alongside source](http://marmelab.com/blog/2015/12/17/react-directory-structure.html) - though there aren't tests yet. 

## ES6 modules

ES6 modules can be imported using relative file URLs or using Webpack's module resolution from the root `app/`

```javascript
import { ... } from 'auth' // maps to './auth';
import { ... } from 'util' // maps to './util';
```

## SASS modules

SASS modules can be imported using relative file URLs or using Webpack's module resolution from the root `app/`

```sass
@import '~app.scss';
@import '~counter/counter.scss';
```

# What it has

- [x] React.js v15.0.x
- [x] React Router
- [x] Redux
- [x] ES6 everywhere
- [x] JSX/SASS Hot Reloading
- [x] Auth0 authentication
- [x] [Material UI](https://github.com/callemall/material-ui)
- [x] continuous bundling
- [x] continuous linting
- [ ] continuous testing
- [ ] sourcemaps & minification when `NODE_ENV=production`


