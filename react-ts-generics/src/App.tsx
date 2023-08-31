import "./App.scss";
import { GenericSelect } from "./components/GenericSelect.tsx";
import { Book } from "./types/types.ts";
import { booksData } from "./data/booksData.ts";

function App() {
  const onChange = (value: Book) => {
    console.log(value);
  };

  return (
    <>
      <GenericSelect<Book> values={booksData} onChange={onChange} />
    </>
  );
}

export default App;
