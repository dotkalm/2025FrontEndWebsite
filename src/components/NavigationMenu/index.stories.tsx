import React from "react";
import { StoryFn } from "@storybook/react";
import NavigationMenu from "./index";
import { navigationFixtures } from "./fixtures/constants";

const exportObject =  {
    title: "Components/NavigationMenu",
    component: NavigationMenu,
};
export default exportObject 

const Template: StoryFn<typeof NavigationMenu> = (args) => (
    <NavigationMenu {...args} />
);

export const Default = Template.bind({});
Default.args = {
    ...navigationFixtures,
    pathname: "/",
};

// Artists active variant
export const ArtistsActive = Template.bind({});
ArtistsActive.args = {
    ...navigationFixtures,
    pathname: "/artists",
};

// Shop active variant (external link, so no highlight)
export const PastExhibitions = Template.bind({});
PastExhibitions.args = {
    ...navigationFixtures,
    pathname: "/exhibitions/past",
};

export const CurrentExhibitions = Template.bind({});
CurrentExhibitions.args = {
    ...navigationFixtures,
    pathname: "/exhibitions/current",
};