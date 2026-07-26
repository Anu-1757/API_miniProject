import { Routes ,Route,NavLink } from "react-router-dom"
import User from "./User.jsx"
import './App.css'
import UserAdd from "./UserAdd.jsx"
import UserEdit from "./UserEdit.jsx"
function App() {

  return (
<>
<h1>My First JSON API</h1>
<div className="navlink">
<NavLink to="/">List</NavLink>
<NavLink to="/add">Add new user</NavLink>
</div>

<Routes>
  <Route path="/" element={<User />}/>
  <Route path="/add" element={<UserAdd />}/>
  <Route path="/edit/:id" element={<UserEdit />}/>
</Routes>
</>
  )
}

export default App
