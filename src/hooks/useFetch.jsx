import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [arrays, setArray] = useState("")
const [isPending, setPending]=  useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            fetch(url)
      .then (res => {
        return res.json();
      })
      .then(data => { 
        setArray(data)
        setPending(false);
      })
      // It will automatically fetch and error. 
      .catch(err =>{
        setPending(false);
        console.log(err.message);
      })
      // make the url dependencies
        },1000);
    },[url])



    return {arrays, isPending} ;
}
 
export default useFetch;