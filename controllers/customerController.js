import customerRepository from "../respositories/customerRepository.js";
const JWT_SECRET = process.env.JWT_SECRET || 'mayorgnn@088';


export const createCustomer = async (req, res) => {
   // const hashedPassword = await bcrypt.hash(req.body.password, 8);
    try {
      //check if there is an existing phone number 
      const existingCustomer = await customerRepository.findOne({ phoneNumber: req.body.phoneNumber });
      if (existingCustomer) {
        return res.status(400).send({ message: 'phoneNumber already exists' });
      }
  
     const newCustomer = {
      firstName:req.body.firstName,
      //password:hashedPassword,
      lastName:req.body.lastName,
      email: req.body.email, 
      HomeAddress: req.body.HomeAddress, 
      BankName: req.body.BankName, 
      AccountNumber: req.body.AccountNumber,
      AccountName: req.body.AccountName, 
      profileImage: req.body.profileImage, 
      natureOfJob: req.body.natureOfJob, 
      DailyIncome: req.body.DailyIncome, 
      MonthlyIncome: req.body.MonthlyIncome,
      HomeStatus: req.body.HomeStatus, 
      workAddress: req.body.workAddress, 
      value:req.body.value, 
      particulars: req.body.particulars, 
      phoneNumber:req.body.phoneNumber, 
      //role:req.body.role,
      branch:req.body.branch,
      guarantorsName:req.body.guarantorsName,
      guarantorsNumber: req.body.guarantorsNumber,
      guarantorsJob: req.body.guarantorsJob, 
      guarantorsaddress:req.body.guarantorsaddress,
      accountOfficer: req.body.accountOfficer
     }
  
    
        const customer = await customerRepository.create(newCustomer);
        //await WelcomeEmail(newCustomer.email, newCustomer.firstName)
        res.status(201).send({ customer, message:"Customer created successfully" });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };


export const GetCustomer = async(req, res) => {
  const id = req.body.CustomerId; 

  const existingCustomer = await customerRepository.findById({ _id: id}); 
  if (!existingCustomer) {
      res.status(404).json(`customer with the ID ${id} not found!!!`) 
  } 
  return res.status(200).json({message: 'list of customer', data: existingCustomer}); 

}