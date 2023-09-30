import { FunctionComponent } from "react";

type StatusDefaultTypeDefaultType = {
  line1?: string;
  fileFileDocument?: string;
  line2?: string;
  fileFileDocument1?: string;
  line4?: string;
  fileFileDocument2?: string;
  line3?: string;
  fileFileDocument3?: string;
  arrowCaretDownMD?: string;
  line5?: string;
  fileFileDocument4?: string;
  line6?: string;
  fileFileDocument5?: string;
  arrowCaretDownMD1?: string;
};

const StatusDefaultTypeDefault: FunctionComponent<
  StatusDefaultTypeDefaultType
> = ({
  line1,
  fileFileDocument,
  line2,
  fileFileDocument1,
  line4,
  fileFileDocument2,
  line3,
  fileFileDocument3,
  arrowCaretDownMD,
  line5,
  fileFileDocument4,
  line6,
  fileFileDocument5,
  arrowCaretDownMD1,
}) => {
  return (
    <div className="rounded-lg bg-white flex flex-col items-start justify-start text-left text-sm text-gray font-poppins self-stretch">
      <div className="self-stretch flex flex-row items-center justify-between py-[18px] px-4 text-xs">
        <div className="relative text-sm leading-[22px] font-medium">
          Filters
        </div>
        <div className="relative font-inter" />
        <div className="relative leading-[22px] font-light">0 Selected</div>
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
        alt=""
        src={line1}
      />
      <div className="self-stretch flex flex-row items-center justify-between py-[18px] px-4">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src={fileFileDocument}
          />
          <div className="relative leading-[22px]">Personal Information</div>
        </div>
        <img
          className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
          alt=""
          src="/arrow--caret-down-md1.svg"
        />
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
        alt=""
        src={line2}
      />
      <div className="self-stretch flex flex-row items-center justify-between py-[18px] px-4">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src={fileFileDocument1}
          />
          <div className="relative leading-[22px]">Education</div>
        </div>
        <img
          className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
          alt=""
          src="/arrow--caret-down-md1.svg"
        />
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
        alt=""
        src={line4}
      />
      <div className="self-stretch flex flex-row items-center justify-between py-[18px] px-4">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src={fileFileDocument2}
          />
          <div className="relative leading-[22px]">Work Experience</div>
        </div>
        <img
          className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
          alt=""
          src="/arrow--caret-down-md1.svg"
        />
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
        alt=""
        src={line3}
      />
      <div className="self-stretch hidden flex-row items-center justify-between py-[18px] px-4">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src={fileFileDocument3}
          />
          <div className="relative leading-[22px]">Evaluation</div>
        </div>
        <img
          className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
          alt=""
          src={arrowCaretDownMD}
        />
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
        alt=""
        src={line5}
      />
      <div className="self-stretch flex flex-row items-center justify-between py-[18px] px-4">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src={fileFileDocument4}
          />
          <div className="relative leading-[22px]">Activity Filter</div>
        </div>
        <img
          className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
          alt=""
          src="/arrow--caret-down-md1.svg"
        />
      </div>
      <img
        className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
        alt=""
        src={line6}
      />
      <div className="self-stretch flex flex-row items-center justify-between py-[18px] px-4">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src={fileFileDocument5}
          />
          <div className="relative leading-[22px]">Advanced Filter</div>
        </div>
        <img
          className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
          alt=""
          src={arrowCaretDownMD1}
        />
      </div>
    </div>
  );
};

export default StatusDefaultTypeDefault;
