import React from "react";
import { TouchableOpacity } from "react-native";
import { SmallHeading } from "../css/designSystem";
import { withNavigation } from "react-navigation";
import styled from "@emotion/native";

class SubHeader extends React.Component {
  constructor(props) {
    super(props)
    this.buttonAction = this.buttonAction.bind(this);
    this.state = {
      calendarColour: "#1B4751",
      statisticsColour: "#797C7C"
    }
  }

  buttonAction(view) {
    this.props.switchCallback(view)

    if (view == "calendar") {
      this.setState({ statisticsColour: "#797C7C", calendarColour: "#1B4751" })
    } else {
      this.setState({ statisticsColour: "#1B4751", calendarColour: "#797C7C" })
    }
  }

  render() {
    return (
      <SubHeaderNav>
        <TouchableOpacity onPress={() => this.buttonAction("calendar")}>
          <SmallHeading style={{ color: this.state.calendarColour }}>Calendar</SmallHeading>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => this.buttonAction("statistics")}>
          <SmallHeading style={{ color: this.state.statisticsColour }}>Statistics</SmallHeading>
        </TouchableOpacity>
      </SubHeaderNav>
    );
  }
}

export default withNavigation(SubHeader);

export const SubHeaderNav = styled.View`
  justify-content: space-between;
  align-self: center;
  flex-direction: row;
  width: 50%;
  margin-bottom: 20px;
`;