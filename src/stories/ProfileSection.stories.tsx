import { Meta, StoryFn } from '@storybook/react';
import ProfileSection from '../components/ProfileSection';

export default {
  title: 'ProfileSection',
  component: ProfileSection,
} as Meta<typeof ProfileSection>;

const Template: StoryFn<typeof ProfileSection> = (args) => (
  <ProfileSection {...args} />
);

export const Default = Template.bind({});
Default.args = {
  avatarUrl: '',
  login: 'john_doe',
  numberRepos: 10,
  html_url: 'https://github.com/john_doe',
};
