import React from "react";
import "../index.css";
import Button from "./Button";
import { Box, TextField } from "@mui/material";

const Contact = () => {
  return (
    <>
      <div className="flex flex-wrap md items-center h-screen pt-18">
        <div className=" bg-slate-100 w-full h-screen">
          <div className="mx-32">
            <h1 className="text-6xl font-bold mt-40 pt-18 text-center">
              Contact
            </h1>
            <div className="p-32 text-center">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "100ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Name"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Message"
                  multiline
                  rows={6}
                  variant="outlined"
                />
              </Box>
              <div className="mt-16 font-light text-gray-500 text-center items-center">
                <Button>Contact</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
