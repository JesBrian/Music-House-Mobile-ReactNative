import React from 'react';

import {
  Dimensions,
  View
} from 'react-native';

import { connect } from 'react-redux'
import { BoxShadow }  from 'react-native-shadow'

import { common, theme } from '../../assets/styles/common.js'


class NavbarFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const shadowOpt = {
      width:Dimensions.get('window').width, height:75, color:"#383838", border:12, opacity:0.8, x:0, y:1
    };

    return (
      <BoxShadow setting={shadowOpt}>
        <View style={[common.navbarFrame, this.props.theme === 'light' ? theme.lightBg : theme.darkBg]}>
          { this.props.navbarContent }
        </View>
      </BoxShadow>
    )
  }
}


function reduxState(store) {
  return {
    theme: store.config.theme,
    color: store.config.color
  }
}

export default connect(reduxState)(NavbarFrame);
