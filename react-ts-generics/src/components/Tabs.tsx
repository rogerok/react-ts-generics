import { FC, useState } from "react";
import { GenericSelect } from "./GenericSelect.tsx";
import { BaseType, Book, Laptop, Movie } from "../types/types.ts";
import { booksData, laptops, movies } from "../data/booksData.ts";

const tabs = ["Books", "Movies", "Laptops"] as const;

type TabsType = typeof tabs;
type TabType = TabsType[number];

const onChange = (value: BaseType) => {
  console.log(value);
};

const getSelect = (tab: TabType) => {
  switch (tab) {
    case "Books":
      return (
        <div className={"Divider"}>
          <GenericSelect<Laptop>
            titleKey={"model"}
            values={laptops}
            formatLabel={(value: Laptop) => value.model}
            onChange={onChange}
          />
          <hr />
        </div>
      );
    case "Movies":
      return (
        <div className={"Divider"}>
          <GenericSelect<Book>
            formatLabel={(value: Book) => value.author}
            values={booksData}
            onChange={onChange}
          />
          <hr />
        </div>
      );
    case "Laptops":
      return (
        <div className={"Divider"}>
          <GenericSelect<Movie>
            formatLabel={(value: Movie) => value.title}
            values={movies}
            onChange={onChange}
          />
          <hr />
        </div>
      );
  }
};

export const Tabs: FC = () => {
  const [tab, setTab] = useState<TabType>(tabs[0]);

  const select = getSelect(tab);

  return (
    <>
      <GenericSelect<TabType>
        onChange={(value) => {
          setTab(value);
        }}
        values={tabs}
        formatLabel={(value: string) => value}
      />
      {select}
    </>
  );
};
