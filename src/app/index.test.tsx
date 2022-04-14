import React from 'react';
import * as rtl from '@testing-library/react';
const { render, waitFor } = rtl;

import App from './index';

test('jest checking', async () => {
  const rendered = render(<App />);
  await waitFor(() => {
    expect(rendered.getByText(/hello react/i)).toBeTruthy();
    // rtl.screen.debug(rendered.container);
  });
});
