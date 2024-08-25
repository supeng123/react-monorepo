import { render } from '@testing-library/react';

import AlbumItem from './albumItem';

describe('AlbumItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AlbumItem />);
    expect(baseElement).toBeTruthy();
  });
});
