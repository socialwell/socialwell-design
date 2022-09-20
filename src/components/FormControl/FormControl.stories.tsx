import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { FormControl } from "./FormControl";

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

export const TextInput = Template.bind({});

TextInput.args = {
  label: "Label",
  type: "text",
};

export const Select = Template.bind({});

Select.args = {
  label: "Label",
  type: "select",
};

export const Textarea = Template.bind({});

Textarea.args = {
  label: "description",
  type: "textarea",
};
