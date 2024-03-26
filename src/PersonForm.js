import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { submit } from "./ReduxSlice";


const PersonForm=()=>{
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phnum,setPhnum]=useState("");
    const[age,setAge]=useState(0);
    const[dob,setDob]=useState(0);  
    const dispatch=useDispatch();
    const user=useSelector(state=>state.person.value);

    return(
        <div>
            {!user.name && (
            <div className="person-inputs">
                <h2>Details</h2>
                <input type="text" placeholder="Enter your name" value={name} onChange={e=>setName(e.target.value)}/>
                <input type="email" placeholder="Enter your email" value={email} onChange={e=>setEmail(e.target.value)}/>
                <input type="text" placeholder="Enter your phno" value={phnum} onChange={e=>setPhnum(e.target.value)}/>
                <input type="tel"  value={age} onChange={e=>setAge(e.target.value)}/>
                <input type="date"  value={dob} onChange={e=>setDob(e.target.value)}/>
                <button onClick={()=>dispatch(submit({name,age,phnum,dob,email}))}>Submit</button>
            </div>
            )}
        </div>
    )
}

export default PersonForm;