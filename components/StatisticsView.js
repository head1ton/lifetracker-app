import React from "react";
import { TouchableOpacity } from "react-native";
import { SmallHeading } from "../css/designSystem";
import { withNavigation } from "react-navigation";
import styled from "@emotion/native";

class StatisticsView extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const statisticsView = (
      <SubHeaderNav>
        <SmallHeading>Hello world</SmallHeading>
      </SubHeaderNav>
    );

    if (!this.props.hidden) {
      return statisticsView;
    } else {
      return null;
    }

  }
}

export default withNavigation(StatisticsView);

export const SubHeaderNav = styled.View`
  justify-content: space-between;
  align-self: center;
  flex-direction: row;
  width: 50%;
  margin-bottom: 20px;
`;