// graphql express stuff
import {
	graphqlExpress,
	graphiqlExpress
} from 'graphql-server-express';
import bodyParser from 'body-parser';
import schema from 'common/schema';
import { Router } from 'express';

const router = Router();

router.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));
router.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

export default router;