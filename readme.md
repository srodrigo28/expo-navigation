## Criando Modelo Navegação Expo

* link
```
https://www.youtube.com/watch?v=gH9Vvq6WbnA
```

* Doc
```
https://reactnavigation.org/docs/getting-started
```

### Criando projeto

* Expo Criando projeto
```
npx create-expo-app navigationapp --template
```

* Start
```
npx expo start
```

#### Dependências
* 1.
```
npm install @react-navigation/native
```

* 2.
```
npx expo install react-native-screens react-native-safe-area-context
```

#### Tabs
* 3. Tabs Navigation
```
npm install @react-navigation/bottom-tabs
```

#### Drawer
* 4. Drawer Navigation
```
npm install @react-navigation/drawer
```

* 5. Gesture-handler 
```
npx expo install react-native-gesture-handler react-native-reanimated
```

* 6. babel.config.js
```
plugins: ['react-native-reanimated/plugin'],
```

* 7. Import no App
```
import 'react-native-gesture-handler';
```

#### Stack
* 4. Stack Navigation
```
npm install @react-navigation/stack
```