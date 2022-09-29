const mssql = require('mssql/msnodesqlv8')


const SQL_SERVER ='VINGHIEM'
const SQL_DATABASE = 'TestNode'
const SQL_UID ='sa'
const SQL_PAS='SA'

const config = {
    server: SQL_SERVER,
    database:SQL_DATABASE,
    user: SQL_UID,
    password:SQL_PAS,
    port:1433
};

const connect = new mssql.ConnectionPool(config).connect().then((pool)=>{
  return pool;
})
module.exports = {
  connect : connect,
  mssql: mssql

}