require('dotenv').config({path: '.env'})

const 
express = require('express'),
app = express(),
PORT = process.env.PORT
const cors = require('cors')

app.use(express.json())
app.use(cors())

require('./Router')(app)
// require('./DL/scripst_data/script_lang')

app.listen(PORT, ()=> console.log(`server is running in port: ${PORT}`))