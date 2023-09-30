import { FunctionComponent, useMemo, type CSSProperties } from "react";

type SearchType = {
  search?: string;
  filterByNameEduExpOrTag?: string;

  /** Style props */
  searchBorder?: CSSProperties["border"];
  searchHeight?: CSSProperties["height"];
};

const Search: FunctionComponent<SearchType> = ({
  search,
  filterByNameEduExpOrTag,
  searchBorder,
  searchHeight,
}) => {
  const searchStyle: CSSProperties = useMemo(() => {
    return {
      border: searchBorder,
      height: searchHeight,
    };
  }, [searchBorder, searchHeight]);

  return (
    <div
      className="rounded-lg bg-white box-border h-10 flex flex-row items-center justify-between p-4 text-left text-sm text-darkgray font-poppins self-stretch border-[1px] border-solid border-gainsboro-100"
      style={searchStyle}
    >
      <img
        className="relative w-5 h-5 overflow-hidden shrink-0 hidden"
        alt=""
        src={search}
      />
      <div className="flex flex-row items-center justify-start gap-[10px]">
        <img
          className="relative w-5 h-5 overflow-hidden shrink-0"
          alt=""
          src="/interface--search-magnifying-glass.svg"
        />
        <div className="relative leading-[22px]">{filterByNameEduExpOrTag}</div>
      </div>
      <img
        className="relative w-5 h-5 overflow-hidden shrink-0"
        alt=""
        src="/warning--circle-warning.svg"
      />
    </div>
  );
};

export default Search;
