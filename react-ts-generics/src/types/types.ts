export type Book = {
  id: string;
  title: string;
  author: string; // only books have it
};

export type Movie = {
  id: string;
  title: string;
  releaseDate: string; // only movies have it
};

export interface BaseType {
  id: string;
  title: string;
}
