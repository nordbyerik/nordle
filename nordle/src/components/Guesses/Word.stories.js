import React from 'react';

import Word from './Word';

export default {
  component: Word,
  title: 'Word',
};

const Template = args => <Word {...args} />;

export const Default = Template.bind({});
Default.args = {
  word:'beans',
  guessed:true,
  guess:'baked'
};


