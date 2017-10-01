import React from 'react';
import renderer from 'react-test-renderer';

import movie from './movie.json';
import movieNormalizer from '../src/movieNormalizer';
import MovieComponent from '../src/MovieComponent';

describe('Movie Component', () => {

  test('should render the movie information', () => {
    const normalizedMovie = movieNormalizer(movie);
    const component = renderer.create(<MovieComponent movie={normalizedMovie} />);

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});