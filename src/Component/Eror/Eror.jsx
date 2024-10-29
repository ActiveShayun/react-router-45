import { Link, useRouteError } from "react-router-dom";

const Eror = () => {
    const error = useRouteError()
    console.log(error);
    return (
        <div>
            <h1>Ooppps!</h1>
            <i>{error.statusText || error.massage}</i>
            {
                error.status && <div>
                  <p>where are you from</p>
                  <Link to='/'><button>home</button></Link>
                </div>
            }
        </div>
    );
};

export default Eror;