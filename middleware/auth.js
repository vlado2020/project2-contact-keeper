const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = function (req, res, next){
    //GET TOKEN FROM THE HEADER

    const token = req.header('x-auth-token')

    //check if not token

    if(!token){
        return res.status(401).json({msg: 'Nemate token, pristup zabranjen'})
    }

  try {
      const decoded = jwt.verify(token, config.get('jwtSecret'))

      req.user = decoded.user
      //unutra je samo { id: '6037e87af40d35073c860985' }
      console.dir(decoded.user)
      next()
  } catch (error) {
      res.status(401).json({msg: 'Token nije ispravan'})
  }

}