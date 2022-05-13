import React from "react";
import "../index.css";
import Button from "./Button";
import { Box, TextField } from "@mui/material";

const Contact = () => {
  return (
    <>
      <div className="items-center h-screen pt-18 bg-neutral-content">
        <div className="w-full h-screen">
          <div className="mx-32">
            <h1 className="text-6xl font-bold mt-40 pt-18 text-center">
              Contact
            </h1>
            <div className="p-32 item-center text-center">
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
