import React from "react";
import { TabContainer } from "./styles/tabsStyles";

export interface TabsProps {
  isSolid?: boolean;
  data: {
    name: string;
    isActive: boolean;
  }[];
}

export const Tabs: React.FC<TabsProps> = ({ isSolid = false, data }) => {
  return (
    <TabContainer isSolid={isSolid}>
      {data.map(({ name, isActive }, index) => (
        <li key={index} className={`${isActive && "active"}`}>
          {name}
        </li>
      ))}
    </TabContainer>
  );
};
