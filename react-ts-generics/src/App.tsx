import "./App.scss";
import { GenericSelect } from "./components/GenericSelect.tsx";
import { BaseType, Book, Laptop, Movie } from "./types/types.ts";
import { booksData, laptops, movies } from "./data/booksData.ts";
import { GenericSelectTest } from "./components/components/GenericSelectTest.tsx";
import { Tabs } from "./components/Tabs.tsx";

function App() {
  const onChange = (value: BaseType) => {
    console.log(value);
  };

  return (
    <div className={"App"}>
      <div className={"Divider"}>
        <GenericSelect<Laptop>
          titleKey={"model"}
          values={laptops}
          formatLabel={(value: Laptop) => value.model}
          onChange={onChange}
        />
        <hr />
      </div>
      <div className={"Divider"}>
        <GenericSelect<Book>
          formatLabel={(value: Book) => value.author}
          values={booksData}
          onChange={onChange}
        />
        <hr />
      </div>
      <div className={"Divider"}>
        <GenericSelect<Movie>
          formatLabel={(value: Movie) => value.title}
          values={movies}
          onChange={onChange}
        />
        <hr />
      </div>
      <div>
        <GenericSelectTest<Book> values={booksData} onChange={onChange} />
        <hr />
      </div>

      <div>
        <h3>tabs</h3>
        <Tabs />
      </div>
    </div>
  );
}

export default App;
