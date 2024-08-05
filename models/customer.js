import mongoose from 'mongoose';

const CustomerSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    HomeAddress: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    BankName: { type: String, required: true },
    //password: { type: String, required: true },
    AccountNumber: { type: String, required: true },
    AccountName: { type: String, required: true },
    profileImage: { type: String, required: true },
    natureOfJob: { type: String, required: true },
    DailyIncome: { type: String, required: true },
    MonthlyIncome:{ type: String, required: true},
    HomeStatus: { type: String, required: true}, 
    workAddress: { type: String, required: true}, 
    value: { type: String, required: true}, 
    particulars: { type: String, required: true},  
    //role: { type: String, required: true },
    branch: { type: String, required: true },
    guarantorsName: { type: String, required: true },
    guarantorsNumber: { type: String, required: true },
    guarantorsaddress: { type: String, required: true },
    guarantorsJob: { type: String, required: true},
    accountOfficer: {type: String, required: true}
}, {
  timestamps: true,
});

const Customer = mongoose.model('Customer', CustomerSchema);

export default Customer;

