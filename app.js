const express = require('express') 
const path = require('path') 
const app = express() 
app.use(express.static(path.join(__dirname, 'dist'))) 

app.get('/about', function(req, res){
	var mysql      = require('mysql');
	var connection = mysql.createConnection({
	  host     : '127.0.0.1',
        port     :  3308,
	  user     : 'root',
	  password : ''
	});

	connection.connect();

	connection.query('SELECT * FROM vueproject.user', function(err, rows, fields) {
	  if (err) throw err;
	  res.send(rows[0].name);
	});

	connection.end();

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});