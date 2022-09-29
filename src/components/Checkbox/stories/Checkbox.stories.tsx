import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Checkbox } from "../src";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const CheckBoxField = Template.bind({});
