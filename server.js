const express = require('express')
const app = express()
const {nameArray, numArray} = require('./countWords')

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", '*'); 
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/getName', function(req, resp){
    resp.send(nameArray)
})
app.get('/getNum', function(req, resp){
    resp.send(numArray)
})
app.listen(8080, ()=>{
    console.log("listem on 8080")
})