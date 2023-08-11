const express=require('express');
const app=express()
const cors=require('cors');
const mysql=require('mysql')
const port=5000


app.get('/',(request,response)=>{
    response.json('this is from backend')
})

app.listen(port,()=>{
    console.log(`The App is Running at ${port}`)
})