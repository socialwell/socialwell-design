import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Avatar } from "./Avatar";

export default {
  title: "Components/Avatar",
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarImage = Template.bind({});

AvatarImage.args = {
  src: "https://ui-avatars.com/api/?name=prabodh%20gedam&size=128&background=285E61&color=fff",
};

export const AvatarPlaceholderImage = Template.bind({});

AvatarPlaceholderImage.args = {
  src: "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png",
};

export const AvatarProfileImage = Template.bind({});

AvatarProfileImage.args = {
  src: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};
