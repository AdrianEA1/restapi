const { Router } = require ('express')

const router = Router()
const {getUsers, creaUser, getUserById, deleUser, updaUser} = require('../controllers/index.controller'); // export the
router.get('/users', getUsers)
router.post('/users', creaUser)
router.get('/users/:id', getUserById)
router.delete('/users/:id', deleUser)
router.put('/users/:id', updaUser)


module.exports = router