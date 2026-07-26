import { useEffect, useState, } from "react";
import { useNavigate } from "react-router-dom";
import './User.css';
import { useParams } from "react-router-dom";


function User() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    getUsersData();
  }, []);
  let url = "http://localhost:3000/users";

  const getUsersData = async () => {
    let response = await fetch(url);
    response = await response.json();
    setUsers(response);
    setLoading(false);
  }

  const deletUser = async (id) => {
    let response = await fetch(url + "/" + id, {
      method: "DELETE"
    });
    response = await response.json();
    if (response) {
      alert("user delete succefully");
      getUsersData();
    }
    console.log(response.id);
  }


  const editUser = (id) => {
    navigate(`/edit/${id}`);
  }


  return (
    <>
      <ul className="mainTable">
        <li>
          User-Name
        </li>
        <li>
          Age
        </li>
        <li>
          Branch
        </li>
        <li>
          Action
        </li>

      </ul>
      {
        !loading ?
          users.map((user, idx) => (
            <ul key={idx} className="mainTable">
              <li>
                {user.name}
              </li>
              <li>
                {user.age}
              </li>
              <li>
                {user.branch}
              </li>
              <li>
                <button onClick={() => deletUser(user.id)}>Delet</button>
              </li>
              <li>
                <button onClick={() => editUser(user.id)}>Edit</button>
              </li>
            </ul>
          )) : " Wait! Data is Loading..."
      }
    </>

  )
}

export default User;
