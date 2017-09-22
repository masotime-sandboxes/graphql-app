import React from 'react';
import PropTypes from 'prop-types';

const { object } = PropTypes;

export default function ChannelsList({ data: { loading, error, channels }}) {
	if (loading) return (<p>Loading ...</p>);
	if (error) return (<p>{error.message}</p>);

	return (

		<ul>
			{ channels.map(ch => <li style={ch.id < 0 ? { color: 'rgba(0,0,0,0.5)' } : {}} key={ch.id}>{ch.name}</li>) }
		</ul>
	);
}

ChannelsList.propTypes = {
	data: object
}