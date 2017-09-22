import React from 'react';
import PropTypes from 'prop-types';
import { gql, graphql } from 'react-apollo';
import { channelsListQuery } from 'common/queries';

const { func } = PropTypes;

function AddChannel({ mutate }) {
	const handleKeyUp = async e => {
		if (e.keyCode === 13) {
			e.persist(); // ref https://facebook.github.io/react/docs/events.html
			await mutate({
				variables: { name: e.target.value },
				optimisticResponse: {
					addChannel: {
						name: e.target.value,
						id: Math.round(Math.random() * -1000000),
						__typename: 'Channel'
					}
				},
				// refetchQueries: [ { query: channelsListQuery } ]
				update: (store, response) => {
					const { data: { addChannel } } = response;
					const data = store.readQuery({ query: channelsListQuery }); // read from cache

					data.channels.push(addChannel); // do an optimistic update
					store.writeQuery({ query: channelsListQuery, data }); // do the actual write back
				}
			});
			e.target.value = '';
		}
	}

	return (
		<input
			type="text"
			placeholder="New channel"
			onKeyUp={handleKeyUp}
		/>
	);
}

AddChannel.propTypes = {
	mutate: func
};

export default graphql(gql`
	mutation addChannel($name: String!) {
		addChannel(name: $name) {
			id
			name
		}
	}
`)(AddChannel);

