const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'sql12.freesqldatabase.com',
  user: 'sql12808823',
  password: 'SMdF621ejf',
  database: 'sql12808823',
});

db.connect((err) => {
  if (err) console.log('❌ DB Connection failed:', err);
  else console.log('✅ Connected to MySQL Database');
});

module.exports = db;
