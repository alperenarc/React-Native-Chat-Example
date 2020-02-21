import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ChatScreen from './screens/ChatScreen'
import LoginScreen from './screens/LoginScreen'


const MainNavigator = createStackNavigator({
    Login: { screen: LoginScreen },
    Chat: { screen: ChatScreen }
},
    {
        headerMode: "none"
        /* defaultNavigationOptions: {
             headerStyle: {
                 backgroundColor: '#DADADA',
                 elevation: 0,
                 shadowOpacity: 0
             },
             headerTintColor: '#ca375e',
             headerTitleStyle: {
                 fontWeight: 'bold',
                 color: '#161616'
             }*/
    }
    
);

const App = createAppContainer(MainNavigator); // For setting Navigation Stack

export default App;