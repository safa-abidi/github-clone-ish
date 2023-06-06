import { Meta, StoryFn} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchBar from '../components/SearchBar';

export default {
  title: 'SearchBar',
  component: SearchBar,
} as Meta<typeof SearchBar>;

const Template: StoryFn<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: 'Search...',
  onSearch: action('onSearch'),
};
