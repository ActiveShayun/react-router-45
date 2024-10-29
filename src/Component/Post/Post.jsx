import { Link, Navigate, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
    console.log('post',post);
    const {id, title} = post
    
     const navigate = useNavigate()
    const handlePost = ()=>{
        navigate(`/post/${id}`)
    }
    return (
        <div className='cart'>
            <h3>UserId : {id}</h3>
            <h3>Title : {title}</h3>
           <Link to={`/post/${id}`}><button>Post details</button></Link>
           <button onClick={handlePost}>show details</button>
        </div>
    );
};

export default Post;