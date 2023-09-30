import { FunctionComponent } from "react";
import LabelNoStatusInactive from "./label-no-status-inactive";
import ContainerForm from "./container-form";

type StatusDefaultType = {
  check?: string;
  aaliyahSanderson?: string;
  riyadhSaudiArabia?: string;
  cPIconsTagArtboard211?: string;
  editCopy?: string;
  interfaceHeart01?: string;
  fileNotebook?: string;
  cPIconsTagArtboard2111?: string;
  editCopy1?: string;
  interfaceHeart011?: string;
  mediaPlayCircle?: string;
  fileNotebook1?: string;
};

const StatusDefault: FunctionComponent<StatusDefaultType> = ({
  check,
  aaliyahSanderson,
  riyadhSaudiArabia,
  cPIconsTagArtboard211,
  editCopy,
  interfaceHeart01,
  fileNotebook,
  cPIconsTagArtboard2111,
  editCopy1,
  interfaceHeart011,
  mediaPlayCircle,
  fileNotebook1,
}) => {
  return (
    <div className="h-[157px] flex flex-row items-center justify-start gap-[16px] text-left text-xl text-lavender-400 font-poppins self-stretch">
      <LabelNoStatusInactive check="/check.svg" />
      <div className="self-stretch flex-1 rounded-2xl bg-white flex flex-row items-center justify-between p-4">
        <div className="self-stretch w-[538px] flex flex-row items-start justify-start gap-[24px]">
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
              Bachelor - Cambridge University (2023 - 2023)
            </div>
            <div className="self-stretch relative font-light">{`Marketing and Business Development Intern - Disney (2023 - 2023) `}</div>
            <div className="flex flex-row items-start justify-start gap-[8px] text-5xs text-royalblue-300">
              <div className="relative">#top_candidate</div>
              <div className="relative">#top_candidate</div>
            </div>
          </div>
        </div>
        <ContainerForm
          dimensionCode="/cp-icons-tag-artboard-2-1-11.svg"
          dimensionCodeText="/edit--copy.svg"
          dimensionCodeImageUrl="/interface--heart-01.svg"
          dimensionCodeText2="/file--notebook.svg"
          dimensionCodeImageUrl2="/cp-icons-tag-artboard-2-1-11.svg"
          dimensionCodeImageUrl3="/edit--copy.svg"
          dimensionCodeImageUrl4="/interface--heart-01.svg"
          dimensionCodeText3="/media--play-circle1.svg"
        />
        <div className="rounded-2xl bg-lavender-100 hidden flex-row items-end justify-start py-1 px-4 gap-[8px] text-3xs text-royalblue-300">
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

export default StatusDefault;
