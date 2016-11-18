// Social app for assignment 3
import {
  StyleSheet,
} from 'react-native'

import {
  MARGIN,
  HEADER_HEIGHT
} from '../../constants';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  body: {
    flex: .8,
    marginTop: HEADER_HEIGHT,
    backgroundColor: '#f0f0f0',
  },
  searchBar: {
    fontSize: 20,
    backgroundColor: 'red',
    textAlign: 'center',
  },
  group: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  groupImage: {
    marginTop: MARGIN,
    marginBottom: MARGIN,
    marginLeft: MARGIN,
    marginRight: MARGIN,
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  groupText: {
    padding: 5,
    paddingLeft: 20,
    fontSize: 20,
  },
  button: {
    marginBottom: MARGIN / 2,
    marginLeft: MARGIN,
    marginRight: MARGIN,
  },
  searchContainer: {
    backgroundColor: '#f0f0f0',
    height: 60,
    borderColor: 'transparent',
  },
  searchInput: {
    backgroundColor: 'transparent',
    height: 45,
    fontSize: 18,
    marginLeft: MARGIN * 2,
    borderColor: 'transparent',
  },
  searchIcon: {
    marginTop: MARGIN / 2,
    fontSize: 18,
  },
  searchClose: {
    position: 'absolute',
    right: 20,
    top: 20,
  },

  results: {

  },
})
