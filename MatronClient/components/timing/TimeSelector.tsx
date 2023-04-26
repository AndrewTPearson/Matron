import { View, Text } from 'react-native';
import { useContext, useState, useEffect } from "react";
import { SelectList } from 'react-native-dropdown-select-list';
import { TimesContext } from "../sessions/create-offer-page";
import { styles } from "../../styleSheet";


export function TimeSelector ({title}) {

  const hours = [
    {key: 0, value: '00'}, {key: 1, value: '01'}, {key: 2, value: '02'},
    {key: 3, value: '03'}, {key: 4, value: '04'}, {key: 5, value: '05'},
    {key: 6, value: '06'}, {key: 7, value: '07'}, {key: 8, value: '08'},
    {key: 9, value: '09'}, {key: 10, value: '10'}, {key: 11, value: '11'},
    {key: 12, value: '12'}, {key: 13, value: '13'}, {key: 14, value: '14'},
    {key: 15, value: '15'}, {key: 16, value: '16'}, {key: 17, value: '17'},
    {key: 18, value: '18'}, {key: 19, value: '19'}, {key: 20, value: '20'},
    {key: 21, value: '21'}, {key: 22, value: '22'}, {key: 23, value: '23'}
  ]
  const minutes = [
    {key: 0, value: '00'},    
    {key: 1, value: '15'},
    {key: 2, value: '30'},
    {key: 3, value: '45'}    
  ]
  const [time, setTime] = useState({
    hours: {key: 0, value: '00'},
    minutes: {key: 0, value: '00'}
  }
  )
  function handleChangeTime (unit, value) {
    let newTime = {...time};
    newTime[unit] = value;
    setTime(newTime);
  }

  return (
    <View>
      <Text>{title}</Text>
      <SelectList
        setSelected={(value)=>{handleChangeTime('hours', value)}}
        data={hours}
        save='value'
      />
      <SelectList
        setSelected={(value)=>{handleChangeTime('minutes', value)}}
        data={minutes}
        save='value'
      />
    </View>
  )

}