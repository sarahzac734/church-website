import { Button, Html } from "@react-email/components";
import * as React from "react";

interface EmailProps {
  firstName: string,
  lastName: string,
  email: string,
  comment: string,

}

export default function Email({ firstName, lastName, email,comment}: EmailProps) {
  return (
    <Html>
      <div>
        <div className="rounded-2xl w-140 h-140 mx-auto text-center">
        <h1>New Message from {firstName} {lastName}</h1>
        <p style={{fontWeight:'bold', fontSize:'20px'}}>Contact Info:</p>
        <p><span style={{fontWeight:'bold'}}>First Name: </span>{firstName}</p>
        <p><span style={{fontWeight:'bold'}}>Last Name: </span>{lastName}</p>
        <p><span style={{fontWeight:'bold'}}>Email: </span>{email} </p>
        <p><span style={{fontWeight:'bold'}}>Comment: </span><br/> {comment} </p>
      </div>
      </div>
    </Html>
  );
}