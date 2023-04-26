import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 40,
    backgroundColor: 'beige',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  title: {
    color: '#f1d592',
    fontSize: 60
  },
  slogan: {
    color: '#fed3ad',
    fontSize: 14
  },
  dashboardContainer : {
    // backgroundColor: 'black',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // alignSelf: 'flex-end'
  },
  dashboardText: {
    color: 'white',
    fontSize: 20
  },
  childSummaryOuter: {
    flexDirection: 'row'
  },
  childSummaryInner: {
    flexDirection: 'column'
  },
  formContainer: {
    width: '90%',
    margin: 10,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  formText: {
    color: '#9e1316'
  },
  formInputArea: {
    backgroundColor: 'white',
    width: '80%',
    borderColor: '#9e1316',
    borderWidth: 1,
    color: '#9e1316',
    fontWeight: 'bold'
  },
  headerContainer: {
    backgroundColor: '#9e1316',
    color: '#f1d592',
    flexDirection: 'row',
    minWidth: '75%',
    border: 5,
    margin: 2,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    backgroundColor: '#9e1316',
    color: '#f1d592'
  },
  outerContainer: {
    width: '100%',
    height: '100%',
    maxHeight: 650,
    backgroundColor: 'beige'
  },
  impact: {
    color: '#9e1316',
    fontWeight: 'bold'
  },
  headerProfileText: {
    color: '#9e1316',
    fontWeight: 'bold'
  }
})