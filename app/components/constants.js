import {
  Platform
} from 'react-native'

const MARGIN = 10;
const HEADER_HEIGHT = (Platform.OS === 'ios') ? 90 : 90;
const HEADER_PADDING = (Platform.OS === 'ios') ? 35 : 35;
const SERVER = 'https://124b01b4.ngrok.io/api';
const IMAGEPATH = 'https://124b01b4.ngrok.io/images/';
//const SERVER = 'https://da15ffc7.ngrok.io/api';
//const IMAGEPATH = 'https://da15ffc7.ngrok.io/images/';
export {
    MARGIN,
    HEADER_HEIGHT,
    HEADER_PADDING,
    SERVER,
    IMAGEPATH
}
