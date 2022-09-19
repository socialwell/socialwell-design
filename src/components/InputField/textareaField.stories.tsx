import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextAreaField } from "./InputField";

export default {
  title: "Components/InputField",
  component: TextAreaField,
  argTypes: {
    disabled: { control: "boolean", default: false },
    isInvalid: { control: "boolean", default: false },
  },
} as ComponentMeta<typeof TextAreaField>;

const Template: ComponentStory<typeof TextAreaField> = (args) => (
  <TextAreaField {...args} />
);

export const TextAreaInput = Template.bind({});
