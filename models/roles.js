import mongoose from 'mongoose';

const RoleSchema = new mongoose.Schema({
  
  title: { type: String, required: true }
    
    
}, {
  timestamps: true,
}); 

const  role = mongoose.model('RoleSchema', RoleSchema);

export default role;

