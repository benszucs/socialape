let db = {
	users: [
		{
			userId: 'dh12hfef324kjf24fh24f',
			email: 'user@email.com',
			handle: 'user',
			createdAt: '2019-03-15T10:59:52.794Z',
			imageUrl: 'image/asdasdasd/asdasdasd',
			bio: 'Hello, my name is user, nice to meet you',
			website: 'https://user.com',
			location: 'London, UK',
		},
	],
	screams: [
		{
			userHandle: 'user',
			body: 'this is the scream body',
			createdAt: '2020-01-05T17:29:56.573Z',
			likeCount: 5,
			commentCount: 2,
		},
	],
	comments: [
		{
			userHandle: 'user',
			screamId: 'gfvhiswhcfiufhsdiufh',
			body: 'nice one mate!',
			createdAt: '2020-01-05T17:29:56.573Z',
		},
	],
	notification: [
		{
			recipient: 'user',
			sender: 'john',
			read: 'true | false',
			screamId: 'sufdhwoiejfoisdjf',
			type: 'like | comment',
			createdAt: '2020-01-05T17:29:56.573Z',
		},
	],
};
let userDetails = {
	// Redux data
	credentials: {
		userId: 'dh12hfef324kjf24fh24f',
		email: 'user@email.com',
		handle: 'user',
		createdAt: '2019-03-15T10:59:52.794Z',
		imageUrl: 'image/asdasdasd/asdasdasd',
		bio: 'Hello, my name is user, nice to meet you',
		website: 'https://user.com',
		location: 'London, UK',
	},
	likes: [
		{
			userHandle: 'user',
			screamId: 'h4h3u45hkj3h345',
		},
		{
			userHandle: 'user',
			screamId: '34h234h5g3i4g5u3',
		},
	],
};
