import graphqlHTTP from 'express-graphql';
import generateSchema from '@parse-graphql/schema';
import getSessionToken from './getSessionToken';

const getSchema = (() => {
  let schema;
  return async (options, alwaysRecreate) => {
    if (!schema || alwaysRecreate) {
      schema = await generateSchema(options);
    }
    return schema;
  }
})();

export default function parseGraphqlHTTP(options) {
  const {
    graphiql,
    parseSchema,
    dynamicSchema,
  } = options;

  if (parseSchema && dynamicSchema) {
    console.warn('Possible undesired behavior: ' +
    'parseSchema is set and dynamicSchema is true. Schema will not be dynamic.');
  }

  return graphqlHTTP(async (request) => ({
    graphiql,
    schema: await getSchema(options, dynamicSchema),
    context: {
      sessionToken: getSessionToken(request),
    },
  }));
}
