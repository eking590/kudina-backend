import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true }, 
    apiKey: { type: String, }, 
    password: { type: String, required: true },
    role: { type: String, required: true },
    branch: { type: String, required: true },
    status: {type: String, default:'inactive'}, 
    guarantor: { type: String, required: true },
    guarantorsNumber: { type: String, required: true },
    guarantorAddress: { type: String, required: true },
    title: { type:String, default:'regular' }
}, {
  timestamps: true,
});

const User = mongoose.model('User', UserSchema);

export default User;

