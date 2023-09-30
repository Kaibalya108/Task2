import { FunctionComponent } from "react";
import TypeDefaultUserProvider from "./type-default-user-provider";
import Search from "./search";
import StatusDefaultTypeDefault from "./status-default-type-default";
import LabelNoStatusInactive from "./label-no-status-inactive";
import TypeDefault1 from "./type-default1";
import StatusDefault from "./status-default";
import TypeDefault from "./type-default";
import ProgramApplicationCTA from "./program-application-c-t-a";

const ProgramApplicationView: FunctionComponent = () => {
  return (
    <div className="bg-ghostwhite-100 w-[1440px] h-[1024px] overflow-hidden text-left text-3xs text-gray font-poppins">
      <TypeDefaultUserProvider
        frame427319306="/frame-427319306.svg"
        frame427319303="/statusdefault-labelopportunity-hub.svg"
        frame427319308="/frame-427319308.svg"
        frame427319304="/frame-427319304.svg"
        typeDefaultUserProviderPosition="absolute"
        typeDefaultUserProviderTop="0px"
        typeDefaultUserProviderLeft="0px"
      />
      <div className="absolute top-[120px] left-[104px] flex flex-row items-start justify-start gap-[32px]">
        <div className="self-stretch w-[385px] flex flex-col items-start justify-start gap-[24px]">
          <Search
            search="/search1.svg"
            filterByNameEduExpOrTag="Serach by name, edu, exp or #tag"
            searchBorder="1px solid #f3f3f3"
            searchHeight="48px"
          />
          <StatusDefaultTypeDefault
            line1="/line-11.svg"
            fileFileDocument="/file--file-document2.svg"
            line2="/line-11.svg"
            fileFileDocument1="/file--file-document2.svg"
            line4="/line-11.svg"
            fileFileDocument2="/file--file-document2.svg"
            line3="/line-11.svg"
            fileFileDocument3="/file--file-document2.svg"
            arrowCaretDownMD="/arrow--caret-down-md1.svg"
            line5="/line-11.svg"
            fileFileDocument4="/file--file-document2.svg"
            line6="/line-11.svg"
            fileFileDocument5="/file--file-document2.svg"
            arrowCaretDownMD1="/arrow--caret-down-md3.svg"
          />
          <div className="hidden flex-col items-start justify-start gap-[16px]">
            <div className="w-[385px] flex flex-row items-end justify-start gap-[16px]">
              <div className="rounded-3xs bg-aliceblue-300 box-border h-6 flex flex-row items-center justify-start py-px px-2 gap-[16px] border-[1px] border-solid border-lavender-500">
                <div className="relative">Location : Riyadh, Saudi Arabia</div>
                <img
                  className="relative w-3 h-3 overflow-hidden shrink-0"
                  alt=""
                  src="/close.svg"
                />
              </div>
              <div className="rounded-3xs bg-aliceblue-300 box-border h-6 flex flex-row items-center justify-start py-px px-2 gap-[16px] border-[1px] border-solid border-lavender-500">
                <div className="relative">Gender : Female</div>
                <img
                  className="relative w-3 h-3 overflow-hidden shrink-0"
                  alt=""
                  src="/close.svg"
                />
              </div>
            </div>
            <div className="w-[385px] flex flex-row items-center justify-start gap-[16px] text-darkslategray-100">
              <div className="rounded-3xs bg-aliceblue-300 box-border h-6 flex flex-row items-center justify-start py-px px-2 gap-[16px] text-gray border-[1px] border-solid border-lavender-500">
                <div className="relative">
                  Program : Misk Internship Program
                </div>
                <img
                  className="relative w-3 h-3 overflow-hidden shrink-0"
                  alt=""
                  src="/close.svg"
                />
              </div>
              <div className="relative text-smi font-extralight">|</div>
              <div className="relative font-light">Clear Filters</div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl bg-white w-[883px] flex flex-col items-start justify-start pt-2 px-4 pb-0 box-border gap-[4px] text-sm text-royalblue-300">
          <div className="self-stretch flex flex-row items-center justify-between">
            <div className="flex flex-row items-center justify-start py-4 px-0 gap-[32px]">
              <LabelNoStatusInactive check="/check1.svg" />
              <div className="relative leading-[22px] font-semibold">
                247 Candidates
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[16px] text-whitesmoke-100">
              <div className="flex flex-row items-start justify-start gap-[8px] text-royalblue-300">
                <div className="relative leading-[22px] font-medium">
                  Qualified
                </div>
                <div className="rounded-21xl bg-aliceblue-200 hidden flex-col items-start justify-start py-px px-1.5 text-center text-3xs">
                  <div className="relative leading-[22px] font-medium">247</div>
                </div>
              </div>
              <div className="relative text-base leading-[22px] font-medium">
                |
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-gray">
                <div className="relative leading-[22px]">Task</div>
                <div className="rounded-21xl bg-ghostwhite-200 flex flex-col items-start justify-start py-px px-1.5 text-center text-3xs text-darkslateblue">
                  <div className="relative leading-[22px]">25</div>
                </div>
              </div>
              <div className="relative text-base leading-[22px] font-medium">
                |
              </div>
              <div className="flex flex-row items-start justify-start gap-[8px] text-gray">
                <div className="relative leading-[22px]">Disqualified</div>
                <div className="rounded-21xl bg-ghostwhite-200 flex flex-col items-start justify-start py-px px-1.5 text-center text-3xs text-darkslateblue">
                  <div className="relative leading-[22px]">78</div>
                </div>
              </div>
            </div>
            <div className="hidden flex-row items-center justify-end py-4 px-0 gap-[16px] text-center text-gray">
              <div className="hidden flex-row items-center justify-center gap-[8px]">
                <div className="relative font-medium">Incomplete Profiles</div>
                <div className="rounded-21xl bg-aliceblue-500 hidden" />
              </div>
              <div className="relative w-7 h-4 hidden">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-gainsboro-200" />
                <div className="absolute top-[calc(50%_-_6px)] left-[2px] w-3 h-3">
                  <div className="absolute top-[calc(50%_-_6px)] left-[0px] rounded-2xl bg-white shadow-[0px_2px_4px_rgba(0,_35,_11,_0.2)] w-3 h-3" />
                </div>
              </div>
              <div className="relative w-11 h-[22px] hidden">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-royalblue-400" />
                <div className="absolute top-[calc(50%_-_9px)] right-[3px] shadow-[0px_2px_4px_rgba(0,_35,_11,_0.2)] w-[18px] h-[18px] overflow-hidden">
                  <div className="absolute w-full top-[calc(50%_-_9px)] right-[0px] left-[0px] rounded-2xl bg-white h-[18px]" />
                </div>
              </div>
            </div>
          </div>
          <img
            className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
            alt=""
            src="/line-36.svg"
          />
          <TypeDefault1
            check="/check2.svg"
            aaliyahSanderson="Aaliyah Sanderson"
            riyadhSaudiArabia="Riyadh, Saudi Arabia"
            bachelorCambridgeUniversi="Bachelor - Cambridge University (2023 - 2023)"
            cPIconsTagArtboard211="/cp-icons-tag-artboard-2-1-12.svg"
            editCopy="/edit--copy1.svg"
            interfaceHeart01="/interface--heart-011.svg"
            mediaPlayCircle="/media--play-circle.svg"
            fileNotebook="/file--notebook2.svg"
            vDO="/vdo1.svg"
            cPIconsTagArtboard2111="/cp-icons-tag-artboard-2-1-12.svg"
            editCopy1="/edit--copy1.svg"
            interfaceHeart011="/interface--heart-011.svg"
            mediaPlayCircle1="/media--play-circle3.svg"
            fileNotebook1="/file--notebook2.svg"
          />
          <img
            className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
            alt=""
            src="/line-36.svg"
          />
          <TypeDefault1
            check="/check2.svg"
            aaliyahSanderson="John Doe"
            riyadhSaudiArabia="Bostom, USA"
            bachelorCambridgeUniversi="Bachelor - MIT (2023 - 2023)"
            cPIconsTagArtboard211="/cp-icons-tag-artboard-2-1-12.svg"
            editCopy="/edit--copy1.svg"
            interfaceHeart01="/interface--heart-011.svg"
            mediaPlayCircle="/media--play-circle.svg"
            fileNotebook="/file--notebook2.svg"
            vDO="/vdo2.svg"
            cPIconsTagArtboard2111="/cp-icons-tag-artboard-2-1-13.svg"
            editCopy1="/edit--copy1.svg"
            interfaceHeart011="/interface--heart-012.svg"
            mediaPlayCircle1="/media--play-circle3.svg"
            fileNotebook1="/file--notebook2.svg"
          />
          <img
            className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
            alt=""
            src="/line-36.svg"
          />
          <TypeDefault1
            check="/check2.svg"
            aaliyahSanderson="Thomas Matt"
            riyadhSaudiArabia="Edinburgh, UK"
            bachelorCambridgeUniversi="Bachelor - Harvard University (2023 - 2023)"
            cPIconsTagArtboard211="/cp-icons-tag-artboard-2-1-13.svg"
            editCopy="/edit--copy1.svg"
            interfaceHeart01="/interface--heart-012.svg"
            mediaPlayCircle="/media--play-circle.svg"
            fileNotebook="/file--notebook3.svg"
            vDO="/vdo3.svg"
            cPIconsTagArtboard2111="/cp-icons-tag-artboard-2-1-13.svg"
            editCopy1="/edit--copy1.svg"
            interfaceHeart011="/interface--heart-012.svg"
            mediaPlayCircle1="/media--play-circle3.svg"
            fileNotebook1="/file--notebook3.svg"
          />
          <img
            className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
            alt=""
            src="/line-36.svg"
          />
          <TypeDefault1
            check="/check2.svg"
            aaliyahSanderson="Kamilia Smith"
            riyadhSaudiArabia="London, UK"
            bachelorCambridgeUniversi="Bachelor - Boston University (2023 - 2023)"
            cPIconsTagArtboard211="/cp-icons-tag-artboard-2-1-13.svg"
            editCopy="/edit--copy1.svg"
            interfaceHeart01="/interface--heart-012.svg"
            mediaPlayCircle="/media--play-circle.svg"
            fileNotebook="/file--notebook3.svg"
            vDO="/vdo4.svg"
            cPIconsTagArtboard2111="/cp-icons-tag-artboard-2-1-14.svg"
            editCopy1="/edit--copy1.svg"
            interfaceHeart011="/interface--heart-012.svg"
            mediaPlayCircle1="/media--play-circle3.svg"
            fileNotebook1="/file--notebook3.svg"
          />
          <img
            className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
            alt=""
            src="/line-36.svg"
          />
          <TypeDefault1
            check="/check2.svg"
            aaliyahSanderson="Roy Jade"
            riyadhSaudiArabia="Cambridge,  UK"
            bachelorCambridgeUniversi="Bachelor - Yale (2023 - 2023)"
            cPIconsTagArtboard211="/cp-icons-tag-artboard-2-1-14.svg"
            editCopy="/edit--copy1.svg"
            interfaceHeart01="/interface--heart-012.svg"
            mediaPlayCircle="/media--play-circle.svg"
            fileNotebook="/file--notebook4.svg"
            vDO="/vdo5.svg"
            cPIconsTagArtboard2111="/cp-icons-tag-artboard-2-1-15.svg"
            editCopy1="/edit--copy1.svg"
            interfaceHeart011="/interface--heart-012.svg"
            mediaPlayCircle1="/media--play-circle3.svg"
            fileNotebook1="/file--notebook5.svg"
          />
          <img
            className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
            alt=""
            src="/line-36.svg"
          />
          <StatusDefault
            check="/check2.svg"
            aaliyahSanderson="Ahmed Salman"
            riyadhSaudiArabia="New York, USA"
            cPIconsTagArtboard211="/cp-icons-tag-artboard-2-1-16.svg"
            editCopy="/edit--copy1.svg"
            interfaceHeart01="/interface--heart-012.svg"
            fileNotebook="/file--notebook6.svg"
            cPIconsTagArtboard2111="/cp-icons-tag-artboard-2-1-15.svg"
            editCopy1="/edit--copy1.svg"
            interfaceHeart011="/interface--heart-012.svg"
            mediaPlayCircle="/media--play-circle3.svg"
            fileNotebook1="/file--notebook7.svg"
          />
        </div>
      </div>
      <div className="absolute top-[32px] left-[104px] w-[1294px] flex flex-row items-start justify-start gap-[32px] text-xl text-royalblue-300">
        <div className="w-[385px] flex flex-col items-start justify-start gap-[8px]">
          <div className="relative font-semibold">
            London Internship Program
          </div>
          <div className="relative text-xs font-light text-gray">London</div>
        </div>
        <div className="self-stretch flex-1 flex flex-row items-start justify-between">
          <TypeDefault />
          <ProgramApplicationCTA
            cPIconsTagArtboard211="/cp-icons-tag-artboard-2-1-17.svg"
            expandMore="/expand-more1.svg"
            frameDivHeight="unset"
            frameDivAlignSelf="stretch"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramApplicationView;
