import React from 'react'
import style from './home.module.css'
import { Helmet } from "react-helmet";

function Home() {
    return (
        <>

            <Helmet>
                <meta charSet="utf-8" />
                <title>HOME</title>
                
            </Helmet>
            <div className={style.home}>
                <div>
                    <h1 style={{ fontSize: '50px' }}>HEllo WE'RE BIZPRO</h1>
                    <p style={{ marginTop: '10px' }}>SUB HEAD,MOTTO OR MISSION SUBTITLE</p>
                    <button className={style.button} style={{ marginLeft: '50px', marginTop: '30PX', height: '50px' }}>SEE BOUR PROJECTS</button>
                </div>

            </div>
        </>
    )
}

export default Home