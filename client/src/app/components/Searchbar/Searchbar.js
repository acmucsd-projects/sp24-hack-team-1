"use client";

import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./list";
import './Searchbar.css';

const Searchbar = () => {
    return (
        <div className="main">
            <h1>SD Hack Tours</h1>
            <div className="search">
            <TextField
            id="outlined-basic"
            variant="outlined"
            fullWidth
            label="Search"
            />
        </div>
        <List />
        </div>
    );
}
 
export default Searchbar;