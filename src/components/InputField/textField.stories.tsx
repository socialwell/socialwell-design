import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { TextField } from "./InputField";

export default {
  title: "Components/InputField",
  component: TextField,
  argTypes: {
    disabled: { control: "boolean", default: false },
    hasIcon: { control: "boolean", default: false },
    isInvalid: { control: "boolean", default: false },
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const TextInput = Template.bind({});
