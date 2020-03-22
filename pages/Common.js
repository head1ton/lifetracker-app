import React from "react";

import { Screen } from "../css/designSystem";
import Header from "../components/Header";
import SubHeader from "../components/SubHeader";
import ActionButton from "../components/ActionButton";
import CalendarView from "../components/CalendarView";
import StatisticsView from "../components/StatisticsView";

export default class CommonScreen extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.database = global.db;
    this.switchView = this.switchView.bind(this);
    this.state = {
      drawerOpen: true,
      calendarView: true,
      statisticsView: false
    };
  }

  switchView(view) {
    if (view == "calendar" && this.state.calendarView == false) {
      this.setState({ statisticsView: false })
      this.setState({ calendarView: true })
    }

    if (view == "statistics" && this.state.statisticsView == false) {
      this.setState({ statisticsView: true })
      this.setState({ calendarView: false })
    }
  }

  async componentDidMount() {
    await this.database.fetchDatabase();
  }

  render() {
    return (
      <Screen>
        <Header title={"Overview"} />
        <SubHeader switchCallback={this.switchView} />

        <CalendarView navigation={this.props.navigation} hidden={!this.state.calendarView} />
        <StatisticsView hidden={!this.state.statisticsView} />

        <ActionButton buttonText={"New Record"} navigateTo={"Mood"} />
      </Screen>
    );
  }
}
