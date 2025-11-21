const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'ftp.softmaxs.com',
  user: 'softmaxs_himanshu',
  password: 'Kapil@001',
  database: 'softmaxs_himanshu'
});


db.connect((err) => {
  if (err) console.log('❌ DB Connection failed:', err);
  else console.log('✅ Connected to MySQL Database');
});

module.exports = db;
