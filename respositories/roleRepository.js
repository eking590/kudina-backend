import role from "../models/roles.js";

class RoleRepository {
    async create(Role) {
        const newRole = new role(Role);
        return await newRole.save();
      }
    
      async findAll() {
        return await role.find();
      }
    
      async findById(id) {
        return await role.findById(id);
      }
    
    //   async findByEmail(email) {
    //     return await Transaction.findOne({ email });
    //   }
    
      async update(id, Role) {
        return await role.findByIdAndUpdate(id, Role, { new: true });
      }
    
      async delete(id) {
        return await role.findByIdAndDelete(id);
      } 
    
      // async findOne(data){
      //   return await User.findOne({ data }); 
      // }
    
       async findOne(query) {
        return await role.findOne(query)
      }
    
    }
    

export default new RoleRepository();