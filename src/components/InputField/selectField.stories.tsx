import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { SelectField } from "./InputField";

export default {
  title: "Components/InputField",
  component: SelectField,
  argTypes: {
    disabled: { control: "boolean", default: false },
    isInvalid: { control: "boolean", default: false },
  },
} as ComponentMeta<typeof SelectField>;

const Template: ComponentStory<typeof SelectField> = (args) => (
  <SelectField {...args}>
    <option value="1">one</option>
    <option value="2">two</option>
  </SelectField>
);

export const SelectInput = Template.bind({});
