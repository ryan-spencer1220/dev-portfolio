import React from "react";
import "../index.css";
import { Box, TextField } from "@mui/material";

const Contact = () => {
  return (
    <>
      <div className="flex flex-wrap md items-center h-screen pt-20 bg-neutral-content">
        <div className="w-full h-screen">
          <div className="mx-32">
            <h1 className="text-6xl font-bold my-20 pt-18 text-center">
              Contact
            </h1>
            <div className=" item-center text-center">
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "100ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField id="filled-basic" label="Name" variant="filled" />
                <TextField id="filled-basic" label="Email" variant="filled" />
                <TextField
                  id="filled-basic"
                  label="Phone Number"
                  variant="filled"
                />
                <TextField
                  id="filled-basic"
                  label="Message"
                  multiline
                  rows={6}
                  variant="filled"
                />
              </Box>
              <div className="mt-16 font-light text-center items-center">
                <button className="btn btn-lg btn-primary">Contact</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
