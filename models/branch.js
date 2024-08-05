import mongoose from 'mongoose';

const BranchSchema = new mongoose.Schema({
    state: { type: String, required: true }, 
    location: { type: String, required: true },
    region: { type: String, required: true },
    country: { type: String, required: true },
    title: { type:String, required: true, default:'regular' }, 
    ids: [{ type: mongoose.Schema.Types.ObjectId, default: []}],
}, {
  timestamps: true,
});

const Branch = mongoose.model('Branch', BranchSchema);

export default Branch;

