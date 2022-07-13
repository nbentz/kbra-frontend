import React from "react";
import { Route, Navigate, Routes, BrowserRouter} from "react-router-dom"; 

import Contacts from "../pages/Contacts";

const AllRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/contacts" element={<Contacts />}/>
                <Route path="/" element={<Navigate replace to="/contacts" />}/>
            </Routes>
        </BrowserRouter>


    )
}

export default AllRoutes;