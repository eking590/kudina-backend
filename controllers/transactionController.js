import accountRepository from '../respositories/accountRepository.js';
import transactionRepository from '../respositories/transactionRepository.js';


export const createTransaction = async (req, res) => {
    // const hashedPassword = await bcrypt.hash(req.body.password, 8);
     try {
       //check if the user from the frontend matches with the one in the db 
       const customerAccount = await accountRepository.findById({ _id : req.body.accountId});
       if (!customerAccount) {
         return res.status(400).send({ message: `customer Account don't exists`});
       } 
   
      const newTransaction = {
        amount:req.body.amount,
        transactionType: req.body.transactionType, 
        io: req.body.io,
        description: req.body.description, 
        accountOfficer: req.body.accountOfficer, 
      } 
      
      //subtract the new amount from the 

      const amountAsInteger = parseInt(newTransaction.amount, 10) 
      const getPreviousAmount = parseInt(customerAccount.balance, 10);  
      
      const subtractAmount =  getPreviousAmount - amountAsInteger;  

     
         const TransactionNew = await transactionRepository.create(newTransaction);
         //await WelcomeEmail(newCustomer.email, newCustomer.firstName)
        //  res.status(201).send({ TransactionNew, message:"Transaction Approved/Completed" });
        const updateCustomerAccount = await accountRepository.update(customerAccount._id,
          { balance: subtractAmount},
          { new: true }
        )
        
         try {
         
         const updateOldtransaction = await transactionRepository.update(TransactionNew._id,
          { old_balance: getPreviousAmount,
            new_balance: subtractAmount, 
            balance: subtractAmount,
           }, 
          { new: true }
      ) 


      await updateOldtransaction.save();
      return res.status(201).json({message:'transaction updated successfully!!!', data:updateOldtransaction})

      
      
         } catch (error) {
          res.status(500).send({ message: err.message});
         }

     } catch (err) {
       res.status(500).send({ message: err.message });
     }
   };

   //get all transaction 
export const GetAllTransaction = async(req, res) => {
  const AllTransaction = await transactionRepository.findAll(); 
  return res.status(200).json({message: 'all customers transactions', data:AllTransaction})
}; 

//get a transaction 
export const GetTransaction = async(req, res)=>{
  const transactionId = req.body.TransactionId; 
  const existingTransaction = await transactionRepository.findById({ _id: transactionId }) 
  if (!existingTransaction) {
      return res.status(404).json(`transaction with this ${transactionId} not found!!`)
  } 
  return res.status(200).json({data:existingTransaction, message:`customer's transaction`})
}

//delete a transaction 
export const deleteTransaction = async(req, res) => {
  const transactionId = req.body.TransactionId; 
  const existingTransaction = await transactionRepository.findById({ _id: transactionId})
  if(!existingTransaction){
    return res.status(404).json(`transaction with this ${transactionId} does not exist!!!`)
  }
  const deleteTransaction = await transactionRepository.delete(existingTransaction);
  return res.status(200).json({message: 'transaction deleted', data:deleteTransaction})
} 

//update a transaction 

export const updateTransaction = async(req, res) => {
  try {
      const id = req.body.id; 
      
      const checkid = await transactionRepository.findById({ _id: id })
      if (!checkid) {
          return res.status(404).send('id not found!!!')
      }
      const newUpdate = req.body; 
      const updateCustomerTransaction = await transactionRepository.update(checkid._id, newUpdate, 
          { new: true }
      ) 

      await updateCustomerTransaction.save();
      res.status(201).json({message:'transaction updated!!!', data:updateCustomerTransaction})
  } catch (error) {
      return error; 
  }
}