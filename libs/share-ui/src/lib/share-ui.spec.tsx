import { render } from '@testing-library/react';

import ShareUi from './share-ui';

describe('ShareUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShareUi />);
    expect(baseElement).toBeTruthy();
  });
});
