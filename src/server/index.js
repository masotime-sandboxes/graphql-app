import express from 'express';
import { PORT } from 'common/constants';

// bundling of bundle.js
import bundler from 'server/bundler';

// hot-reloading of express routes
import initWatcher from 'require-watch';

const app = express();

app.use(bundler());

// here we use a require statement instead of imports to enable hot reloading
// if you don't want server-side hot reloading, then change the following:
//
// - import initWatcher from 'server/watcher';
// + import router from 'server/router';
//
// - initWatcher(require.resolve('server/router'));
// - app.use('/', (req, res, next) => require('server/router').default(req, res, next));
// + app.use('/', router);
initWatcher(require.resolve('server/router'));
initWatcher(require.resolve('server/graphql'));

app.use('/', (req, res, next) => require('server/router').default(req, res, next));
app.use('/', (req, res, next) => require('server/graphql').default(req, res, next));

app.listen(PORT, () => console.log(`✅  Web server started at http://localhost:${PORT}`));