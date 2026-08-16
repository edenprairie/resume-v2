import '@testing-library/jest-dom/vitest';
import { afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';

// RTL's auto-cleanup only runs when the test framework exposes a global
// `afterEach` (vitest `globals: true`). Without it, renders accumulate in
// the same document.body and queries match duplicated content. Clean up
// explicitly after each test.
afterEach(() => {
  cleanup();
});
