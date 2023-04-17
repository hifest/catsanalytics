import {Link, Route, Routes} from "react-router-dom";
import React from "react";

import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

import Home from "../pages/Home";
import Register from "../pages/Register.jsx";
import Login from "../pages/Login.jsx";

import { useSelector } from 'react-redux'

const Header = () => {
    const uid = useSelector((state) => state.user.uid)
    return (
        <>
            <Box sx={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        {/*<IconButton*/}
                        {/*    size="large"*/}
                        {/*    edge="start"*/}
                        {/*    color="inherit"*/}
                        {/*    aria-label="menu"*/}
                        {/*    sx={{ mr: 2 }}*/}
                        {/*>*/}
                        {/*    <MenuIcon />*/}
                        {/*</IconButton>*/}
                        <div className={"sb"}>
                            <Button color="inherit"><Link to={"/"}>Додому</Link></Button>
                            {uid ?
                                <>
                                </>
                                : <><Button color="inherit"><Link to={"/register"}>Реєстрація</Link></Button>
                                    <Button color="inherit"><Link to={"/login"}>Вхід</Link></Button></>}

                        </div>
                    </Toolbar>
                </AppBar>
            </Box>

            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"/register"} element={<Register/>}/>
                <Route path={"/login"} element={<Login/>}/>
            </Routes>
        </>
    );
};

export default Header;