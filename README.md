# Parse Server GraphQL Express [![npm (scoped)](https://img.shields.io/npm/v/@parse-graphql/express.svg)](https://www.npmjs.com/package/@parse-graphql/express) [<img src="https://github.com/parse-graphql/art/blob/master/logo.svg" width="100" height="100" align="right" alt="Parse GraphQL Logo">](https://github.com/parse-graphql)


**WIP**

Uses [parse-graphql-schema](https://github.com/parse-graphql/parse-graphql-schema) to automatically create a GraphQL API from an instance of [parse-server](https://github.com/parse-community/parse-server).

## Install

`yarn add @parse-graphql/express`

## Usage

This wraps [express-graphql](https://github.com/graphql/express-graphql) and can be mounted on an express app:

```javascript
const parseGraphQL = require('@parse-graphql/express');

// ...

const graphqlAPI = parseGraphQL({
  appId,
  masterKey,
  serverURL,
  dynamicSchema: true,
  graphiql: true,
});

app.use('/graphql', graphqlAPI);
```

## Options

`appId: string` - required

`serverURL: string` - required

`javascriptKey: string` - optional, use if you added one to your parse server

`masterKey: string` - optional if `parseSchema` is used

`parseSchema: Object` - optional, can pass in Parse Server schema (`results` property from `GET <serverURL>/schema`) rather than have it be fetched

`dynamicSchema: boolean` - whether or not to refetch/recreate schema on every request

`graphiql: boolean` - whether or not to run GraphiQL
