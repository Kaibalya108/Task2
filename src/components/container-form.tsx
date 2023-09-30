import { FunctionComponent } from "react";

type ContainerFormType = {
  dimensionCode?: string;
  dimensionCodeText?: string;
  dimensionCodeImageUrl?: string;
  dimensionCodeText2?: string;
  dimensionCodeImageUrl2?: string;
  dimensionCodeImageUrl3?: string;
  dimensionCodeImageUrl4?: string;
  dimensionCodeText3?: string;
};

const ContainerForm: FunctionComponent<ContainerFormType> = ({
  dimensionCode,
  dimensionCodeText,
  dimensionCodeImageUrl,
  dimensionCodeText2,
  dimensionCodeImageUrl2,
  dimensionCodeImageUrl3,
  dimensionCodeImageUrl4,
  dimensionCodeText3,
}) => {
  return (
    <div className="self-stretch flex flex-col items-end justify-between text-left text-3xs text-royalblue-100 font-poppins">
      <div className="flex flex-row items-center justify-start gap-[8px]">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <div className="rounded-lg bg-white shadow-[0px_4px_25px_rgba(141,_141,_141,_0.05)] box-border w-8 h-8 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 border-[0.5px] border-solid border-whitesmoke-300">
            <img
              className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
              alt=""
              src={dimensionCode}
            />
          </div>
          <div className="rounded-lg bg-white shadow-[0px_4px_25px_rgba(141,_141,_141,_0.05)] box-border w-8 h-8 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 border-[0.5px] border-solid border-whitesmoke-300">
            <img
              className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
              alt=""
              src={dimensionCodeText}
            />
          </div>
          <div className="rounded-lg bg-white shadow-[0px_4px_25px_rgba(141,_141,_141,_0.05)] box-border w-8 h-8 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 border-[0.5px] border-solid border-whitesmoke-300">
            <img
              className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
              alt=""
              src={dimensionCodeImageUrl}
            />
          </div>
          <div className="rounded-2xl bg-ghostwhite-200 flex flex-row items-end justify-start py-1 px-2 gap-[4px]">
            <img
              className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
              alt=""
              src="/media--play-circle.svg"
            />
            <div className="relative">4</div>
          </div>
        </div>
        <div className="rounded-2xl bg-lavender-100 flex flex-row items-end justify-start py-1 px-4 gap-[8px] text-royalblue-300">
          <img
            className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
            alt=""
            src={dimensionCodeText2}
          />
          <div className="relative">5 Programs</div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-start gap-[8px] text-midnightblue">
        <div className="rounded-lg bg-white shadow-[0px_4px_25px_rgba(141,_141,_141,_0.05)] box-border w-8 h-8 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 border-[0.5px] border-solid border-whitesmoke-300">
          <img
            className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
            alt=""
            src={dimensionCodeImageUrl2}
          />
        </div>
        <div className="rounded-lg bg-white shadow-[0px_4px_25px_rgba(141,_141,_141,_0.05)] box-border w-8 h-8 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 border-[0.5px] border-solid border-whitesmoke-300">
          <img
            className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
            alt=""
            src={dimensionCodeImageUrl3}
          />
        </div>
        <div className="rounded-lg bg-white shadow-[0px_4px_25px_rgba(141,_141,_141,_0.05)] box-border w-8 h-8 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 border-[0.5px] border-solid border-whitesmoke-300">
          <img
            className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
            alt=""
            src={dimensionCodeImageUrl4}
          />
        </div>
        <div className="rounded-2xl bg-aliceblue-400 hidden flex-row items-end justify-start py-1 px-2 gap-[4px]">
          <img
            className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
            alt=""
            src={dimensionCodeText3}
          />
          <div className="relative">4</div>
        </div>
      </div>
    </div>
  );
};

export default ContainerForm;
