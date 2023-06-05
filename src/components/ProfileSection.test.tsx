import { render, screen } from '@testing-library/react';
import ProfileSection from './ProfileSection';

test('renders profile information correctly', () => {
  const profileProps = {
    avatarUrl: 'https://test.com/avatar.png',
    login: 'testuser',
    numberRepos: 10,
    html_url: 'https://test.com/testuser',
  };

  render(<ProfileSection {...profileProps} />);

  const avatarImage = screen.getByAltText('User Avatar');
  const loginLink = screen.getByRole('link', { name: /testuser/i });
  const reposText = screen.getByText(/Number of repos: 10/i);

  expect(avatarImage).toBeInTheDocument();
  expect(loginLink).toBeInTheDocument();
  expect(reposText).toBeInTheDocument();
});
