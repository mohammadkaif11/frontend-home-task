import React, { useState } from "react";

interface NameStepProps {
  cb: (field: string, value: any) => void;
}

const NameStep: React.FC<NameStepProps> = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleNext = () => {
    props.cb("name", {"firstName": firstName, "lastName": lastName});
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 items-start">
        <label>First Name</label>
        <input
          type="firstname"
          onChange={({ target: { value } }) => {
            setFirstName(value);
          }}
          value={firstName}
          className="input input-bordered input-primary w-full max-w-xs"
        ></input>
      </div>
      <div className="flex flex-col gap-2 items-start">
        <label>Last Name:</label>
        <input
          type="lastname"
          onChange={({ target: { value } }) => {
            setLastName(value);
          }}
          value={lastName}
          className="input input-bordered input-primary w-full max-w-xs"
        ></input>
      </div>
      <button
        className="btn btn-primary"
        onClick={() => {
          handleNext();
        }}
      >
        Next
      </button>
    </div>
  );
};

export default NameStep;
