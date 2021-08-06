export interface Movie {
  id: number,
  poster_path: string,
  release_date: string,
  vote_average?: number,
  title: string,
  genres: string,
  runtime?: number,
  overview?: string,
}

