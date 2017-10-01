const movieNormalizer = (movieData) => ({
  title: movieData.Title,
  description: movieData.Plot,
  language: movieData.Language,
  writers: movieData.Writer.split(','),
  actors: movieData.Actors.split(','),
  genres: movieData.Genre.split(','),
});

export default movieNormalizer;
