import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { IconButton } from "./IconButton";

export default {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: { disabled: { control: "boolean", default: false } },
} as ComponentMeta<typeof IconButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const IconButtonPreview = Template.bind({});
