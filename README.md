# Parse GraphQL HTTP [![npm (scoped)](https://img.shields.io/npm/v/@parse-graphql/express.svg)](https://www.npmjs.com/package/@parse-graphql/express) [<img src="https://raw.githubusercontent.com/parse-graphql/art/master/logo.svg?sanitize=true" width="100" height="100" align="right" alt="Parse GraphQL Logo">](https://github.com/parse-graphql)

**WIP**

Connect style middleware that uses [parse-graphql-schema](https://github.com/parse-graphql/parse-graphql-schema) 
to automatically create a GraphQL API from an instance of [parse-server](~://github.com/parse-community/parse-server).

## Install

`yarn add @parse-graphql/express`

## Usage

This wraps [express-graphql](https://github.com/graphql/express-graphql) and can be used with frameworks such as
[Express](http://expressjs.com/), [Restify](http://restify.com/), and [Connect](https://github.com/senchalabs/connect).

Here's an example using express, see more in the [examples repo](https://github.com/parse-graphql/examples).
```javascript
const express = require('express');
const parseGraphQL = require('@parse-graphql/express');

const app = express();

const graphqlAPI = parseGraphQL({
  appId: 'foo',
  masterKey: 'bar',
  serverURL: 'http://foobar.com/parse',
  dynamicSchema: true,
  graphiql: true,
});

app.use('/graphql', graphqlAPI);

app.listen(4001);
```

## Options

`appId: string` - required

`serverURL: string` - required

`javascriptKey: string` - optional, use if you added one to your parse server

`masterKey: string` - optional if `parseSchema` is used

`parseSchema: Object` - optional, can pass in Parse Server schema (`results` property from `GET <serverURL>/schema`) rather than have it be fetched

`dynamicSchema: boolean` - whether or not to refetch/recreate schema on every request

`graphiql: boolean` - whether or not to run GraphiQL
