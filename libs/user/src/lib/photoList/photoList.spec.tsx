import { render } from '@testing-library/react';

import PhotoList from './photoList';

describe('PhotoList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhotoList />);
    expect(baseElement).toBeTruthy();
  });
});
