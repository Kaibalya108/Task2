import { FunctionComponent } from "react";

const TypeDefault: FunctionComponent = () => {
  return (
    <div className="rounded-2xl bg-white shadow-[0px_4px_25px_rgba(29,_78,_216,_0.05)] w-[321px] h-10 flex flex-row items-center justify-between py-2 px-4 box-border text-left text-base text-royalblue-300 font-poppins">
      <div className="flex flex-row items-center justify-start gap-[8px]">
        <div className="relative leading-[22px] font-semibold hidden">247</div>
        <div className="relative leading-[22px] font-medium text-lavender-200 hidden">
          |
        </div>
        <div className="relative leading-[22px] font-medium">
          Opportunity Browsing
        </div>
      </div>
      <div className="rounded-2xl bg-aliceblue-100 hidden flex-row items-center justify-center py-0.5 px-2.5 text-sm text-steelblue">
        <div className="relative font-medium">243</div>
      </div>
      <img
        className="relative w-6 h-6 overflow-hidden shrink-0"
        alt=""
        src="/arrow--caret-down-md.svg"
      />
    </div>
  );
};

export default TypeDefault;
