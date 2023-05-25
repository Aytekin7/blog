import React, { useEffect, useState } from 'react'

function About() {

const[products,setProducts]=useState([])
  
   useEffect(()=>{
   fetch("http://localhost:8080/api/product")
   .then(res=>res.json())
   .then(info=>
       console.log(info)
      )
   
    
   },[])
   

  return (
    <>

    <h1 style={{marginLeft:'40%',marginTop:'150px'}}>ABOUT OUR BIZPRO</h1>
    <p style={{marginLeft:'25%',marginTop:'10px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
   <p  style={{marginLeft:'30%',marginTop:'10px'}}>standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>

   <div style={{marginTop:'100px',display:'flex',gap:'15px',marginLeft:'100px'}}>
    <div style={{width:'20%',height:'40%',border:'1px solid black'}}>
    <i style={{fontSize:'100px',marginLeft:'30%'}} class="fa-solid fa-pen-to-square"></i>
    <h2 style={{marginLeft:'15px',marginTop:'10px',color:'purple'}}>WEB DEVELOPMENT</h2>
   <div style={{marginLeft:'10px',marginTop:'10px'}}>
   <p>Lorem ipsum dolor sit amet, consect et</p>
    <p style={{marginTop:'10px'}}>adipiscing elit, sed do eiusmod tempor</p>
    <p style={{marginTop:'10px'}}>incididunt ut labore et dolore magna.</p>
   </div>
   <button style={{marginLeft:'30px',marginTop:'20px',height:'40px',width:'100px',backgroundColor:'plum',color:'white'}}>MORE DETAILS</button>
    </div>




    <div style={{width:'20%',height:'40%',border:'1px solid black'}}>
    <i  style={{fontSize:'100px',marginLeft:'30%'}} class="fa-solid fa-camera"></i>
    <h2 style={{marginLeft:'20px',marginTop:'10px',color:'purple'}}>PHOTOGRAPHY</h2>
    <div style={{marginLeft:'10px',marginTop:'10px'}}>
   <p>Lorem ipsum dolor sit amet, consect et</p>
    <p style={{marginTop:'10px'}}>adipiscing elit, sed do eiusmod tempor</p>
    <p style={{marginTop:'10px'}}>incididunt ut labore et dolore magna.</p>
   </div>
   <button style={{marginLeft:'30px',marginTop:'20px',height:'40px',width:'100px',backgroundColor:'plum',color:'white'}}>MORE DETAILS</button>


    </div>



    <div style={{width:'20%',height:'40%',border:'1px solid black'}}>
    <i style={{fontSize:'100px',marginLeft:'30%'}} class="fa-solid fa-circle-dot"></i>
    <h2 style={{marginLeft:'20px',marginTop:'10px',color:'purple'}}>DIGITAL MEDIA</h2>
    <div style={{marginLeft:'10px',marginTop:'10px'}}>
   <p>Lorem ipsum dolor sit amet, consect et</p>
    <p style={{marginTop:'10px'}}>adipiscing elit, sed do eiusmod tempor</p>
    <p style={{marginTop:'10px'}}>incididunt ut labore et dolore magna.</p>
   </div>

   <button style={{marginLeft:'30px',marginTop:'20px',height:'40px',width:'100px',backgroundColor:'plum',color:'white'}}>MORE DETAILS</button>

    </div>
    <div style={{width:'20%',height:'40%',border:'1px solid black'}}>
    <i style={{fontSize:'100px',marginLeft:'30%'}} class="fa-solid fa-bolt"></i>
    <h2 style={{marginLeft:'20px',marginTop:'10px',color:'purple'}}>ONLINE MARKETING</h2>

    <div style={{marginLeft:'10px',marginTop:'10px'}}>
   <p>Lorem ipsum dolor sit amet, consect et</p>
    <p style={{marginTop:'10px'}}>adipiscing elit, sed do eiusmod tempor</p>
    <p style={{marginTop:'10px'}}>incididunt ut labore et dolore magna.</p>
   </div>
   <button style={{marginLeft:'30px',marginTop:'20px',height:'40px',width:'100px',backgroundColor:'plum',color:'white'}}>MORE DETAILS</button>


    </div>

  

   </div>
   </>
  )
}

export default About