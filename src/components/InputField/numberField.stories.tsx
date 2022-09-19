import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { NumberField } from "./InputField";

export default {
  title: "Components/InputField",
  component: NumberField,
  argTypes: {
    disabled: { control: "boolean", default: false },
    // isInvalid: { control: "boolean", default: false },
  },
} as ComponentMeta<typeof NumberField>;

const Template: ComponentStory<typeof NumberField> = (args) => (
  <NumberField {...args} />
);

export const NumberInput = Template.bind({});
