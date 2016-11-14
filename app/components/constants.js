import {
  Platform
} from 'react-native'
const MARGIN = 10;

const HEADER_HEIGHT = (Platform.OS === 'ios') ? 90 : 80;
const HEADER_PADDING = (Platform.OS === 'ios') ? 35 : 22;
export {
    MARGIN,
    HEADER_HEIGHT,
    HEADER_PADDING
}
