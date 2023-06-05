import { render, screen } from '@testing-library/react';
import Repo from './Repo';

test('renders repository information correctly', () => {
  const repo = {
    name: 'example-repo',
    visibility: 'public',
    description: 'This is an example repository',
    language: 'JavaScript',
    forks_count: 5,
    updated_at: '2022-01-01T12:00:00Z',
    stargazers_count: 10,
    html_url: 'https://example.com/example-repo',
    created_at: '2021-01-01T12:00:00Z',
    id: 123456789,
    owner:{
      avatar_url: 'https://example.com/avatar.png',
      html_url: 'https://example.com/example-user',
      login: 'example-user',
    }
  };

  render(<Repo repo={repo} />);

  const repoNameLink = screen.getByRole('link', { name: /example-repo/i });
  const visibilityText = screen.getByText(/public/i);
  const descriptionText = screen.getByText(/This is an example repository/i);
  const languageText = screen.getByText(/JavaScript/i);
  const forksText = screen.getByText(/5/i);
  const updatedTimeText = screen.getByText(/a year ago/i);
  const stargazersText = screen.getByText(/10/i);

  expect(repoNameLink).toBeInTheDocument();
  expect(visibilityText).toBeInTheDocument();
  expect(descriptionText).toBeInTheDocument();
  expect(languageText).toBeInTheDocument();
  expect(forksText).toBeInTheDocument();
  expect(updatedTimeText).toBeInTheDocument();
  expect(stargazersText).toBeInTheDocument();
});
