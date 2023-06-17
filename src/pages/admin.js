import { useEffect, useState } from "react"
import {Link} from "react-router-dom"


export default function Admin(){
    const [bruker, setbruker]= useState("")
    const [pass, setpass]= useState("")
    const [ja, setja] = useState(false)
    const [pt,setpt] = useState("/admin")

    async function send(){
        const response = await fetch("/api/login",{
            method:"POST",
            headers: {
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify({brukernavn:bruker, pass:pass}),
            credentials: "include"
        })
        if(response.ok){
            setpt("/hoved_admin")
            
        } else{
            setja(true)
        }
    }

    return <div>
        <h2>!bare for administratorer med tilgitt tilgang</h2>
        <input type="text" id="navnet" name="brukernavn" placeholder="brukernavn" value={bruker} onChange={(e)=>{setbruker(e.target.value)}}/>
        <input type="password" id="pass" name="pass" placeholder="passord" value={pass} onChange={(e)=>{setpass(e.target.value)}}/>
        <Link to={pt} onClick={send}>
        <button className="loginn-btn">logg på</button>
        </Link>
        {ja && <h3>feil passord eller brukernavn</h3>}
    </div>
}