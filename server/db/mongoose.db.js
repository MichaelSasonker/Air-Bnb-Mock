const mongoose = require('mongoose');

// const password = process.env.MONGO_PASSWORD;
// const uri = `mongodb+srv://michael:${password}@air-bnb-mock.8a2yt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const uri = 'mongodb://127.0.0.1:27017/Air_Bnb';
mongoose.connect(process.env.MONGODB_URI || uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
}).then(() => {
		console.log("Database connect");
});
