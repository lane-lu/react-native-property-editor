import * as React from 'react';

import { Button, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import PropertyEditor from 'react-native-property-editor';

type RootStackParamList = {
  'Home': undefined;
  'Set Property': undefined;
  'Get Property': undefined;
};

type Props = NativeStackScreenProps<RootStackParamList>;

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  React.useEffect(() => {
    console.log('React.useEffect');
  }, []);

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'Welcome' }}
          />
          <Stack.Screen name="Set Property" component={SetPropertyScreen} />
          <Stack.Screen name="Get Property" component={GetPropertyScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const HomeScreen = ({ navigation }: Props) => {
  return (
    <>
      <Button
        title="Set Property"
        onPress={() => navigation.navigate('Set Property')}
      />
      <Button
        title="Get Property"
        onPress={() => navigation.navigate('Get Property')}
      />
    </>
  );
};

const SetPropertyScreen = () => {
  const [text, setText] = React.useState<string | undefined>();

  React.useEffect(() => {
    console.log('SetPropertyScreen');
    PropertyEditor.getString('text').then(setText);
  }, []);

  return (
    <>
      <Text>Input Property Value:</Text>
      <TextInput
        placeholder="Type text here"
        onChangeText={(newText) => setText(newText)}
        defaultValue={text}
      />
      <Button
        title="Save"
        onPress={() => PropertyEditor.setString('text', text ? text! : 'n/a')}
      />
    </>
  );
};

const GetPropertyScreen = () => {
  const [text, setText] = React.useState<string | undefined>();

  React.useEffect(() => {
    console.log('GetPropertyScreen');
    PropertyEditor.getString('text').then(setText);
  }, []);

  return (
    <>
      <Text>Property Value:</Text>
      <Text>{text}</Text>
    </>
  );
};
