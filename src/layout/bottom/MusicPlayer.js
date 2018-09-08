import React  from 'react';

import {
  Dimensions,
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native';


import { connect } from 'react-redux'
import { showBottomPlayList } from '../../redux/actions/ViewActions.js'
import { changeMusicPlayStatus } from '../../redux/actions/MusicActions.js'

import Ripple from 'react-native-material-ripple'
import { BoxShadow }  from 'react-native-shadow'

import { common } from '../../assets/styles/common.js'


class MusicPlayer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  render () {
    const shadowOpt = {
      width:Dimensions.get('window').width,
      height:53,
      color:"#181818", border:10, opacity:0.8, x:0, y:-1,
    }

    return (
      <View style={{width:Dimensions.get('window').width, height:65, top:Dimensions.get('window').height - (this.props.showView.bottomMusic === false ? 0 : Platform.OS === 'ios' ? 65 : 85), left:0, paddingTop:12, position:'absolute', zIndex:5}}>
        <BoxShadow setting={shadowOpt}>
          <View style={{flex:1, flexDirection:'row', backgroundColor:'#282828'}}>
            <TouchableOpacity onPress={() => {this.props.config.navigation.navigate('Song');}} style={{flex:1, flexDirection:'row', justifyContent:'flex-start'}}>
              <View style={{width:58, flexDirection:'row', alignItems:'center', justifyContent:'center' }}>
                <TouchableOpacity onPress={() => {this.props.config.navigation.navigate('Song');}} style={{width:'76%', height:'76%', marginLeft:2}}>
                  <Image style={{flex:1, marginLeft:2, borderWidth:1, borderRadius:4, borderColor:'#666'}} source={{uri:'http://www.chuanke.com/upload/courseware/f/31/3312428/image/09c68fe797fa58d78a1de4f34e0ea40f.gif'}} />
                </TouchableOpacity>
              </View>
              <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'flex-start'}}>
                <Text style={{textAlign:'left', fontSize:15, color:'#CCC'}}>The Name of the Song</Text>
                <Text style={{textAlign:'left', fontSize:13, color:'#AAA'}}>JesBrianj 苏敬雄</Text>
              </View>
            </TouchableOpacity>
            <View style={{width:80, flexDirection:'row', justifyContent:'center'}}>
              <Ripple onPress={this.changePlayStatus} style={{paddingTop:2, paddingLeft:6, paddingRight:8, flexDirection:'column', justifyContent:'center'}}>
                {
                  this.props.music.playStatus === false ?
                    <Text style={[common.icon,  {fontSize:28, color:'#CCC'}]}>&#xe6b4;</Text> :
                      <Text style={[common.icon,  {fontSize:28, color:'#CCC'}]}>&#xe8c8;</Text>
                }
              </Ripple>
              <TouchableOpacity onPress={() => {this.props.dispatch(showBottomPlayList())}} style={{paddingLeft:8, paddingRight:18, flexDirection:'column', justifyContent:'center'}}>
                <Text style={[common.icon, {fontSize:26, color:'#CCC'}]}>&#xe654;</Text>
              </TouchableOpacity>
            </View>
          </View>
        </BoxShadow>
      </View>
    )
  }

  /**
   * 修改播放状态
   */
  changePlayStatus = () => {
    this.props.dispatch(changeMusicPlayStatus());
  }
}

const styles = StyleSheet.create({
})


function reduxState(store) {
  return {
    config: store.config,
    music: store.music,
    showView: store.showView,
  }
}

export default connect(reduxState)(MusicPlayer);
