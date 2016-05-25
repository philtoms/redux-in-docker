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
$ docker-compose logs
```


# Organization

[By feature; with tests alongside source.](http://marmelab.com/blog/2015/12/17/react-directory-structure.html)

# What it has

- [x] React.js v15.0.x
- [ ] React Router
- [x] Redux
- [x] ES6 everywhere
- [x] JSX/SASS Hot Reloading
- [x] Auth0 authentication
- [x] [Material UI](https://github.com/callemall/material-ui)
- [x] continuous bundling
- [x] continuous linting
- [ ] continuous testing
- [ ] sourcemaps & minification when `NODE_ENV=production`


