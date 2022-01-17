const mongoose = require('mongoose')

mongoose.connect(process.env.CONECTION_STRING)
  .then(() => console.log('mongo is connected'))