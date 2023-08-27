import Tables from "../component/Tables";
import Home from "../component/Home";
import Login from "../component/Login";
import PrivateRoutes from "./PrivateRoutes";

import { Routes, Route } from "react-router-dom";

function routes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/user" element=
                    {
                        <PrivateRoutes>
                            <Tables/>
                        </PrivateRoutes>
                    }
                />
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<h1>No found </h1>} />
            </Routes>
        </>
    );
}

export default routes;