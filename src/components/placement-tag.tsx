import { FunctionComponent } from "react";

type PlacementTagType = {
  newYork?: string;
};

const PlacementTag: FunctionComponent<PlacementTagType> = ({ newYork }) => {
  return (
    <div className="rounded-2xl bg-aliceblue-100 flex flex-row items-center justify-center py-0.5 px-2.5 text-left text-5xs text-steelblue font-poppins">
      <div className="relative font-medium">{newYork}</div>
    </div>
  );
};

export default PlacementTag;
