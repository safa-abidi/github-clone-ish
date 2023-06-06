import { Meta, StoryFn } from '@storybook/react';
import Repo from '../components/Repo';

export default {
  title: 'Repo',
  component: Repo,
} as Meta<typeof Repo>;

const Template: StoryFn<typeof Repo> = (args) => (
  <Repo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  repo: {
    name: 'My Repo',
    visibility: 'Public',
    description: 'This is my repository',
    language: 'JavaScript',
    forks_count: 10,
    updated_at: '2023-06-03T10:00:00Z',
    stargazers_count: 50,
    html_url: 'https://github.com/my-repo',
    id: 1,
    owner: {
        login: 'login',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        html_url: '',
    },
  },
};
