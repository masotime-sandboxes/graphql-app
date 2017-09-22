import { gql } from 'react-apollo';
export const channelsListQuery = gql`
	query ChannelsListQuery {
		channels {
			id
			name
		}
	}
`;
