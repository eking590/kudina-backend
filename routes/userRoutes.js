import { Router } from 'express';
import { createUser, login } from '../controllers/userController.js';
//import { ValidateToken } from '../middleware/validateToken.js';
const router = Router();

router.post('/register', createUser);
// router.get('/findAllUser', findAll);
// router.get('/findOne:id', findOne);
// router.put('/updateOne:id', update);
// router.delete('/deleteOne:id', deleteUser);
router.post('/login', login)
// router.get('/getCurrentUser', ValidateToken, getCurrentUser)

// router.post('/forgot-password', forgotPassword);
// router.post('/reset-password', resetPassword);

export { router as userRoutes }