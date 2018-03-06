import graphqlHTTP from 'express-graphql';
import express from 'express';
import generateSchema from '@parse-graphql/schema';
import sessionTokenMiddleware from './sessionTokenMiddleware';

const getSchema = (() => {
  let schema;
  return async (options, alwaysRecreate) => {
    if (!schema || alwaysRecreate) {
      schema = await generateSchema(options);
    }
    return schema;
  }
})();

export default function parseGraphQLExpress(options) {
  const {
    graphiql,
    parseSchema,
    dynamicSchema,
  } = options;

  if (parseSchema && dynamicSchema) {
    console.warn('Possible undesired behavior: ' +
    'parseSchema is set and dynamicSchema is true. Schema will not be dynamic.');
  }

  const app = express();
  app.use(
    '/',
    sessionTokenMiddleware,
    graphqlHTTP(async ({ sessionToken }) => ({
      graphiql,
      schema: await getSchema(options, dynamicSchema),
      context: { sessionToken }
    })),
  );

  return app;
}
