import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../screens/Profile';

const Stack = createStackNavigator();

export default function StackRoutes(){
    return(
        <Stack.Navigator screenOptions={ { headerShown: false }}>
            <Stack.Screen 
                name='home'
                component={Profile}
            />
        </Stack.Navigator>
    )
}