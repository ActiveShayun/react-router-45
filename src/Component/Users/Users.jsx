import { useLoaderData } from "react-router-dom";
import User from "../User/User";
import './Users.css'

const Users = () => {
    const users = useLoaderData()
    console.log(users);
    return (
        <div>
            <h1>our users : {users.length}</h1>
        
         <div className="container">
         {
            users.map((user, idx) => <User key={idx} user={user}></User>)
           }
         </div>
        </div>
    );
};

export default Users;