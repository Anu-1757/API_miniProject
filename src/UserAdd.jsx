import { useState } from "react";
import { useNavigate } from "react-router-dom";


const UserAdd=()=>{
const [name , setName] = useState([]);
const [branch , setBranch] = useState([]);
const [age , setAge] = useState([]);
const navigate = useNavigate();

let url ="http://localhost:3000/users";
    const addUser = async(e)=>{
    //   console.log(name,age,email);
      let response = await fetch(url,{
        method:"POST",
        body : JSON.stringify({name,age,branch})
      });
      response = await response.json();
      if(response){
        alert("User added succefully");
        navigate("/");
      }
    
    }
    return(
        <>
        <h1>Add Users in list</h1>
        <div>
            <input type="text" placeholder="Enter the name"
            onChange={(e) =>setName(e.target.value) }
            />
            <br/><br/>
             <input type="text" placeholder="Enter the branch"
              onChange={(e) => setBranch(e.target.value)}
             />
            <br/><br/>
             <input type="text" placeholder="Enter the Age"
              onChange={(e) => setAge(e.target.value)}
             />
            <br/><br/>
            <button onClick={addUser}>Add user</button>
        </div>
        </>
    )
}
export default UserAdd;