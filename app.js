// require('dotenv')
const express=require('express')
const tasks=require('./routes/tasks')
const app=express()
const {connectDB}=require('./db/connect')
const notFound=require('./middleware/not-found')
const errorHandlerMiddleware=require('./middleware/error-handler')

//middleware
app.use(express.json())
app.use(express.static('./public'))


app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)

const port=process.env.PORT || 3000

const start=async () =>{
    try {
        await connectDB()
        app.listen(port,console.log(`Server is listening on port ${port}...`))
    } catch (error) {
        console.log(error)
    }
}

start()