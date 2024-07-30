"use client";
import { useEffect } from "react"

function Error({error}:{error : Error}){
    useEffect(() =>{
        console.log(`${error}`);
    },[error]);
    return(
        <div>
            <div className="bg-400">Error in fetching Data {error.message}</div>
        </div>
    )
}
export default Error