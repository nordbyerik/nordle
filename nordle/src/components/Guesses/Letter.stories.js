import React from 'react';

import Letter from './Letter';

export default {
  component: Letter,
  title: 'Letter',
};

const Template = args => <Letter {...args} />;

export const Default = Template.bind({});
Default.args = {
  guessed:false,
  word:'beans',
  letter:'p',
  index:0
};

export const GuessedWrong = Template.bind({});
GuessedWrong.args = {
  ...Default.args,
  guessed:true
};

export const GuessedCorrect = Template.bind({});
GuessedCorrect.args = {
  ...Default.args,
  guessed:true,
  letter:'b'
};

