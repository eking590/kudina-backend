import accountRepository from '../respositories/accountRepository.js';
import CustomerRepository from '../respositories/customerRepository.js';


export const createAccount = async (req, res) => {
    // const hashedPassword = await bcrypt.hash(req.body.password, 8);

     try {
       //check if the user from the frontend matches with the one in the db 
       const existingCustomer = await CustomerRepository.findById({ _id : req.body.customerId});
       if (!existingCustomer) {
         return res.status(400).send({ message: `customer don't exists`});
       } 
       
       const interestRate = 26; 
       const principal = req.body.ApprovedSum; 
       const interest = principal * (interestRate/100)
       const total = parseInt(principal) + parseInt(interest)

      const newAccount = {
       firstName:req.body.firstName,
       lastName:req.body.lastName, 
       dailyRate: req.body.dailyRate,
       Accumulation: req.body.Accumulation, 
       maturityDate: req.body.maturityDate, 
       balance: total, 
       interestRate, 
       interest, 
       loan: total
       
      } 
    
      const existingAccount = await accountRepository.findOne({ firstName: newAccount.firstName, lastName: newAccount.lastName });
      if (existingAccount) {
        return res.status(400).send({ message: `An account with the name ${newAccount.firstName} ${newAccount.lastName} already exists` });
      }
     
      //ha

         const accountNew = await accountRepository.create(newAccount);
         //await WelcomeEmail(newCustomer.email, newCustomer.firstName)
         res.status(201).send({ accountNew, message:"Account Created!!!" });
     } catch (err) {
       res.status(500).send({ message: err.message });
     }
   };


//get all accounts 
export const GetAllAccounts = async(req, res) => {
  const AllAccounts = await accountRepository.findAll(); 
  return res.status(200).json({message: 'all customers account', data:AllAccounts})
}; 

//get an account 
export const GetAccount = async(req, res)=>{
  const accountId = req.body.AccountId; 
  const existingAccount = await accountRepository.findById({ _id: accountId }) 
  if (!existingAccount) {
      return res.status(404).json(`account with this ${accountId} not found!!`)
  } 
  return res.status(200).json({data:existingAccount, message:'customer account'})
}