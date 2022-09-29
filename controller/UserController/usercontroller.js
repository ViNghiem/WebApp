const { connect,mssql } = require('../../Database/configSQL')

const sha = require('js-sha256')

class Usercontroller {


  async update(req, res) {
    let pass = await sha.sha256(req.body.password);
    let full_name =req.body.first_name + req.body.last_name 
    let pool = await connect;
    console.log(param)  
    let sqlSelect = `UPDATE UserWeb Email =@Email, Password = @Password, FirstName = @FirstName, LastName = @LastName, @FullName = @FullName  WHERE id = @id`;
    return  await pool.request()
    .input('Email',mssql.NChar,req.body.email)
    .input('Password',mssql.VarChar,pass)
    .input('FirstName',mssql.NVarChar,req.body.first_name)
    .input('LastName',mssql.NVarChar,req.body.last_name)
    .input('FullName',mssql.NVarChar,full_name)
    .input('FullName',mssql.Int,req.body.id)
    .query(sqlSelect, function(err,data){
     res.send(data)
     });
  }



  async rigister(req, res,next){
    let pool = await connect;

    let pass = await sha.sha256(req.body.password);
    let full_name =req.body.first_name + req.body.last_name 
    console.log(req.body.email)
    let sqlSelect = `INSERT INTO UserWeb (Email, Password, FirstName, LastName,FullName) VALUES (@email,@Password,@FirstName,@LastName,@FullName)`;
    return  await pool.request()
    .input('email',mssql.VarChar,req.body.email)
    .input('Password',mssql.VarChar,pass)
    .input('FirstName',mssql.NVarChar,req.body.first_name)
    .input('LastName',mssql.NVarChar,req.body.last_name)
    .input('FullName',mssql.NVarChar,full_name)
    .query(sqlSelect, function(err,data){
      if(err){

      }else{
        res.send(data)
        return
      }
    });
  }




  async getAll(req, res ) {
    var pool = await connect;
    let sqlSelect = 'SELECT * FROM UserWeb';
    pool.request().query(sqlSelect,function(err,data){
      if(err){
        console.log(err)
      }else{
        console.log(data)
        res.send(data.recordsets)
      }
      });
   
   }


   async Delete(req,res){
    let pool = await connect;
    
    let sqlSelect = `DELETE FROM UserWeb WHERE id=@id`;
    return  await pool.request()
    .input('id',mssql.Int,req.body.id)
    .query(sqlSelect, function(err,data){
     res.send(data)
     });
   }


}
module.exports = new Usercontroller;