import { useLoaderData, useNavigate, useParams} from "react-router-dom";
import './Details.css'
const Details = () => {
    const details = useLoaderData()
    console.log('details', details);

    const navigate = useNavigate()
    const handleNavigate = ()=>{
        navigate(-1)
    }

    const {postId} = useParams()
    console.log('params',postId);
    return (
        <div className="cart">
            <h2>{details.id}</h2>
            <p>{details.body}</p>
            <button onClick={handleNavigate}>go back</button>
        </div>
    );
};

export default Details;