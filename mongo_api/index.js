require("dotenv").config()
const mongoURL = process.env.DB_CONNECTION
const port = process.env.PORT 


const express = require("express")
const  mongoose  = require("mongoose")
const employeeRouter = require("./routes/EmployeeRoutes")
const app = express()

app.listen(port, ()=> console.log(`app running on ${port}`))

//Routes
app.get('/', (req, res) =>{
    res.send("testing GET")
})


//Middleware
app.use(express.json())
app.use(employeeRouter)


//db connection
mongoose.connect(`${mongoURL}`,{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then(()=>console.log('DB connected'))
.catch((err) => console.log(err))


