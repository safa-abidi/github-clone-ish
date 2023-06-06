import Button from '../components/Button';
import { Meta, StoryFn } from '@storybook/react';

export default {
    title: 'Button',
    component: Button,
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    children: 'click me',
    borderRadius: '4px',
};