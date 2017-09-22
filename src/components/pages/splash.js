import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChannelsList from 'components/parts/ChannelsList';
import AddChannel from 'components/parts/AddChannel';
import { channelsListQuery } from 'common/queries';
import {
	ApolloClient,
	graphql,
	ApolloProvider,
	createNetworkInterface
} from 'react-apollo';

const networkInterface = createNetworkInterface({
	uri: 'http://localhost:8000/graphql'
});
networkInterface.use([{
	applyMiddleware(req, next) {
		setTimeout(next, 500);
	}
}]);
const client = new ApolloClient({ networkInterface });
const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);

const { string } = PropTypes;

export default class SplashPage extends Component {
	render() {
		const { title, message } = this.props;

		return (
			<ApolloProvider client={client}>
				<div>
					<h1>{title}</h1>
					<p>{message}</p>
					<AddChannel />
					<ChannelsListWithData />
				</div>
			</ApolloProvider>
		);
	}
}

SplashPage.propTypes = {
	title: string,
	message: string
};