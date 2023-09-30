import { FunctionComponent, useMemo, type CSSProperties } from "react";

type TypeDefaultUserProviderType = {
  frame427319306?: string;
  frame427319303?: string;
  frame427319308?: string;
  frame427319304?: string;

  /** Style props */
  typeDefaultUserProviderPosition?: CSSProperties["position"];
  typeDefaultUserProviderTop?: CSSProperties["top"];
  typeDefaultUserProviderLeft?: CSSProperties["left"];
};

const TypeDefaultUserProvider: FunctionComponent<
  TypeDefaultUserProviderType
> = ({
  frame427319306,
  frame427319303,
  frame427319308,
  frame427319304,
  typeDefaultUserProviderPosition,
  typeDefaultUserProviderTop,
  typeDefaultUserProviderLeft,
}) => {
  const typeDefaultUserProviderStyle: CSSProperties = useMemo(() => {
    return {
      position: typeDefaultUserProviderPosition,
      top: typeDefaultUserProviderTop,
      left: typeDefaultUserProviderLeft,
    };
  }, [
    typeDefaultUserProviderPosition,
    typeDefaultUserProviderTop,
    typeDefaultUserProviderLeft,
  ]);

  return (
    <div
      className="bg-white shadow-[0px_4px_23px_rgba(0,_0,_0,_0.05)] w-[72px] h-[1024px] flex flex-col items-center justify-between p-6 box-border text-left text-3xs text-lightsteelblue font-poppins"
      style={typeDefaultUserProviderStyle}
    >
      <div className="flex flex-col items-center justify-start gap-[32px]">
        <img
          className="relative rounded-lg w-12 h-12 overflow-hidden shrink-0"
          alt=""
          src="/frame-427319302.svg"
        />
        <div className="flex flex-col items-start justify-start gap-[24px]">
          <img
            className="relative rounded-lg w-12 h-12 overflow-hidden shrink-0"
            alt=""
            src={frame427319306}
          />
          <img
            className="relative rounded-lg w-12 h-12 overflow-hidden shrink-0"
            alt=""
            src="/statusdefault-labelcandidate-bank.svg"
          />
          <img
            className="relative rounded-lg w-12 h-12 overflow-hidden shrink-0"
            alt=""
            src="/statusdefault-labelinterview-manager.svg"
          />
          <img
            className="relative rounded-lg w-12 h-12 overflow-hidden shrink-0"
            alt=""
            src={frame427319303}
          />
          <img
            className="relative rounded-lg w-12 h-12 overflow-hidden shrink-0"
            alt=""
            src="/statusdefault-labelemployer-hub.svg"
          />
          <img
            className="relative rounded-lg w-12 h-12 overflow-hidden shrink-0"
            alt=""
            src="/statusdefault-labelreports.svg"
          />
          <img
            className="relative rounded-lg w-12 h-12 overflow-hidden shrink-0"
            alt=""
            src={frame427319308}
          />
          <img
            className="relative rounded-lg w-12 h-12 overflow-hidden shrink-0"
            alt=""
            src="/statusdefault-labelback.svg"
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-start gap-[24px]">
        <img
          className="relative rounded-lg w-12 h-12 overflow-hidden shrink-0"
          alt=""
          src={frame427319304}
        />
        <div className="relative rounded-lg w-12 h-12 overflow-hidden shrink-0">
          <div className="absolute top-[12px] left-[12px] rounded-81xl bg-lavender-300 w-6 h-6 overflow-hidden">
            <div className="absolute top-[5px] left-[5px] font-semibold">
              AS
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypeDefaultUserProvider;
