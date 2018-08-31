import React  from 'react';

import {
  StyleSheet,
  ScrollView,
  Button,
  View,
  Text
} from 'react-native';

import { connect } from 'react-redux'
import { showModal } from '../../../../redux/actions/ViewActions.js'


import Ripple from 'react-native-material-ripple'
import Swiper from 'react-native-swiper'

import SuperButton from '../../../../components/SuperButton.js'


class IndexRecommend extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      testData: []
    }
  }

  componentWillMount () {
    this.setState({
      testData: ['Hello Swiper', 'Beautiful', 'And simple']
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{width:'100%', flex:1}}>

          <View style={{width:'100%', height:138, marginTop:8, paddingLeft:18, paddingRight:18}}>
            <Swiper style={styles.wrapper} showsButtons={true} autoplay={true}>
              {
                this.state.testData.map((item, index) => {
                  return (
                    <View style={styles.slide1}>
                      <Text style={styles.text}>{ item }</Text>
                    </View>
                  )
                })
              }
            </Swiper>
          </View>

          <Button title='跳转到登录' onPress={()=>this.props.config.navigation.navigate('Home')} />
          <Button title='跳转到歌单' onPress={()=>this.props.config.navigation.navigate('PlayList')} />
          <Button title='跳转到歌手' onPress={()=>this.props.config.navigation.navigate('Singer')} />
          <Button title='跳转到歌单详情' onPress={()=>this.props.config.navigation.navigate('PlayList')} />
          <Button title='打开 Modal' onPress={() => {this.props.dispatch(showModal('loading'))}} />


        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'transparent'
  },
  wrapper: {
  },
  slide1: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#77ffac',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff8dcd',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  }
});


function reduxState(store) {
  return {
    config: store.config,
    music: store.music
  }
}

export default connect(reduxState)(IndexRecommend);