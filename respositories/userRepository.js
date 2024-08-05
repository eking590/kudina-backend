import User from "../models/user.js"; 

class userRepository {
    async create(user) {
        const newUser = new User(user);
        return await newUser.save();
      }
    
      async findAll() {
        return await User.find();
      }
    
      async findById(id) {
        return await User.findById(id);
      }
    
      async findByEmail(email) {
        return await User.findOne({ email });
      }
    
      async update(id, user) {
        return await User.findByIdAndUpdate(id, user, { new: true });
      }
    
      async delete(id) {
        return await User.findByIdAndRemove(id);
      } 
    
      // async findOne(data){
      //   return await User.findOne({ data }); 
      // }
    
       async findOne(query) {
        return await User.findOne(query)
      }
    
    }
    

export default new userRepository();