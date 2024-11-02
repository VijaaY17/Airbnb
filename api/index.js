import db from './db/db_connect.js';
import express from 'express';
import cors from 'cors';
import { v4 } from 'uuid';
import { UserSchema } from './db/schema.js';
import { eq } from 'drizzle-orm';
import bcrypt from 'bcrypt'

const app = express();
app.use(express.json());

app.use(cors(
  {
    credentials:true,
    origin:'http://localhost:5173'
  }
))
app.get('/test', (req, res) => {
  res.send('Hello World!');
}); 


app.post('/create', async (req, res) => {
  try {
    const id = v4();
    const { name,address } = req.body;

    // Adjust this part based on drizzle-orm or your database library's API
    await db.insert(UserSchema).values({
      id,
      name,
      address
    });

    // Fetch the created user
    const [user] = await db.select().from(UserSchema).where(eq(UserSchema.id, id));
    
    res.send(user);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).send({ error: 'Failed to create user' });
  }
});

app.post('/register',async(req,res)=>{
  try{
    const {name,email,password} = req.body
    if(!name || !email || !password){
      return res.status(400).json({error:'All fields are required'})
    }
    const hashedpassword = await bcrypt.hash(password,10)
    let id = v4()
    const newUser = await db.insert(UserSchema).values({
      id,
      name,
      email,
      password:hashedpassword
    })

    const[user] = await db.select().from(UserSchema).where(eq(UserSchema.id,id))
    return res.status(201).json('User created successfully')

  } catch(error)
  {
    console.log(error)
    return res.status(500).json({error:'Internal server error'})

  }
})

app.post('/login',async(req,res)=>{
  try{
    const{email,password} = req.body
    if(!email || !password){
      return res.status(400).json('Every field should be filled')
    }
    const [UserDetails]= await db.select().from(UserSchema).where(eq(UserSchema.email,email)).limit(1)
    console.log(UserDetails)
    if(!UserDetails)
    {
      return res.status(401).json('Invalid credentials')
    }
    console.log(UserDetails.password)
    console.log(password)
    const comparepassword = await bcrypt.compare(password,UserDetails.password)
    if(!comparepassword)
    {
      return res.status(401).json({error:'Wrong password'})
    }

    return res.status(201).json({message:'Login successfull',user:UserDetails})


  } catch(error)
  {
    console.log(error)
    return res.status(500).json({error:'Internal server failed'})
  }
})


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
