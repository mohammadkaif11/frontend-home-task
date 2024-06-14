import React, { useState } from "react";
import AgeStep from "./AgeStep";
import EmailStep from "./EmailStep";
import SummaryStep from "./SummaryStep";
import NameStep from "./NameStep";

interface BuyflowProps {
  productId: ProductIds;
}

export enum ProductIds {
  devIns = "dev_ins",
  desIns = "dev_des",
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.devIns]: "Developer Insurance",
  [ProductIds.desIns]: "Designer Insurance",
};

const Buyflow: React.FC<BuyflowProps> = (props) => {
  const [currentStep, setStep] = useState("email");
  const [collectedData, updateData] = useState({
    email: "",
    age: 0,
    firstName: "",
    lastName: "",
  });

  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    if (field == "name") {
      if (value.lastName == "" || value.firstName == "") {
        alert("Please enter details");
        return;
      }
      updateData({
        ...collectedData,
        firstName: value.firstName,
        lastName: value.lastName,
      });
    } else {
      if (
        (field !== "age" && String(value) == "") ||
        (field == "age" && value <= 0)
      ) {
        alert("Please enter details");
        return;
      }
      updateData({ ...collectedData, [field]: value });
    }
    setStep(nextStep);
  };

  return (
    <div className="flex flex-col items-center">
      <h4 className="mb-6 text-2xl">
        Buying {PRODUCT_IDS_TO_NAMES[props.productId]}
      </h4>
      <div className="flex justify-center w-60">
        {(currentStep === "email" &&
          (props.productId === ProductIds.devIns ? (
            <EmailStep cb={getStepCallback("age")} />
          ) : (
            <EmailStep cb={getStepCallback("name")} />
          ))) ||
          (currentStep === "name" && props.productId === ProductIds.desIns && (
            <NameStep cb={getStepCallback("age")} />
          )) ||
          (currentStep === "age" && (
            <AgeStep cb={getStepCallback("summary")} />
          )) ||
          (currentStep === "summary" && (
            <SummaryStep collectedData={collectedData} />
          ))}
      </div>
    </div>
  );
};

export default Buyflow;
