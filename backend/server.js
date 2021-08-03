import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors'

import * as db from './db/index.js'

dotenv.config()

const app = express();

app.use(cors())
app.use(express.json());

// Select all the users
app.get('/api/v1/users', async (req,res)=>{
    try {
        const results=await db.query('select * from users;')
        console.log(results.rows)
        res.status(200).json({
        status:'success',
        results:results.rows.length,
        data:results.rows
        
    })

    } catch (error){
        console.log(error)
    }
    
})
// select user by id
app.get('/api/v1/users/:id',async (req,res)=>{
    const id=req.params.id
    const text="select * from users where user_id = $1;"
    const values=[id]
    try {
        
        const result= await db.query(text,values)
        res.status(200).json({
        status:'success',
        data: result.rows[0]
    
        })
    } catch (error){
        console.log(error)
    }
})

// create new user
app.patch('/api/v1/users',async (req,res)=>{
    console.log(req.body)
    try {
        const results= await db.query('update restaurants set users (username,password,email) values ($1,$2,$3)',[req.body.username,req.body.password,req.body.email])
        console.log(results)
        res.status(200).json({
        status:'success',
        })
    } catch (error){
        console.log(error)
    }
    
})

// delete a user by id
app.delete('/api/v1/users/:id',async (req,res)=>{
    const id=req.params.id
    const text="delete from users where user_id = $1;"
    const values=[id]
    try {
        
        const result= await db.query(text,values)
        res.status(200).json({
        status:'success',
        message: 'selected user is deleted'
    
        })
    } catch (error){
        console.log(error)
    }
})

// update user by id
app.put('/api/v1/users/:id',async (req,res)=>{
    const id=req.params.id
    const text="update users set firstname= $1,lastname=$2,email=$3,password=$4 where user_id = $5;"
    const values=[req.body.firstname,req.body.lastname,req.body.email,req.body.password,id]
    try {
        
        const result= await db.query(text,values)
        res.status(200).json({
        status:'success',
        message: 'User information updated'
    
        })
    } catch (error){
        console.log(error)
    }
})

app.post('/api/v1/users',async (req,res)=>{
    const text="insert into users (firstname,lastname,password,email) values ($1,$2,$3,$4);"
    const values=[req.body.firstname,req.body.lastname,req.body.email,req.body.password]
    try {
        const result= await db.query(text,values)
        res.status(200).json({
        status:'success',
        message: 'New user created'
        })

    } catch (error){
        console.log(error)
    }

})

const port=process.env.PORT || 3001
 
app.listen(port, () =>
  console.log('listening on port',port)
);

