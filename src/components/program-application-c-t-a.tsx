import { FunctionComponent, useMemo, type CSSProperties } from "react";

type ProgramApplicationCTAType = {
  cPIconsTagArtboard211?: string;
  expandMore?: string;

  /** Style props */
  frameDivHeight?: CSSProperties["height"];
  frameDivAlignSelf?: CSSProperties["alignSelf"];
};

const ProgramApplicationCTA: FunctionComponent<ProgramApplicationCTAType> = ({
  cPIconsTagArtboard211,
  expandMore,
  frameDivHeight,
  frameDivAlignSelf,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      height: frameDivHeight,
      alignSelf: frameDivAlignSelf,
    };
  }, [frameDivHeight, frameDivAlignSelf]);

  return (
    <div className="rounded-2xl flex flex-row items-center justify-center gap-[8px] text-left text-smi text-white font-poppins">
      <div className="rounded-lg bg-white shadow-[0px_4px_25px_rgba(141,_141,_141,_0.05)] overflow-hidden flex flex-row items-center justify-center p-2 border-[0.5px] border-solid border-whitesmoke-300">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src={cPIconsTagArtboard211}
        />
      </div>
      <div className="rounded-lg bg-white shadow-[0px_4px_25px_rgba(141,_141,_141,_0.05)] overflow-hidden flex flex-row items-center justify-center p-2 border-[0.5px] border-solid border-whitesmoke-300">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/user--user-close.svg"
        />
      </div>
      <div className="rounded-lg bg-white shadow-[0px_4px_25px_rgba(141,_141,_141,_0.05)] overflow-hidden flex flex-row items-center justify-center p-2 border-[0.5px] border-solid border-whitesmoke-300">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/user--user-check.svg"
        />
      </div>
      <div className="rounded-lg bg-white shadow-[0px_4px_25px_rgba(141,_141,_141,_0.05)] box-border w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 border-[0.5px] border-solid border-whitesmoke-300">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/user--user-voice.svg"
        />
      </div>
      <div className="rounded-lg bg-white shadow-[0px_4px_25px_rgba(141,_141,_141,_0.05)] box-border w-10 h-10 overflow-hidden shrink-0 flex flex-row items-center justify-center p-2 border-[0.5px] border-solid border-whitesmoke-300">
        <img
          className="relative w-6 h-6 overflow-hidden shrink-0"
          alt=""
          src="/communication--mail.svg"
        />
      </div>
      <img className="relative w-px h-[25px]" alt="" src="/line-37.svg" />
      <div
        className="rounded-lg h-8 flex flex-row items-center justify-start"
        style={frameDivStyle}
      >
        <div className="self-stretch rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg bg-royalblue-200 flex flex-row items-center justify-start py-2 px-4">
          <div className="relative leading-[22px]">
            Move To Video Interview I
          </div>
        </div>
        <div className="self-stretch relative bg-white w-px overflow-hidden shrink-0" />
        <div className="self-stretch rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none bg-royalblue-200 w-[34px] flex flex-row items-center justify-start py-3 px-2.5 box-border">
          <img
            className="relative w-4 h-4 overflow-hidden shrink-0"
            alt=""
            src={expandMore}
          />
        </div>
      </div>
      <div className="rounded-2xl bg-aliceblue-400 hidden" />
    </div>
  );
};

export default ProgramApplicationCTA;
