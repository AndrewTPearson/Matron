import { useState, useEffect } from "react";
import { SelectList } from 'react-native-dropdown-select-list';
import { View, Text, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { modifyOffer, sendOffer } from "../../redux-slices/newOfferSlice";
import { Route, useRoute } from "@react-navigation/native";
import { DateTime, fromISO } from 'luxon'
import { useNavigation } from "@react-navigation/native";
import HeaderWithProfile from "../headers/header-with-profile";
import { styles } from "../../styleSheet";
import Dashboard from "../Dashboard";


export function Calendar ({navigation = useNavigation()}) {
  const dispatch = useDispatch();
  const route = useRoute();
  const children = route.params.children;
  const location = route.params.location;
  const user = useSelector((state)=>state.activeUser.userDetails);


  const [payload, setPayload] = useState({
    parent: user.username,
    ID: user.ID,
    children: children,
    location: location,
    // startTime: new Date('April 25, 2023 18:30:00'),
    // endTime: new Date('April 25, 2023 22:30:00')
    times: {
      year: null,
      month: null,
      day: null,
      weekday: null,
      startHour: '18',
      startMinutes: '30:00',
      endHour: '22',
      endMinutes: '30:00'
    }
  })
 
  
  const availableYears = [
    {key: '1', value: 2023},
    {key: '2', value: 2024}
  ]
  // Code commented below is intended to make the date options update automatically.
  // This doesn't work, so have written validation to happen when offer is made
  const availableMonths = [
      {key: 0, value: '01', length: 31},
      {key: 1, value: '02', length: 28},
      {key: 2, value: '03', length: 31},
      {key: 3, value: '04', length: 30},
      {key: 4, value: '05', length: 31},
      {key: 5, value: '06', length: 30},
      {key: 6, value: '07', length: 31},
      {key: 7, value: '08', length: 31},
      {key: 8, value: '09', length: 30},
      {key: 9, value: '10', length: 31},
      {key: 10, value: '11', length: 30},
      {key: 11, value: '12', length: 31}
    ]
  // const availableMonths = [
  //     {key: 0, value: 'January', length: 31},
  //     {key: 1, value: 'February', length: 28},
  //     {key: 2, value: 'March', length: 31},
  //     {key: 3, value: 'April', length: 30},
  //     {key: 4, value: 'May', length: 31},
  //     {key: 5, value: 'June', length: 30},
  //     {key: 6, value: 'July', length: 31},
  //     {key: 7, value: 'August', length: 31},
  //     {key: 8, value: 'September', length: 30},
  //     {key: 9, value: 'October', length: 31},
  //     {key: 10, value: 'November', length: 30},
  //     {key: 11, value: 'December', length: 31}
  //   ]
    const availableDays = [
{key: 1, value: '01'},{key: 2, value: '02'},{key: 3, value: '03'},
{key: 4, value: '04'},{key: 5, value: '05'},{key: 6, value: '06'},
{key: 7, value: '07'},{key: 8, value: '08'},{key: 9, value: '09'},
{key: 10, value: '10'},{key: 11, value: '11'},{key: 12, value: '12'},
{key: 13, value: '13'},{key: 14, value: '14'},{key: 15, value: '15'},
{key: 16, value: '16'},{key: 17, value: '17'},{key: 18, value: '18'},
{key: 19, value: '19'},{key: 20, value: '20'},{key: 21, value: '22'},
{key: 22, value: '22'},{key: 23, value: '23'},{key: 24, value: '24'},
{key: 25, value: '25'},{key: 26, value: '26'},{key: 27, value: '27'},
{key: 28, value: '28'},{key: 29, value: '29'},{key: 30, value: '30'},
{key: 31, value: '31'}
    ]
  // const allMonths = [
  //   {key: 0, value: 'January', length: 31},
  //   {key: 1, value: 'February', length: 28},
  //   {key: 2, value: 'March', length: 31},
  //   {key: 3, value: 'April', length: 30},
  //   {key: 4, value: 'May', length: 31},
  //   {key: 5, value: 'June', length: 30},
  //   {key: 6, value: 'July', length: 31},
  //   {key: 7, value: 'August', length: 31},
  //   {key: 8, value: 'September', length: 30},
  //   {key: 9, value: 'October', length: 31},
  //   {key: 10, value: 'November', length: 30},
  //   {key: 11, value: 'December', length: 31}
  // ]
  // let availableMonths = [];
  // useEffect(()=>{
  //   // availableMonths defined as an array of months after the current date
  //   availableMonths = [];
  //   let start = date.month === currentDate.month ? currentDate.month : 0;
  //   for (let i = start; i <= 11; i++) {
  //     availableMonths.push(allMonths[i].value);
  //   }
  //   console.log('Cal; reset available months. year is', date.year, availableMonths);
  // }, [date.year, today])

  // let availableDays = [];
  // useEffect(()=>{
  //   // availableDays defined as an array of months after the current date
  //   const month = allMonths.find((month)=>month.key===date.month);
  //   let monthLength = date.month === currentDate.month ? month.length : 31;
  //   availableDays = [];
  //   let start = date.year === currentDate.year ? currentDate.day : 1;
  //   for (let i = start; i <= monthLength; i++) {
  //     availableDays.push(i);
  //   }
  //   console.log('selected month Cal', date.month)
  //   console.log('available days Cal', availableDays)
  // }, [date.month, today])

  function handleChangeDate (unit, value) {
    // console.log(unit, value);
    const newPayload = {...payload};
    // console.log(newPayload);
    payload.times[unit] = value;
    // if (unit = 'year') {
    //   newPayload.startTime.setYear(value);
    //   newPayload.endTime.setYear(value);
    // } else if (unit = 'month') {
    //   newPayload.startTime.setMonth(value);
    //   newPayload.endTime.setMonth(value);
    // } else if (unit = 'day') {
    //   newPayload.startTime.setDay(value);
    //   newPayload.endTime.setDay(value);
    // }
    setPayload(newPayload);

  }

  function handleSubmit () {
    let a = [payload.times.year, payload.times.month, payload.times.day].join('-');
    // console.log(a);
    // console.log(`${a}T${payload.times.startHour}${payload.times.startMinutes}`);
    // let b = DateTime.fromISO(`${a}T${payload.times.startHour}${payload.times.startMinutes}`);
    // let c = DateTime.fromISO(`${a}T${payload.times.endHour}${payload.times.endMinutes}`);
    // console.log(b);

    payload.startTime = DateTime.fromISO(`${a}T${payload.times.startHour}${payload.times.startMinutes}`).toLocaleString(DateTime.DATETIME_FULL);
    payload.endTime = DateTime.fromISO(`${a}T${payload.times.endHour}${payload.times.endMinutes}`).toLocaleString(DateTime.DATETIME_FULL);

    console.log(payload, 'payload in Cal');
    dispatch(sendOffer(payload));
    // navigation.navigate('BrowseOffers');
  }
  
  return (
    <View style={styles.outerContainer}>
      <HeaderWithProfile />
      <Text>Year:</Text>
      <SelectList
        setSelected={(value)=>{handleChangeDate('year', value)}}
        data={availableYears}
        save='value'
        search='false'
      />
      <Text>Month:</Text>
      <SelectList
        setSelected={(value)=>{handleChangeDate('month', value)}}
        data={availableMonths}
        save='value'
      />
      <Text>Day:</Text>
      <SelectList
        setSelected={(value)=>{handleChangeDate('day', value)}}
        data={availableDays}
        save='value'
      />
      <Button
        title='Confirm request'
        color='#9e1316'
        onPress={handleSubmit}
        />
      < Dashboard />
    </View>
  )

}