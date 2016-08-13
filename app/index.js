// app/index.js
const fs = require('fs')

console.log('Start reading file ...')

fs.readFile('file.md', 'utf-8', function(err, content){
	if (err) {
		console.log('shit happens')
		return console.log(err)
	}
	
	console.log(content)
}) 

console.log('end of the file')