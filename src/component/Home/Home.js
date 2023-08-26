
import { UserContext } from '../../context/UserContext.js';
import { useContext } from "react";

function Home() {
    const { user } = useContext(UserContext);
    
    return (<h1>Home</h1>);
}

export default Home;
