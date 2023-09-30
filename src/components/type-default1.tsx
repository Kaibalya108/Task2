import { FunctionComponent } from "react";
import LabelNoStatusInactive from "./label-no-status-inactive";
import PlacementTag from "./placement-tag";

type TypeDefault1Type = {
  check?: string;
  aaliyahSanderson?: string;
  riyadhSaudiArabia?: string;
  bachelorCambridgeUniversi?: string;
  cPIconsTagArtboard211?: string;
  editCopy?: string;
  interfaceHeart01?: string;
  mediaPlayCircle?: string;
  fileNotebook?: string;
  vDO?: string;
  cPIconsTagArtboard2111?: string;
  editCopy1?: string;
  interfaceHeart011?: string;
  mediaPlayCircle1?: string;
  fileNotebook1?: string;
};

const TypeDefault1: FunctionComponent<TypeDefault1Type> = ({
  check,
  aaliyahSanderson,
  riyadhSaudiArabia,
  bachelorCambridgeUniversi,
  cPIconsTagArtboard211,
  editCopy,
  interfaceHeart01,
  mediaPlayCircle,
  fileNotebook,
  vDO,
  cPIconsTagArtboard2111,
  editCopy1,
  interfaceHeart011,
  mediaPlayCircle1,
  fileNotebook1,
}) => {
  return (
    <div className="flex flex-row items-center justify-start gap-[8px] text-left text-3xs text-lavender-400 font-poppins self-stretch">
      <LabelNoStatusInactive check="/check.svg" />
      <div className="flex-1 rounded-2xl bg-white flex flex-row items-center justify-start p-4 gap-[135px]">
        <div className="w-[538px] flex flex-row items-center justify-start gap-[24px] text-xl">
          <div className="relative rounded-81xl bg-aliceblue-200 w-14 h-14 overflow-hidden shrink-0">
            <div className="absolute top-[12.5px] left-[14px] font-semibold">
              AS
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[8px] text-3xs text-black">
            <div className="relative text-sm font-semibold">
              {aaliyahSanderson}
            </div>
            <div className="relative font-medium">{riyadhSaudiArabia}</div>
            <div className="self-stretch relative font-light">
              {bachelorCambridgeUniversi}
            </div>
            <div className="self-stretch relative font-light hidden">{`Marketing and Business Development Intern - Disney (2023 - 2023) `}</div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-5xs text-royalblue-300">
              <div className="relative">#top_candidate</div>
              <div className="relative">#top_candidate</div>
            </div>
            <div className="flex flex-row items-start justify-start gap-[8px]">
              <PlacementTag newYork="New York" />
              <PlacementTag newYork="Marketing" />
              <PlacementTag newYork="London" />
            </div>
          </div>
        </div>
        <div className="self-stretch hidden flex-col items-end justify-between text-royalblue-100">
          <div className="hidden flex-row items-center justify-start gap-[8px]">
            <div className="flex flex-row items-center justify-start gap-[8px]">
              <div className="rounded-lg bg-white shadow-[0px_4px_25px_rgba(141,_141,_141,_0.05)] box-border w-8 h-8 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 border-[0.5px] border-solid border-whitesmoke-300">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src={cPIconsTagArtboard211}
                />
              </div>
              <div className="rounded-lg bg-white shadow-[0px_4px_25px_rgba(141,_141,_141,_0.05)] box-border w-8 h-8 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 border-[0.5px] border-solid border-whitesmoke-300">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src={editCopy}
                />
              </div>
              <div className="rounded-lg bg-white shadow-[0px_4px_25px_rgba(141,_141,_141,_0.05)] box-border w-8 h-8 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 border-[0.5px] border-solid border-whitesmoke-300">
                <img
                  className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                  alt=""
                  src={interfaceHeart01}
                />
              </div>
              <div className="rounded-2xl bg-ghostwhite-200 flex flex-row items-end justify-start py-1 px-2 gap-[4px]">
                <img
                  className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                  alt=""
                  src={mediaPlayCircle}
                />
                <div className="relative">4</div>
              </div>
            </div>
            <div className="rounded-2xl bg-lavender-100 flex flex-row items-end justify-start py-1 px-4 gap-[8px] text-royalblue-300">
              <img
                className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                alt=""
                src={fileNotebook}
              />
              <div className="relative">5 Programs</div>
            </div>
          </div>
          <img
            className="relative rounded-81xl w-[115px] h-[115px] overflow-hidden shrink-0"
            alt=""
            src={vDO}
          />
          <div className="flex flex-row items-center justify-start gap-[8px] text-midnightblue">
            <div className="rounded-lg bg-white shadow-[0px_4px_25px_rgba(141,_141,_141,_0.05)] box-border w-8 h-8 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 border-[0.5px] border-solid border-whitesmoke-300">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src={cPIconsTagArtboard2111}
              />
            </div>
            <div className="rounded-lg bg-white shadow-[0px_4px_25px_rgba(141,_141,_141,_0.05)] box-border w-8 h-8 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 border-[0.5px] border-solid border-whitesmoke-300">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src={editCopy1}
              />
            </div>
            <div className="rounded-lg bg-white shadow-[0px_4px_25px_rgba(141,_141,_141,_0.05)] box-border w-8 h-8 overflow-hidden shrink-0 hidden flex-row items-center justify-center p-2 border-[0.5px] border-solid border-whitesmoke-300">
              <img
                className="relative w-[18px] h-[18px] overflow-hidden shrink-0"
                alt=""
                src={interfaceHeart011}
              />
            </div>
            <div className="rounded-2xl bg-aliceblue-400 hidden flex-row items-end justify-start py-1 px-2 gap-[4px]">
              <img
                className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
                alt=""
                src={mediaPlayCircle1}
              />
              <div className="relative">4</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-lavender-100 hidden flex-row items-end justify-start py-1 px-4 gap-[8px] text-royalblue-300">
          <img
            className="relative w-3.5 h-3.5 overflow-hidden shrink-0"
            alt=""
            src={fileNotebook1}
          />
          <div className="relative">5 Programs</div>
        </div>
      </div>
    </div>
  );
};

export default TypeDefault1;
