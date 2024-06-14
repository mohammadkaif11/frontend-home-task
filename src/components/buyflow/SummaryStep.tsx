import React from "react";
import Link from "next/link";

interface SummaryStepProps {
  collectedData: {
    email: string;
    age: number;
  };
}

const SummaryStep: React.FC<SummaryStepProps> = (props) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex flex-col gap-2 items-start">
        <div>Email: {props.collectedData.email}</div>
        <div>Age: {props.collectedData.age}</div>
      </div>
      <Link className="btn btn-primary" href="/purchased=dev_ins">
        Purchase
      </Link>
    </div>
  );
};

export default SummaryStep;
