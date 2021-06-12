import React, { useEffect, useState } from 'react';
import './covid.css';

const Covid = () => {
     const [cases,setcases]=useState([]);

     const getdata = async()=>{
        const url='https://api.covid19india.org/data.json';
        const data = await fetch(url);
        const res = await data.json();
        setcases(res.statewise[0]);
        console.log(res.statewise[0]);
    }
    useEffect(()=>{
        getdata();
    },[])
    return (
        <>
        <section>
        <div className="main_heading">
        <h1> Covid Live Tracker</h1></div>
        <div className="main_div">
           <div className="card">
           <h3>Active  : {cases.active}</h3>
           </div>
           <div className="card">
           <h3>Confirmed  : {cases.confirmed}</h3>
           </div>
           <div className="card">
           <h3>Deaths : {cases.deaths}</h3>
           </div>
        </div>
        <div className="main_div">
        <div className="card">
           <h3>Recovered : {cases.recovered}</h3>
           </div>
           <div className="card">
           <h3>Last update : {cases.lastupdatedtime}</h3>
           </div>  
        </div>
        </section>
        </>
    )

}

export default Covid;