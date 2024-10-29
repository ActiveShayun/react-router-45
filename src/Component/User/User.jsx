import { Link } from 'react-router-dom';
import './User.css'
const User = ({user}) => {
    const {id, name, phone, email} = user
    console.log(id);
    return (
        <div className='card'>
            <h2>{name}</h2>
            <p>email : {email}</p>
            <p>phone : {phone}</p>
            <Link to={`/user/${id}`}>user details</Link>
        </div>
    );
};

export default User;