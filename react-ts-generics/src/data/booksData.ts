import { Book, Laptop, Movie } from "../types/types.ts";

export const booksData: Book[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
  },
  {
    id: "3",
    title: "1984",
    author: "George Orwell",
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
  },
  {
    id: "5",
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
  },
];

export const laptops: Laptop[] = [
  {
    id: "1",
    model: "Orangebook Pro",
    releaseDate: "2019",
  },
  {
    id: "2",
    model: "Orangebook Pro Extreme",
    releaseDate: "2022",
  },
];

export const movies: Movie[] = [
  {
    id: "1",
    title: "Captain Marvel",
    releaseDate: "2019",
  },
  {
    id: "2",
    title: "Good Omens",
    releaseDate: "2019",
  },
];
