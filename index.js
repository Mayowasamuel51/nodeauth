const express = require('express');
const app = express();
const mongoose = require('mongoose')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
mongoose.set('strictQuery', true)
const userRoute = require('./routes/userroutes')
console.log(process.env.NODE_ENV)
mongoose.connect('mongodb://localhost:27017/testupload')
    .then((data) => {
        console.log('database connected')
    })
    .catch((err) => console.log(err))



app.use('/api', userRoute)






app.listen(8080, () => {
    console.log('Server working well')
})