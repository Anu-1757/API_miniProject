import { useEffect, useState } from 'react';
import './UserEdit.css';
import { useNavigate, useParams } from 'react-router-dom';

const UserEdit = () => {
    const [name, setName] = useState([]);
    const [branch, setBranch] = useState([]);
    const [age, setAge] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
     
        try {
            let response = await fetch(`http://localhost:3000/users/${id}`);
            if (!response.ok) {
                throw new Error("URl fetching is wrong");

            }
            response = await response.json();

            setName(response.name);
            setBranch(response.branch);
            setAge(response.age);
        } catch (error) {
            console.error(error);
        }
    }

    const updateUser = async (e) => {
        e.preventDefault();
        try{
            let response = await fetch(`http://localhost:3000/users/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name,
                age,
                branch
            })
        });
        if(!response.ok){
            throw new Error("Failed to update user");  
        }
        const data = await response.json();
        console.log(data);
        if (data) {
            alert("Data update successfully...");
            navigate("/");
        }
        }catch(error){
            console.error(error);
        }
        
    }
    return (
        <>
            <div className='FormEdit'>
                <form className="editForm" onSubmit={updateUser}>
                    <input type="text" placeholder="Enter the name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input type="text" placeholder="Enter the branch name"
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                    />
                    <input type="number" placeholder="Enter the age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <button type="submit" >update user</button>
                </form>
            </div>

        </>
    )
}
export default UserEdit;


