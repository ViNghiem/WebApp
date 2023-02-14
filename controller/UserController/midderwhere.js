class Miderwhere {
  VerifyTokenUser(req,res,next){
    const token = req.headers.token
    if(token){
      jwt.verify(token,setting.TOKEN_KEY , function(err, user) {
        if(err){
          res.status(401).send("Phiên đăng nhập hết hạn");
        }else{
          req.user = user;
          next()
        }
      });
    }else{
      res.status(401).send("bạn chưa đăng nhập")
    }
  }
}

module.exports = new Miderwhere;