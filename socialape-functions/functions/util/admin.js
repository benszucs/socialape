const admin = require('firebase-admin');
const serviceAccount = require('./serviceKey.js');
const config = require('../util/config.js');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount),
	databaseURL: 'https://socialape-2ca73.firebaseio.com',
	storageBucket: config.storageBucket,
});

const db = admin.firestore();

module.exports = { admin, db };
