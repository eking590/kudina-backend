import Branch from "../models/branch.js";

class branchRepository {
    async create(branch) {
        const newBranch = new Branch(branch);
        return await newBranch.save();
      }
    
      async findAll() {
        return await Branch.find();
      }
    
      async findById(id) {
        return await Branch.findById(id);
      }
    
      async findByEmail(email) {
        return await Branch.findOne({ email });
      }
    
      async update(id, branch) {
        return await Branch.findByIdAndUpdate(id, branch, { new: true });
      }
    
      async delete(id) {
        return await Branch.findByIdAndRemove(id);
      } 
    
      // async findOne(data){
      //   return await User.findOne({ data }); 
      // }
    
       async findOne(query) {
        return await Branch.findOne(query)
      }
    
    }
    

export default new branchRepository();