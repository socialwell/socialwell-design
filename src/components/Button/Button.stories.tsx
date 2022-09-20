import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    icon: { control: "boolean", default: false },
    disabled: { control: "boolean", default: false },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const SolidButton = Template.bind({});

SolidButton.args = {
  variant: "solid",
  name: "Button",
};

export const OutlineButton = Template.bind({});

OutlineButton.args = {
  variant: "outline",
  name: "Button",
};
