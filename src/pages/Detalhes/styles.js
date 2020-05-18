import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(1, 1, 1, 1)',
    width: '100%',
    alignItems: 'center',
    height: '100%',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 10,
    margin: 10,
  },
  box: {
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 5,
    backgroundColor: 'rgba(38, 27, 100, 0.8)',
    width: '100%',
    height: '50%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFF',
    paddingBottom: 15,
  },
  button: {
    margin: 20, 
    marginRight: 30,
  },
})