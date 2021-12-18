var express = require('express');
var router = express.Router();
var user_controller = require('../controllers/userController');

// show home page
router.get('/', function(req, res, next) {
  if (req.session.isLoggedIn === true) {
    res.render('index', {
      title: 'Record Store Mania - Find Record Stores Near You!',
      isLoggedIn: true,
      username: req.session.username
    });
  } else {
    res.render('index', { title: 'Record Store Mania - Find Record Stores Near You!' });
  }
});

// display user registration page
router.get('/register', user_controller.display_registration);

// register user
router.post('/register', user_controller.register_user);

// display login page
// router.get('/login', user_controller.display_login);

// login user
// router.post('/login', user_controller.login_user);

// logout user
// router.get('/logout', user_controller.logout_user);

// display forgot password page
// router.get('/forgot', user_controller.display_forgot);

// send reset password email
// router.post('/forgot', user_controller.send_reset);

// display reset password page
// router.get('/reset/:token', user_controller.display_reset);

// reset password
// router.post('/reset', user_controller.reset_password);

// display password updated confirmation page
// router.get('/password-updated', user_controller.password_updated);

// display password updated confirmation page
// router.get('/session-expired', user_controller.session_expired);

module.exports = router;
