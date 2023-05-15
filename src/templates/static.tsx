import * as React from "react";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
} from "@yext/pages";
import "../index.css";
import {
  SearchHeadlessProvider,
  provideHeadless,
  HeadlessConfig,
} from "@yext/search-headless-react";
import Search from "../components/Search";

export const getPath: GetPath<TemplateProps> = () => {
  return "index.html";
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: `Yext Search on Yext Pages`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

// If you would like to use your own Search Experience, replace this configuration with your own.
const headlessConfig: HeadlessConfig = {
  apiKey: "04b78728dd796655b4d08b007d235165",
  experienceKey: "pokemon",
  locale: "en",
  verticalKey: "pokemon",
};

const searcher = provideHeadless(headlessConfig);

const Static: Template<TemplateRenderProps> = () => {
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <div className="max-w-7xl mx-auto">
        <Search />
      </div>
    </SearchHeadlessProvider>
  );
};

export default Static;
