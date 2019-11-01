const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = async function(req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');
  console.log(token);

  // if there is NO token => send response
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // if there is token => verify token
  try {
    const decoded = jwt.verify(token, config.get('jwtSecret'));

    req.user = decoded.user;
    next();
  } catch (error) {
    console.error('something wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
};
