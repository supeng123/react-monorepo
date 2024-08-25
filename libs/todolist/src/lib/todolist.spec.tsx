import { render } from '@testing-library/react';

import Todolist from './todolist';

describe('Todolist', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Todolist />);
    expect(baseElement).toBeTruthy();
  });
});
