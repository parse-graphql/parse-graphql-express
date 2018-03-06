# Parse Server GraphQL Express

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
  masterKey, // Needed to fetch schema (optional if parseSchema used)
  serverURL,
  dynamicSchema: true, // Whether or not to recreate schema on every request
  graphiql: true, // Whether or not to run graphiql
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
