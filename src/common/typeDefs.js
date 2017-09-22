export default `

type Channel {
	id: ID!
	name: String
}

type Query {
	channels: [Channel]
}

type Mutation {
	# A mutation to add a new channel to the lsit of channels
	addChannel(name: String!): Channel
}
`;