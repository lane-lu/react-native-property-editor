import * as React from 'react';

import { Button, Text, TextInput, Switch } from 'react-native';
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
  const [textValue, setTextValue] = React.useState<string | undefined>();
  const [numValue, setNumValue] = React.useState<number>(0);
  const [boolValue, setBoolValue] = React.useState<boolean>(false);

  React.useEffect(() => {
    console.log('SetPropertyScreen');
    PropertyEditor.getString('text', 'n/a').then(setTextValue);
    PropertyEditor.getNumber('num', 0).then(setNumValue);
    PropertyEditor.getBoolean('bool', false).then(setBoolValue);
  }, []);

  return (
    <>
      <Text>Input Property Value:</Text>
      <TextInput
        placeholder="Type text here"
        onChangeText={(newText: string) => setTextValue(newText)}
        defaultValue={textValue}
      />
      <TextInput
        placeholder="Input number here"
        keyboardType="numeric"
        onChangeText={(newNum: string) => setNumValue(+newNum)}
        defaultValue={numValue.toString()}
      />
      <Switch value={boolValue} onValueChange={setBoolValue} />
      <Button
        title="Save"
        onPress={() => {
          PropertyEditor.setString('text', textValue ? textValue! : 'n/a');
          PropertyEditor.setNumber('num', numValue);
          PropertyEditor.setBoolean('bool', boolValue);
        }}
      />
    </>
  );
};

const GetPropertyScreen = () => {
  const [textValue, setTextValue] = React.useState<string | undefined>();
  const [numValue, setNumValue] = React.useState<number>(0);
  const [boolValue, setBoolValue] = React.useState<boolean>(false);

  React.useEffect(() => {
    console.log('GetPropertyScreen');
    PropertyEditor.getString('text', 'n/a').then(setTextValue);
    PropertyEditor.getNumber('num', 0).then(setNumValue);
    PropertyEditor.getBoolean('bool', false).then(setBoolValue);
  }, []);

  return (
    <>
      <Text>Property Value:</Text>
      <Text>text: {textValue}</Text>
      <Text>num: {numValue.toString()}</Text>
      <Text>bool: {boolValue.toString()}</Text>
    </>
  );
};
