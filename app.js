import express from 'express'

const app = express()

// creating the stage server
app.listen(3000, ()=>{
    console.log("server connected successfully")
})