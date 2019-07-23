var connection = require("./dbconn");

connection.query(`DROP TABLE IF EXISTS user`, (error, results) => {
	if (error) throw error;
	console.log(results);
});

connection.query(
    `CREATE TABLE IF NOT EXISTS user (
        username 			varchar(500) 	NOT NULL,
        password 			varchar(500) 	NOT NULL,
        name 			    varchar(50) 	NOT NULL,
        email 			    varchar(15) 	NOT NULL,
        mobile 			    varchar(20) 	NOT NULL,
      );`
     , (error, results) => {
            if (error) throw error;
            console.log('RESULT : ', results);
});

connection.query(
    `LOCK TABLES user WRITE;`,
    function(err,results){
        if(err){
            console.log(err)
        }
        else{
            console.log("Table locked successfully")
        }
    }
)

