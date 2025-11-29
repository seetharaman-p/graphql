import express from 'express'
import cors from 'cors';

const app = express()



// creating the stage server
app.listen(3000, ()=>{
    console.log("server connected successfully")
})