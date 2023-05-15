import React, { useEffect } from "react";
import {
  AppliedFilters,
  NumericalFacets,
  Pagination,
  ResultsCount,
  SearchBar,
  StandardCard,
  StandardFacets,
  VerticalResults,
} from "@yext/search-ui-react";
import { useSearchActions } from "@yext/search-headless-react";

const Search = () => {
  const searchActions = useSearchActions();

  useEffect(() => {
    // the query is set to "legendary pokemon" on page load. This will trigger an NLP Filter (https://hitchhikers.yext.com/modules/ans109-core-config-verticals/05-searchable-fields-nlp-filter/)
    searchActions.setQuery("legendary pokemon");
    searchActions.executeVerticalQuery();
  }, []);

  return (
    <div className="px-4 py-8">
      <SearchBar />
      <div className="flex">
        <div className="w-56 shrink-0 mr-5">
          <StandardFacets showOptionCounts />
          <NumericalFacets showOptionCounts inputPrefix={<></>} />
        </div>
        <div className="flex-grow">
          <div className="flex items-baseline">
            <ResultsCount />
            <AppliedFilters />
          </div>
          <VerticalResults CardComponent={StandardCard} />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default Search;
