import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import CloseButton from "./CloseButton";

export default {
  title: "Components/CloseButton",
  component: CloseButton,
  argTypes: { disabled: { control: "boolean", default: false } },
} as ComponentMeta<typeof CloseButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CloseButton> = (args) => (
  <CloseButton {...args} />
);

export const CloseIconButton = Template.bind({});
