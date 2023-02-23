const router = require('express').Router()
const jobsCtrl = require('../controllers/jobs.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*-------------- Public Routes ------------------*/



/*------------- Protected Routes ----------------*/
router.use(decodeUserFromToken)


module.exports = router