import userRepository from "../respositories/userRepository.js";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs'; 
const JWT_SECRET = process.env.JWT_SECRET || 'mayorgnn@088';

export const create = async (req, res) => {
    try {
      const existingUser = await userRepository.findByEmail(req.body.email);
      if (existingUser) {
        return res.status(400).send({ message: 'User already exists' });
      }
  
      const hashedPassword = await bcrypt.hash(req.body.password, 8);
      const user = await userRepository.create({ ...req.body, password: hashedPassword });
      res.status(201).send(user);
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  }; 

  // create user 
export const createUser = async (req, res) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 8);
    const apiKey = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15); 
    try {
      //check if there is an existing phone number 
      const existingUser = await userRepository.findOne({ phoneNumber: req.body.phoneNumber });
      if (existingUser) {
        return res.status(400).send({ message: 'phoneNumber already exists' });
      }
  
     const newUser = {
      firstName:req.body.firstName,
      password:hashedPassword,
      lastName:req.body.lastName,
      phoneNumber:req.body.phoneNumber, 
      role:req.body.role,
      apiKey: apiKey,
      branch:req.body.branch,
      guarantor:req.body.guarantor,
      guarantorsNumber: req.body.guarantorsNumber,
      guarantorAddress:req.body.guarantorAddress,
     }
  
    
        const user = await userRepository.create(newUser);
        //await WelcomeEmail(newUser.email, newUser.fullName)
        res.status(201).send({user, message:"User created successfully" });
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };

  export const login = async (req, res) => {
    try {
      const { phoneNumber, password } = req.body;
  
      if (!phoneNumber || !password) {
        return res.status(400).send({ message: 'phoneNumber and password are required' });
      }
      const user = await userRepository.findOne({phoneNumber});
  
      if (!user) {
        return res.status(404).send({ message: 'User not found' });
      }
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return res.status(401).send({ message: 'Invalid password' });
      }
  
      const token = jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
      //res.status(200).send({ token }); 
      return res.status(200).json({ data: user, token }); 
    } catch (err) {
      res.status(500).send({ message: err.message });
    }
  };



  export const createRole = async (req, res) => {
    try {
      const UserId = req.body.userId; 
      const existingUser = await userRepository.findById({ _id : UserId });
       if (!existingUser) {
         return res.status(400).send({ message: ` User don't exists`});
       } 
       //update the user model with the new role 
       const newTitle  = req.body.title; 
      const updateUser = await userRepository.update(existingUser._id, 
        { title: newTitle }, 
        { new: true }
      
      
      ) 
      await updateUser.save(); 
      res.status(201).send({ updateUser, message: 'UserRole Created' })
    } catch (error) {
      res.status(500).send({ message: err.message });
    }
  }


  export const GetAllRoles = async(req, res) => {
    const gellRoles = await userRepository.findAll('title'); 
    return res.json(gellRoles)
  } 