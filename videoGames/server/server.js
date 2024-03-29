const express = require('express')
const app = express()
const PORT = 8000
const cors = require('cors')
require('dotenv').config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(
    cors({
        origin:'http://localhost:3000',
        credentials:true,
    })
)

require('./config/mongoose.config')
require('./routes/game.routes')(app)

app.listen(PORT,()=>{
    console.log(`Server works on PORT ${PORT}`)
})