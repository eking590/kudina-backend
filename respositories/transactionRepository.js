import Transaction from "../models/transaction.js";

class transactionRepository {
    async create(transaction) {
        const newTransaction = new Transaction(transaction);
        return await newTransaction.save();
      }
    
      async findAll() {
        return await Transaction.find();
      }
    
      async findById(id) {
        return await Transaction.findById(id);
      }
    
      async findByEmail(email) {
        return await Transaction.findOne({ email });
      }
    
      async update(id, transaction) {
        return await Transaction.findByIdAndUpdate(id, transaction, { new: true });
      }
    
      async delete(id) {
        return await Transaction.findByIdAndRemove(id);
      } 
    
      // async findOne(data){
      //   return await User.findOne({ data }); 
      // }
    
       async findOne(query) {
        return await Transaction.findOne(query)
      }
    
    }
    

export default new transactionRepository();