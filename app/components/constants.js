import {
  Platform
} from 'react-native'

const MARGIN = 10;
const HEADER_HEIGHT = (Platform.OS === 'ios') ? 90 : 90;
const HEADER_PADDING = (Platform.OS === 'ios') ? 35 : 35;

export {
    MARGIN,
    HEADER_HEIGHT,
    HEADER_PADDING
}
