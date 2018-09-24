import React  from 'react';

import {
  StyleSheet
} from 'react-native';

import Spinner from 'react-native-spinkit'

export default class SuperLoading extends React.Component {
  static defaultProps = {
    seconds: 35,
    size: 100,
    color: "#00d8ff",
    type: 'WanderingCubes',
    isVisible: true
  };

  constructor (props) {
    super(props);
    this.state = {
      // types: ['CircleFlip', 'Bounce', 'Wave', 'WanderingCubes', 'Pulse', 'ChasingDots',
      //   'ThreeBounce', 'Circle', '9CubeGrid', 'WordPress', 'FadingCircle', 'FadingCircleAlt', 'Arc', 'ArcAlt'],
    };
  }

  render () {
    return <Spinner style={this.props.style} isVisible={this.props.isVisible} size={this.props.size} type={this.props.type} color={this.props.color}/>
  }
}

const styles = StyleSheet.create({
});
