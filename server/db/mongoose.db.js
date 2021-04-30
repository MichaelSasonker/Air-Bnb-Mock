const mongoose = require('mongoose');

// const password = process.env.MONGO_PASSWORD;
// const uri = `mongodb+srv://admin:${password}@bank-api.e79zr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const uri = 'mongodb://127.0.0.1:27017/Air_bnb';
mongoose.connect(process.env.MONGODB_URI || uri, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
		useCreateIndex: true,
}).then(() => {
		console.log("Database connect");
});
