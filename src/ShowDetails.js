import { useDispatch, useSelector } from "react-redux";
import { previous } from "./ReduxSlice";



const ShowDetails=()=>{
    const user=useSelector(state=>state.person.value);
    const dispatch=useDispatch();
    if(!user.name){
        return
    }
    return(
        <div className="details">
            <div className="box">
                <h2>Person Details</h2>
                <h3>Name:{user.name}</h3>
                <h3>Email:{user.email}</h3>
                <h3>Ph no:{user.phnum}</h3>
                <h3>Age:{user.age}</h3>
                <h3>DOB:{user.dob}</h3>
                <div>
                <button onClick={()=>dispatch(previous())}>Previous</button>
                </div>
            </div>
        </div>
    )
}

export default ShowDetails;