import { FunctionComponent } from "react";

type LabelNoStatusInactiveType = {
  check?: string;
};

const LabelNoStatusInactive: FunctionComponent<LabelNoStatusInactiveType> = ({
  check,
}) => {
  return (
    <div className="flex flex-row items-center justify-start gap-[8px] text-left text-sm text-gray font-poppins">
      <div className="relative bg-white w-4 h-4">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm box-border border-[1px] border-solid border-lightslategray" />
        <div className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_4px)] bg-daybreak-blue-blue-6 w-2 h-2 hidden" />
        <img
          className="absolute top-[calc(50%_-_4px)] left-[calc(50%_-_5px)] w-[9.56px] h-[7.55px] hidden"
          alt=""
          src={check}
        />
      </div>
      <div className="relative leading-[22px] hidden">Lorem ipsum</div>
    </div>
  );
};

export default LabelNoStatusInactive;
