const express = require('express')
const  router = express.Router()

const Usercontroller = require('../../controller/UserController/usercontroller')

router.post('/register',Usercontroller.rigister)
router.put('/update',Usercontroller.update)
router.delete('/delete',Usercontroller.Delete)
router.get('/productAll',Usercontroller.getAll)
 


module.exports = router