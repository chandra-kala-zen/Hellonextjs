'use client'
import { useState } from "react"

export default function about(){
    const [name,Setname] = useState("")
    console.log("dashboard client component")
    return(
        <div>
            <h1>Hello About us {new Date().toLocaleTimeString()}</h1> 

            <h1>Hello About us {new Date().toLocaleTimeString()} sai</h1> 
            <div>
                <input value={name} onChange={(e) => Setname(e.target.value)}  className="p-3" placeholder="" />
                <p>Hello {name}!</p>
            </div>
        </div>
    )
}