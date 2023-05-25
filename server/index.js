const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require('dotenv')
const crypto = require('crypto');
const app = express();
app.use(cors());
dotenv.config();
app.use(bodyParser.json());
const mongoose=require('mongoose')



const BlogSchema=new mongoose.Schema({
    name: String,

  title: String,

   

})
const BlogModel=new mongoose.model("Authors",BlogSchema)

const BlogByid = [
    {
        id:1,
      name:'WEB DEVELOPMENT',
      title:'Lorem ipsum dolor sit amet, consect et'
    },
    {
        id:2,
      name:'PHOTOGRAPHY',
      title:'Lorem ipsum dolor sit amet, consect et'
    }

    
  ];





app.get("/api", (req, res) => {
    res.send("Welcome to Our API!");
  });
  app.get('/api/product', (req, res) => {
    const {name} = req.query
    if (!name) {
        res.status(200).send(BlogByid)

    } else {
        res.status(200).send(BlogByid.filter((x) => x.name.toLowerCase().trim().includes(name.toLowerCase().trim())))
    }

})
  

app.get(`/api/product/:id`,(req,res)=>{
    const {id} =req.params;
    res.status(200).send(BlogByid.find((x)=>x.id==id))
})

app.delete(`/api/product/:id`,(req,res)=>{
    const {id}=req.params
    const deleteBlog=BlogByid.find((x)=>x.id==id)
    const idx=BlogByid.indexOf(deleteBlog)
    BlogByid.splice(idx,1)

    res.status(203).send({
        message:`${deleteBlog.name}deleted successufully!`
    })
})



app.post(`/api/product`,(req,res)=>{
    const{name, title}=req.body;
    const newBlog={
        id:crypto.randomUUID(),
        name:name,
         title:title,
       
 }
    ColorByid.push(newBlog)
    res.status(201).send({
    message:`${newBlog.name} posted successufully`
   })
})


app.put(`/api/product/:id`,(req,res)=>{
    const id=req.params.id;
    const updatingBlog=BlogByid.find((x)=>x.id==id)
    const{name,title,}=req.body
    if (name) {
        updatingBlog.name=name
        
    }
    if (title) {
        updatingBlog.title=title
        
    }
    
    res.status(200).send(`${updatingBlog.name} uptading successufully`)
})



  PORT=process.env.PORT

  app.listen(PORT, () => {
    console.log(`App running on  PORT: ${PORT}`);
  });



  
  mongoose.connect('mongodb+srv://aytekin_admin:Admin1234@front.10shrnn.mongodb.net/?retryWrites=true&w=majority')
.then(()=>{
    console.log('Mongo Db connect');
})


