import React from 'react'
import { Card } from 'antd';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
function Blog() {
    return (
        <>
        <h1 style={{marginLeft:'40%',marginTop:'100px'}}>OUR LATEST BLOG</h1>
        <div style={{marginLeft:'30%',marginTop:'10px'}}>
        <p style={{marginTop:'10px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
        <p style={{marginTop:'10px'}}>standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>

        </div>

    
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} >
                    <Grid item xs={8} >
                        <div className='container' style={{display:'flex',gap:'20px',marginTop:'30px',justifyContent:'space-between',marginLeft:'200px'}}>  

                       <div>
                       <Card
                            hoverable
                            style={{ width: 340 }}
                            cover={<img alt="example" src="https://preview.colorlib.com/theme/bizpro/images/blog/1.jpg.webp" />}
                        >
                            <h5>Playback: Akufo-Addo speaks to business <br/> community</h5>
                            <p>Posted by <span style={{color:'red'}}>admin</span> at 04 Feb, 2017</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Etiam sagittis iaculis velit in tristique. Curabitur ac urna<br/>
                            urna sed accumsan... Read More</p>
                          
                        </Card>
                       </div>

                               
                       <div>
                       <Card
                            hoverable
                            style={{ width: 340}}
                            cover={<img alt="example" src="https://preview.colorlib.com/theme/bizpro/images/blog/2.jpg.webp" />}
                        >
                            
                            <h5>Playback: Akufo-Addo speaks to business <br/> community</h5>
                            <p>Posted by <span style={{color:'red'}}>admin</span> at 04 Feb, 2017</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Etiam sagittis iaculis velit in tristique. Curabitur ac urna<br/>
                            urna sed accumsan... Read More</p>
                          
                          
                        </Card>
                       </div>

                               
                       <div>
                       <Card
                            hoverable
                            style={{ width: 340 }}
                            cover={<img alt="example" src="https://preview.colorlib.com/theme/bizpro/images/blog/3.jpg.webp" />}
                        >
                            
                            <h5>Playback: Akufo-Addo speaks to business <br/> community</h5>
                            <p>Posted by <span style={{color:'red'}}>admin</span> at 04 Feb, 2017</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Etiam sagittis iaculis velit in tristique. Curabitur ac urna<br/>
                            urna sed accumsan... Read More</p>
                          
                          
                        </Card>
                       </div>



                        </div>




                    </Grid>
                </Grid>
            </Box>



        </>
    )
}

export default Blog