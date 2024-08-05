import { Router } from 'express';
import { createCustomer, GetCustomer } from "../controllers/customerController.js";
import { createAccount, GetAccount, GetAllAccounts } from '../controllers/accountController.js';
import { createTransaction, GetAllTransaction, GetTransaction } from '../controllers/transactionController.js';

const router = Router();

router.post('/create-customer', createCustomer); 
router.post('/create-account', createAccount); 
router.post('/create-transaction', createTransaction); 
router.get('/customer', GetCustomer); 
router.get('/get-all-accounts', GetAllAccounts); 
router.get('/get-all-accounts-by-id', GetAccount)
router.get('/account/transactions', GetAllTransaction)
router.get('/account/get-all-transactions-by-id', GetTransaction)





export { router as customerRoutes }