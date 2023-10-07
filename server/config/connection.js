const mongoose = require('mongoose');

// pj3: googlebooks will need to be change once we add the API
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks'); 

module.exports = mongoose.connection;
