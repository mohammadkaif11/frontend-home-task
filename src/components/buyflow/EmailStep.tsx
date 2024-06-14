import React, { useState } from "react";

interface EmailStepProps {
  cb: (field: string, value: string) => void;
}

const EmailStep: React.FC<EmailStepProps> = (props) => {
  const [email, setEmail] = useState("");
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 items-start">
        <label>Email:</label>
        <input
          type="email"
          onChange={({ target: { value } }) => {
            setEmail(value);
          }}
          value={email}
          className="input input-bordered input-primary w-full max-w-xs"
        ></input>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => props.cb("email", email)}
      >
        Next
      </button>
    </div>
  );
};

export default EmailStep;
