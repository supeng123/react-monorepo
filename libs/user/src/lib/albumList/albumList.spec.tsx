import { render } from '@testing-library/react';

import AlbumList from './albumList';

describe('AlbumList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AlbumList />);
    expect(baseElement).toBeTruthy();
  });
});
