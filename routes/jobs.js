const router = require('express').Router()
const jobsCtrl = require('../controllers/jobs.js')
const middleware = require('../middleware/auth.js')

const { decodeUserFromToken, checkAuth } = middleware

/*-------------- Public Routes ------------------*/



/*------------- Protected Routes ----------------*/
router.use(decodeUserFromToken)
router.get('/', checkAuth, jobsCtrl.index)
router.post('/', checkAuth, jobsCtrl.create)
router.put('/:id', checkAuth, jobsCtrl.update)
router.delete('/:id', checkAuth, jobsCtrl.delete)


module.exports = router