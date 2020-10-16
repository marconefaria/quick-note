import React from "react";
import { useHistory } from "react-router-dom";

function Home(){
    const history = useHistory();

    return (
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default Home;