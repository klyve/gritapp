import {
  Platform
} from 'react-native'
const MARGIN = 10;

const HEADER_HEIGHT = (Platform.OS === 'ios') ? 90 : 80;

export {
    MARGIN,
    HEADER_HEIGHT
}
