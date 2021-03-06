import React from "react";
import { View, TouchableOpacity, Image, Modal } from "react-native";
import Header from "../../components/Header";
import { AdMobInterstitial } from "expo-ads-admob";
import { Linking } from "expo";
import Constants from "expo-constants";
import { Screen, MedHeading, LineSeperator } from "../../css/designSystem";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import SettingsButton from "../../components/SettingsButton";

export default class SettingsMain extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      view: null,
      user: null,
      modalVisible: false
    };
  }

  async showAd() {
    try {
      if (Constants.platform.ios) {
        AdMobInterstitial.setAdUnitID("ca-app-pub-6414919472390529~2221508850");
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
        await AdMobInterstitial.showAdAsync();
      } else {
        AdMobInterstitial.setAdUnitID("ca-app-pub-6414919472390529~5965312748");
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
        await AdMobInterstitial.showAdAsync();
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    let support;

    if (Constants.platform.ios) {
      support = (<View></View>);
    } else {
      support = (
        <View>
          <MedHeading style={{ margin: 10 }}>
            Want to support this project?
        </MedHeading>

          <TouchableOpacity
            onPress={() =>
              Linking.openURL("https://www.buymeacoffee.com/alexandargyurov")
            }
            style={{ alignSelf: "center" }}
          >
            <Image
              style={{ width: 200, height: 50, borderRadius: 8, margin: 10 }}
              source={{
                uri: "https://cdn.buymeacoffee.com/buttons/lato-orange.png"
              }}
            />
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <Screen>
        <Header title="Settings" backButton />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around"
          }}
        >
          <SettingsButton
            title="Accounts"
            icon="account-circle"
            navTo="SettingsAccounts"
            comingSoon={true}
          />
          <SettingsButton
            title="Notifications"
            icon="notifications"
            navTo="SettingsNotifications"
          />
        </View>

        <LineSeperator />

        {support}
      </Screen>
    );
  }
}
