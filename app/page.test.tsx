import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';

const BANNED_PHRASES = [
  'passionate',
  'leverage',
  'synergy',
  'cutting-edge',
  'world-class',
  'proven track record',
  'in today',
  'think outside the box',
  'game-changer',
  'results-driven',
  'disrupt',
  'empower',
  'unlock',
  'seamless',
  'robust',
  'innovative',
  'state-of-the-art',
  'best-in-class',
  'industry-leading',
  'scalable solutions',
  'cutting edge',
  'world class',
];

describe('resume page', () => {
  it('renders the name and title', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /jun wang/i, level: 1 })).toBeInTheDocument();
    // "Director of Software Engineering" appears twice (header eyebrow + role title):
    // use getAllByText and assert at least one match.
    expect(screen.getAllByText(/director of software engineering/i).length).toBeGreaterThan(0);
  });

  it('renders all section anchors', () => {
    render(<Home />);
    for (const label of ['Experience', 'Projects', 'Skills', 'Education']) {
      expect(screen.getByText(label, { selector: 'nav a' })).toBeInTheDocument();
    }
  });

  it('shows the download PDF link', () => {
    render(<Home />);
    expect(screen.getByText(/download pdf/i)).toBeInTheDocument();
  });

  it('contains no banned AI-flavored phrases', () => {
    render(<Home />);
    const bodyText = document.body.textContent ?? '';
    const lower = bodyText.toLowerCase();
    const hits = BANNED_PHRASES.filter((p) => lower.includes(p));
    expect(hits).toEqual([]);
  });
});
