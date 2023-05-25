import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Card } from 'antd';

function Team() {
    return (
        <>
        <h1 style={{marginLeft:'40%',marginTop:'90px'}}>MEET OUR TEAM</h1>
        <p style={{marginLeft:'30%',marginTop:'10px'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
     <p style={{marginLeft:'35%'}}>standard dummy text ever since the 1500s, when an unknown printer took a galley of type.</p>

            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>

                     <div style={{display:'flex',justifyContent:'center',gap:'30px',marginTop:'50px',alignItems:'center',marginLeft:'40%'}}>
                     <Card
                            hoverable
                            style={{ width: 340 }}
                            cover={<img alt="example" src="https://preview.colorlib.com/theme/bizpro/images/team/1.jpg.webp" />}
                        >
                            <h2>Gonzalez Gina</h2>
                            <p>Web Devoloper</p>
                        </Card>

                        <Card
                            hoverable
                            style={{ width: 340 }}
                            cover={<img alt="example" src="https://preview.colorlib.com/theme/bizpro/images/team/2.jpg.webp" />}
                        >
                            
                            <h2>Holly Vincenzini</h2>
                            <p>Media Partner</p>
                            
                        </Card>


                        <Card
                            hoverable
                            style={{ width: 340 }}
                            cover={<img alt="example" src="https://preview.colorlib.com/theme/bizpro/images/team/3.jpg.webp" />}
                        >
                            
                            <h2>Ramirez Minita</h2>
                            <p>Graphic Design</p>
                            
                        </Card>

                     </div>





                    </Grid>
                </Grid>
            </Box>



        </>
    )
}

export default Team