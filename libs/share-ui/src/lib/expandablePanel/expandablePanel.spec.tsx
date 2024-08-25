import { render } from '@testing-library/react';

import ExpandablePanel from './expandablePanel';

describe('ExpandablePanel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ExpandablePanel />);
    expect(baseElement).toBeTruthy();
  });
});
