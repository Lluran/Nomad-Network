import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Button, Icon } from 'native-base';
import PropTypes from 'prop-types';
import Hamburger from './Hamburger';

export default class Profile extends Component {
  static navigationOptions = ({ navigation }) => ({
    headerTransparent: true,
    headerLeft: (
      <Button
        iconLeft
        transparent
        onPress={() => {
          navigation.getParam('drawerStatus')();
        }}
        width={50}
      >
        <Icon type="FontAwesome" name="bars" />
      </Button>
    ),
  });

  state = {
    isDrawerOpen: false,
  };

  componentDidMount() {
    const { navigation } = this.props;
    navigation.setParams({ drawerStatus: this.drawerStatus });
  }

  drawerStatus = () => {
    this.setState(state => ({ isDrawerOpen: !state.isDrawerOpen }));
  };

  allNav = (screen) => {
    const { navigation } = this.props;
    navigation.navigate(screen);
  };

  render() {
    const { isDrawerOpen } = this.state;
    const userInfo = this.props.navigation.getParam('selectedUser');
    return (
      <View style={{ flex: 1 }}>
        <Hamburger
          allNav={this.allNav}
          isDrawerOpen={isDrawerOpen}
          drawerStatus={this.drawerStatus}
        >
          <Text style={{ paddingTop: 300 }}>{userInfo.username}</Text>
        </Hamburger>
      </View>
    );
  }
}

Profile.propTypes = {
  navigation: PropTypes.object.isRequired,
};