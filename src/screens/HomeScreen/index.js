import React, {useState} from 'react';
import {Text, View, StatusBar, FlatList, TouchableOpacity, Image} from 'react-native';
import HeaderComponent from '../../components/HeaderComponent/index';
import LinearGradient from 'react-native-linear-gradient';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';
import {BoxShadow} from 'react-native-shadow'
import styles from './styles';

function HomeScreen() {
  const [data, setData] = useState([
    {
      id: 1,
      taskDescription: 'Design mobile app to-do list',
      from: '10 pm',
      to: '3 pm'
    },
    {
      id: 2,
      taskDescription: 'Design mobile app to-do list',
      from: '10 pm',
      to: '3 pm'
    },

    {
      id: 3,
      taskDescription: 'Design mobile app to-do list',
      from: '10 pm',
      to: '3 pm'
    },

    {
      id: 4,
      taskDescription: 'Design mobile app to-do list',
      from: '10 pm',
      to: '3 pm'
    },

    {
      id: 5,
      taskDescription: 'Design mobile app to-do list',
      from: '10 pm',
      to: '3 pm'
    },
    {
      id: 6,
      taskDescription: 'Design mobile app to-do list',
      from: '10 pm',
      to: '3 pm'
    },
    {
      id: 7,
      taskDescription: 'Design mobile app to-do list',
      from: '10 pm',
      to: '3 pm'
    },
    {
      id: 8,
      taskDescription: 'Design mobile app to-do list',
      from: '10 pm',
      to: '3 pm'
    },
  ])
  const renderHomeHeader = () => {
    return (
      <View style={styles.homeHeaderStyleView}>
        <View>
          <Text style={styles.nameStyle}>Hey Kevin!</Text>
          <Text style={styles.dateStyle}>Oct 21st, 2020</Text>
        </View>

        <View style={styles.monthTextView}>
          <Text style={styles.monthTextStyle}>October</Text>
        </View>
      </View>
    );
  };

  const renderTaskListHeading = () => {
    return (
      <View style={styles.todaysTaskView}>
        <Text style={styles.todaysTaskStyle}>Your Tasks</Text>
      </View>
    );
  };

  const renderTaskList = ({item}) => {
    const shadowOpt = {
      width:280,
      height:80,
      color:"#fb3f56",
      border:0,
      radius:10,
      opacity:0.06,
      x:3,
      y:3,
      style:{marginVertical:2}
    }
    return (
      <BoxShadow setting={shadowOpt}>
        <TouchableOpacity style={styles.elementView}>
          <LinearGradient
            colors={['#fb4444', '#fb4444', '#cc342c']}

            style={styles.listElementView}>
            <Text style={styles.listElementStyle}>
              {item.taskDescription}
            </Text>

            <Text style={styles.timeStyle}>
             {item.from} - {item.to}
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        </BoxShadow>
    );
  };

  const _renderList = () => {
    return(
      <FlatList
      style={{}}
        data={data}
        renderItem={renderTaskList}
        keyExtractor={(item, index) => index.toString()}
      />
    )
  }


  return (
    <>
      <HeaderComponent />
      <StatusBar backgroundColor="#fb4444" />
      {renderHomeHeader()}
      {renderTaskListHeading()}
      {_renderList()}
    </>
  );
}

export default HomeScreen;
