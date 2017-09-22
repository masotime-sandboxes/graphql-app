const channels = [
	{
		id: 1,
		name: 'soccer'
	},
	{
		id: 2,
		name: 'baseball'
	},
	{
		id: 3,
		name: 'rugby'
	},
	{
		id: 4,
		name: 'pineapple'
	},
	{
		id: 6,
		name: 'wtf'
	}
];

let nextId = 7;

export const resolvers = {
	Query: {
		channels() { return channels; }
	},
	Mutation: {
		addChannel: (root, args) => {
			const newChannel = { id: nextId++, name: args.name };
			channels.push(newChannel);
			return newChannel;
		}
	}
}