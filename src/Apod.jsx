import React from 'react';
import {useState,useEffect} from 'react'


const Apod=()=>{
    const [data,setData]=useState(null)
    const apiKey="dl3KYoB9xJGBTm0owQdEU7lAdauHDMQ1H0J9ML1k"

    useEffect(()=>{
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        .then((response)=>response.json)
        .then((result)=>setData(result))
        .catch((error)=>console.error("error fetching data",error))
    },[])

    if(!data){
        return(
            <>data is loading.....</>
        )
    }
    return(

        <div>
        <h2>picture of the day</h2>
        <button>Click here</button>
        </div>
    )
}

export default Apod;