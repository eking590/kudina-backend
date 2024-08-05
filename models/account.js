import mongoose from 'mongoose';

const AccountSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    ApprovedSum: { type: String,  },
    dailyRate: { type: String, required: true },
    Accumulation: { type: String, required: true },
    customerId: mongoose.Schema.Types.ObjectId, 
    maturityDate: { type: String, required: true },
    status: {type: String, default:'inactive'} ,
    balance: { type: String, required: true }, 
    loan: { type: String, }, 
    interest: {type: String}, 
    interestRate: { type: String}, 
    total: {type: String}


    
}, {
  timestamps: true,
}); 

const Account = mongoose.model('Account', AccountSchema);

export default Account;

