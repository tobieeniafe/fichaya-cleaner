const express = require('express');
var path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')))


app.get('/*', (req,res)=>{
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(process.env.PORT || 3000, (err)=>{
	if (err) {
		console.log(err)
	}
	console.log("Server is UP!")
})