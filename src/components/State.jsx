import React, { useEffect, useState } from 'react';
import './state.css';

const State =()=>{
     const [cases,setcases]=useState([]);
    const getdata = async() =>{
         const data = await fetch('https://api.covid19india.org/data.json');
         const res = await data.json();
         setcases(res.statewise);
         console.log(res.statewise);
    }
    useEffect(()=>{
        getdata();
    },[])
    return(
        <>
        
        <div className="container-fluid mt-3">
        <div className="main_heading">
        <h1 className="text-center pb-3">India Covid Dashboard</h1>
        </div>
        <div className="table-responsive">
        <table className="table table-hover">
           <thead className="thead-dark">
               <tr>
                   <th>State</th>
                   <td>Active</td>
                   <td>Confirmed</td>
                   <td>Recovered</td>
                   <td>Death</td> 
                   <td>Updated</td>
               </tr>
           </thead>
           <tbody>
           {cases.map((curEle,ind)=>{
               return(
                   <tr key={ind}>
                   <td>{curEle.state}</td>
                   <td>{curEle.active}</td>
                   <td>{curEle.confirmed}</td>
                   <td>{curEle.recovered}</td>
                   <td>{curEle.deaths}</td> 
                   <td>{curEle.lastupdatedtime}</td>
                   </tr>
               )
           })}
           </tbody>

        </table>

        </div>
        </div>
        </>
    )
}
export default State;