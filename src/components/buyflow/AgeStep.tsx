import React, { useState } from "react";

interface AgeStepProps {
  cb: (field: string, value: number) => void;
}

const AgeStep: React.FC<AgeStepProps> = (props) => {
  const [age, setAge] = useState(0);
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 items-start">
        <label>Age:</label>
        <input
          onChange={({ target: { value } }) => {
            setAge(Number(value));
          }}
          value={age}
          type="number"
          className="input input-bordered input-primary w-full max-w-xs"
        />
      </div>

      <button className="btn btn-primary" onClick={() => props.cb("age", age)}>
        Buy Now
      </button>
    </div>
  );
};

export default AgeStep;
