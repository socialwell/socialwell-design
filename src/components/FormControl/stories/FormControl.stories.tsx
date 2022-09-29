import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";

import { FormControl } from "../src";
export default {
  title: "Components/FormControl",
  component: FormControl,
  argTypes: {
    //
  },
} as ComponentMeta<typeof FormControl>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof FormControl> = (args) => (
  <FormControl {...args} />
);
const Template2: ComponentStory<typeof FormControl> = (args) => (
  <FormControl {...args}>
    <option value="1">one</option>
    <option value="2">two</option>
  </FormControl>
);

export const TextInput = Template.bind({});

TextInput.args = {
  label: "Label",
  type: "text",
};

export const Select = Template2.bind({});

Select.args = {
  label: "Label",
  type: "select",
};

export const Textarea = Template.bind({});

Textarea.args = {
  label: "description",
  type: "textarea",
};
