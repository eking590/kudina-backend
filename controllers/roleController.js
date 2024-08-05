import roleRepository from "../respositories/roleRepository.js"; 

export const newRole = async(req, res)=> {
    const title = req.body.title
    if (!title) {
        return res.status(404).send('title is INVALID!!')
    }
    const newRole = { title };  
    const RoleNew = await roleRepository.create(newRole);
         //await WelcomeEmail(newCustomer.email, newCustomer.firstName)
    return res.status(201).send({ RoleNew, message:"Role Created!!!" });
} 

//get a role 

export const getRole = async(req, res) => {
    const id = req.body.id; 
    const checkId = await roleRepository.findById({ _id: id})
    if (!checkId) {
        return res.status(400).send('title with the id not FOUND!!!') 
    } 
    return res.status(200).json({ message: 'title found!!', data:checkId})
} 

//get all user roles
export const getAllRoles = async(req, res) => {
    try {
        const getRoles = await roleRepository.findAll()
        return res.status(200).json({ message: 'all users role', data:getRoles})
    } catch (error) {
        return error; 
    }
} 

//update a user role 
export const updateRole = async(req, res) => {
    try {
        const id = req.body.id; 
        
        const checkid = await roleRepository.findById({ _id: id })
        if (!checkid) {
            return res.status(404).send('title not found!!!')
        }
        const Newtitle = req.body.title; 
        const updateUserRole = await roleRepository.update(checkid._id,
            { title: Newtitle }, 
            { new: true }
        ) 

        await updateUserRole.save();
        res.status(201).json({message:'user role updated!!!', data:updateUserRole})
    } catch (error) {
        return error; 
    }
}


//delete a user role 
export const deleteUserRole = async(req, res) =>{
    const id = req.body.id; 
    const existingUser = await roleRepository.findById({ _id: id}) 
    if (!existingUser) {
        return res.status(404).send('this user role not Found!!!')
    } 
    const deleteRole = await roleRepository.delete(existingUser._id) 
    return res.status(200).json({message:'user role deleted successfully!!!', data:deleteRole})
}