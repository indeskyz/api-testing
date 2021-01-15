const express = require("express")
const  mongoose  = require("mongoose")
const employeeRouter = require("./routes/EmployeeRoutes")
const app = express()
require("dotenv/config")


const port = process.env.PORT || 8080

app.listen(port, ()=> console.log(`app running on ${port}`))

//Routes
app.get('/', (req, res) =>{
    res.send("testing GET")
})


//Middleware
app.use(express.json())
app.use(employeeRouter)


//db connection
mongoose.connect('mongodb+srv://test:testing123@cluster0.fvdk1.mongodb.net/Employees?retryWrites=true&w=majority',{
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then(()=>console.log('DB connected'))
.catch((err) => console.log(err))


