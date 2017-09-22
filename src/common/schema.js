import {
	makeExecutableSchema,
	// addMockFunctionsToSchema // used later
} from 'graphql-tools';
import typeDefs from 'common/typeDefs';
import { resolvers } from 'common/resolvers';

const schema = makeExecutableSchema({ typeDefs, resolvers });
// addMockFunctionsToSchema({ schema })

export default schema;
