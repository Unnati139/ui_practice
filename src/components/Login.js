import { Paper } from "@mui/material";
import React, { useState } from "react";
import "./Login.css";
import LoginForm from "./LoginForm";
const Login = () => {
 
   
  return (
    <>
    {/* <LoginForm/> */}
      <div
        className="mainDivRank"
        style={{
          height: "60vh",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            position: "relative",
            top: "8em",
            width:"100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Paper
            elevation={5}
            style={{
                minHeight: "60vh",
              background: "rgba(255,255,255,0.6)",
              padding: 20,
            }}
          >
          <LoginForm/>
          </Paper>
        </div>
        
      </div>
    </>
  );
};

export default Login;
