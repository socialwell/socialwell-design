import React from "react";
import { TabContainer } from "./styles/tabsStyles";

export interface DataProps {
  name: string;
  isActive: boolean;
}

interface Props {
  isSolid?: boolean;
  data: DataProps[];
}

const Tabs = ({ isSolid = false, data }: Props) => {
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

export default Tabs;
