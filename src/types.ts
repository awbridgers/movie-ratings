export interface IRating {
  name: string,
  score: number
}
export interface IViewer {
  name: string,
  ratings : IRating[];
}
export interface IMovie {
  title: string,
  date: Date,
  ratings: IRating[],
  id: string,
  cage: boolean
}

export interface IMovieData {
  budget: number,
  genres: {id:number, name: string}[],
  imdb_id: string,
  overview: string,
  poster_path: string,
  backdrop_path: string,
  revenue: number,
  release_date: Date,
  runtime: number,
  title: string,
  vote_average: number,
  vote_count: number,
  tagline: string
}