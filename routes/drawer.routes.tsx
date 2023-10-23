import { createDrawerNavigator } from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';

import TabRoutes from './tabs.routes';
import StackRoutes from './stack.routes';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return(
        <Drawer.Navigator screenOptions={ { title: '' }}>
            <Drawer.Screen 
                name='feed'
                component={StackRoutes}
                options={{
                    drawerIcon: ( {color, size }) => <Feather name='user' color={color} size={size} />,
                    drawerLabel: 'Usuário',
                }}
            />

            <Drawer.Screen 
                name='profile'
                component={TabRoutes}
                options={{
                    drawerIcon: ( {color, size }) => <Feather name='home' color={color} size={size} />,
                    drawerLabel: 'Início2',
                }}
            />
        </Drawer.Navigator>
    )
}