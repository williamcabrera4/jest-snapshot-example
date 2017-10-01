import movieNormalizer from '../src/movieNormalizer';
import movie from './movie.json';

describe('Movie Normalizer', () => {

  test('should return a normalized object from the JSON API schema', () => {
    const normalizedMovie = movieNormalizer(movie);
    expect(normalizedMovie).toMatchSnapshot();
  });
});