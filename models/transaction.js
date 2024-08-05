import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
    amount: { type: String, required: true },
    accountId: mongoose.Schema.Types.ObjectId, 
    customerId: {type:String, required: true}, 
    transactionType : { type: String, required: true },
    io: { type: String, required: true },
    description: { type: String, required: true },
    accountOfficer: {type: String, required: true},
    old_balance: {type: String, default:'0'}, 
    new_balance:{ type: String, default:'0' }, 
    balance: {type: String, }
    
}, {
  timestamps: true,
}); 

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;

