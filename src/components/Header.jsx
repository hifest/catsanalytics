import {Link, Route, Routes} from "react-router-dom";
import React from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Button from "@mui/material/Button";

import Home from "../pages/Home";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";
import Signout from "../pages/Signout";

import UseAuth from "../tools/UseAuth";

const Header = () => {
    const isLoggedIn = UseAuth();

    return (
        <>
            <Box sx={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <div className={"sb"}>
                            {isLoggedIn ?
                                <>
                                    <Button color="inherit"><Link className="nav-btn" to={"/signout"}>Вийти</Link></Button>
                                    <Button color="inherit"><Link className="nav-btn" to={"/"}>Додому</Link></Button>
                                </>
                                : <>
                                    <Button color="inherit"><Link className="nav-btn" to={"/register"}>Реєстрація</Link></Button>
                                    <Button color="inherit"><Link className="nav-btn" to={"/login"}>Вхід</Link></Button>
                                </>}

                        </div>
                    </Toolbar>
                </AppBar>
            </Box>

            <Routes>
                <Route path={"/signout"} element={<Signout/>}/>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/login"} element={<Login/>}/>
            </Routes>
        </>
    );
};

export default Header;