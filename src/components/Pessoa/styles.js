import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'rgba(125, 116, 177, 0.4)',
    
    justifyContent: 'center', 
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF',
    paddingHorizontal: 5,
  },
  button: {
    backgroundColor: '#7D74B1',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 20,
  },
})