import Customer from "../models/customer.js";

class CustomerRepository {
    async create(customer) {
        const newCustomer = new Customer(customer);
        return await newCustomer.save();
      }
    
      async findAll() {
        return await Customer.find();
      }
    
      async findById(id) {
        return await Customer.findById(id);
      }
    
      async findByEmail(email) {
        return await Customer.findOne({ email });
      }
    
      async update(id, customer) {
        return await Customer.findByIdAndUpdate(id, customer, { new: true });
      }
    
      async delete(id) {
        return await Customer.findByIdAndRemove(id);
      } 
    
      // async findOne(data){
      //   return await User.findOne({ data }); 
      // }
    
       async findOne(query) {
        return await Customer.findOne(query)
      }
    
    }
    

export default new CustomerRepository();