import React from 'react';

import {
  StyleSheet,
  Dimensions,
  DrawerLayoutAndroid,
  View,
  ScrollView,
  Text,
  Button
} from 'react-native';

import IndexTopNavbar from '../../layout/Top/IndexTopNavbar.js'
import LeftMenuPanel from '../../layout/Left/LeftMenuPanel.js'
import MusicPlayer from '../../layout/Bottom/MusicPlayer.js'
import SuperButton from '../../components/SuperButton.js'


export default class Index extends React.Component {
  closeControlPanel = () => {
    this._drawer.close()
  };
  openControlPanel = () => {
    this._drawer.open()
  };

  buttonClickEvent = () => {
    this.props.navigation.navigate('Login');
  };

  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={Dimensions.get('window').width * 0.82}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => (<LeftMenuPanel/>)}>

        <View style={styles.container}>
          <IndexTopNavbar navigation={this.props.navigation} />

          <ScrollView style={{width: '100%', flex: 1}}>
            <View>
              <Text style={{marginTop: 45}} onPress={() => {
                this.openControlPanel()
              }}>用户登录 88</Text>
              <SuperButton label="g3好gbg" onPressEvent={this.buttonClickEvent}/>
              <Button title='跳转到登录' onPress={() => this.props.navigation.navigate('Login')}/>
              <Button title='跳转到歌单' onPress={() => this.props.navigation.navigate('PlayList')}/>
              <Button title='跳转到歌手' onPress={() => this.props.navigation.navigate('Singer')}/>
            </View>
            <View>
              <Text style={{marginTop: 45}} onPress={() => {
                this.openControlPanel()
              }}>用户登录 88</Text>
              <SuperButton label="g3好gbg" onPressEvent={this.buttonClickEvent}/>
              <Button title='跳转到登录' onPress={() => this.props.navigation.navigate('Login')}/>
              <Button title='跳转到歌单' onPress={() => this.props.navigation.navigate('PlayList')}/>
              <Button title='跳转到歌手' onPress={() => this.props.navigation.navigate('Singer')}/>
            </View>
            <View>
              <Text style={{marginTop: 45}} onPress={() => {
                this.openControlPanel()
              }}>用户登录 88</Text>
              <SuperButton label="g3好gbg" onPressEvent={this.buttonClickEvent}/>
              <Button title='跳转到登录' onPress={() => this.props.navigation.navigate('Login')}/>
              <Button title='跳转到歌单' onPress={() => this.props.navigation.navigate('PlayList')}/>
              <Button title='跳转到歌手' onPress={() => this.props.navigation.navigate('Singer')}/>
            </View>
            <View>
              <Text style={{marginTop: 45}} onPress={() => {
                this.openControlPanel()
              }}>用户登录 88</Text>
              <SuperButton label="g3好gbg" onPressEvent={this.buttonClickEvent}/>
              <Button title='跳转到登录' onPress={() => this.props.navigation.navigate('Login')}/>
              <Button title='跳转到歌单' onPress={() => this.props.navigation.navigate('PlayList')}/>
              <Button title='跳转到歌手' onPress={() => this.props.navigation.navigate('Singer')}/>
            </View>
            <View>
              <Text style={{marginTop: 45}} onPress={() => {
                this.openControlPanel()
              }}>用户登录 88</Text>
              <SuperButton label="g3好gbg" onPressEvent={this.buttonClickEvent}/>
              <Button title='跳转到登录' onPress={() => this.props.navigation.navigate('Login')}/>
              <Button title='跳转到歌单' onPress={() => this.props.navigation.navigate('PlayList')}/>
              <Button title='跳转到歌手' onPress={() => this.props.navigation.navigate('Singer')}/>
            </View>
          </ScrollView>

          <MusicPlayer/>
        </View>

      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    position: 'relative',
    flexDirection: 'column',
    backgroundColor: 'transparent'
  },
});