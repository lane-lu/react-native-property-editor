# react-native-property-editor

If you have a small collection of key-values that you'd like to save, you can use the `UserDefaults` (on iOS) or `SharedPreferences` (on Android) APIs. A `UserDefaults` / `SharedPreferences` object points to a file containing key-value pairs and provides simple methods to read and write them. 

## Installation

```
npm install react-native-property-editor
# or 
yarn add react-native-property-editor

# Link for iOS
cd ios && pod install
```

## Usage

```
import PropertyEditor from 'react-native-property-editor';

// ...

const [text, setText] = React.useState<string | undefined>();

PropertyEditor.getString('prop-key', 'default-value').then(setText);

// ...

<Button
  title="Set Value"
  onPress={() => PropertyEditor.setString('prop-key', 'new-value')}
/>

```

## Methods

| Callback Name | Description | Parameters |
| --- | --- | --- |
| setContextName | Set context name (Has no effect on iOS) | contextName: string |
| getNumber | Get number value | key: string, defauleValue: number |
| setNumber | Set number value | key: string, value: number |
| getString | Get string value | key: string, defaultValue: string |
| setString | Set string value | key: string, value: string |
| getBoolean | Get boolean value | key: string, defaultValue: bool |
| setBoolean | Set boolean value | key: string, value: bool |

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
