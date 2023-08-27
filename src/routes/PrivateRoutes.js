import { useContext } from "react";
import { UserContext } from "../context/UserContext";

function PrivateRoutes(props) {
    const { user } = useContext(UserContext);
    if(!(user &&user.auth)){
        return <h1>Need login</h1>
    }
    return (
         props.children 
    );
}

export default PrivateRoutes;