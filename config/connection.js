// Set up MySQL connection.
var mysql = require("mysql");
var connection
if (process.env.JAWSD_URL) {
  connection = mysql.createConnection(process.env.JAWSD_URL); 
}else{   
    connection = mysql.createConnection({
    host: "lyl3nln24eqcxxot.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "tgnfm3gdry4g4wy4",
    password: "n2x80ksu0lfb8hxt",
    database: "kkgwfutouhkejklt"
  });
}

// Make connection.
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
