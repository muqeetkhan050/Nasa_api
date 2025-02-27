import React from 'react';
import { useEffect, useState } from 'react'

const Apod = () => {
    const [data,setData]=useState(null);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState(null);
    const API_key="dl3KYoB9xJGBTm0owQdEU7lAdauHDMQ1H0J9ML1k"
    
    useEffect(()=>{
        fetch(`https://api.nasa.gov/planetary/apod?api_key=${API_key}`)
        .then((response)=>response.json)
        .then((result)=>{
            setData(result);
            setLoading(false);

        })
        .catch((error)=>{
            setError(error);
            setLoading(false)
        })
    },[])

    if(loading){
        return(
            <>picture is loading....</>
        )
    }

    if(error){
        <div>we got an error:{error.message}</div>
    }


    return (
        <>
        <h3>Picture Of The Day</h3>
        {data && (
            <div>
                <h3>{data.title}</h3>
                <h2>{data.date}</h2>
                {data.media_type==='iamge' ?
                ( <img src={img.url} alt={data.title} width="500"></img>):
                ( <iframe src={data.url} title={data.title} width="500" height="300"></iframe>)
                }
                <p>{data.explanation}</p>
            </div>
        )}
        </>
    )
}

export default Apod;

