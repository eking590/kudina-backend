import branchRepository from "../respositories/branchRepository.js";







export const createBranch = async (req, res) => {
     try {
   
      const newBranch = {
        title:req.body.title,
        state: req.body.state, 
        location: req.body.location,
        region: req.body.region, 
        country: req.body.country, 
      } 
      
     
         const NewBranch = await branchRepository.create(newBranch);
         //await WelcomeEmail(newCustomer.email, newCustomer.firstName)
         res.status(201).send({ NewBranch, message:"Branch Created" });
     } catch (err) {
       res.status(500).send({ message: err.message });
     }
   };

//get all branches 
export const GetAllBranches = async (req, res)=>{
  const getBranches = await branchRepository.findAll(); 
  return res.status(200).json(getBranches)
}