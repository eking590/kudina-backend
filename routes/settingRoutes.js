import { Router } from 'express';
import { createRole, GetAllRoles } from '../controllers/userController.js';
import { createBranch, GetAllBranches } from '../controllers/branchController.js';
import { deleteUserRole, getAllRoles, getRole, newRole, updateRole } from '../controllers/roleController.js';
const router = Router();

router.post('/create-branch', createBranch);
router.post('/create-user-role', newRole); 
router.get('/get-all-user-roles', getAllRoles); 
router.get('/get-all-branches', GetAllBranches); 
router.get('/get-user-role', getRole); 
router.put('/update-user-role', updateRole); 
router.delete('/delete-user-role', deleteUserRole); 



export { router as settingsRoutes }