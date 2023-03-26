import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ModalBody from '../../src/components/modal-body';

// Tests
describe('Component: ModalBody', async () => {
  it('Check render result.', async () => {
    render(<ModalBody classes="test">Hello</ModalBody>);
    const thisDom = await screen.queryByText('Hello');
    expect(thisDom).toBeInTheDocument();
  });
});
