import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(1, 1, 1, 1)',
    width: '100%',
    alignItems: 'center',
  },
  box: {
    borderWidth: 2,
    borderColor: '#FFF',
    borderRadius: 5,
    backgroundColor: 'rgba(38, 27, 100, 0.8)',
    width: '100%',
    height: '100%',
    padding: 20,
  },
  title: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  secondTitle: {
    marginTop: '10%',
    paddingTop: '3%', 
    borderTopWidth: 2,
    borderTopColor: '#FFF',
  },
  input: {
    borderWidth: 2,
    borderRadius: 5,
    borderColor: '#FFF',
    backgroundColor: 'rgba(125, 116, 177, 0.4)',
    color: '#FFF',
    paddingLeft: 10,
    paddingVertical: 5,
    marginTop: 15,
    fontWeight: 'bold',
  },
  panel: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  button: {
    backgroundColor: 'rgba(59, 145, 45, 1)',
    borderWidth: 1,
    borderRadius: 5,
    borderBottomColor: '#FFF',
    width: '40%',
    padding: 5,
    alignItems: 'center',
    marginTop: 15,
    marginHorizontal: 10,
  },
  buttonDisabled: {
    backgroundColor: 'rgba(255, 19, 0, 0.4)',
  },
  textButton: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textButtonDisabled: {
    color: 'rgba(255, 162, 154, 0.8)',
  },
})