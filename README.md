# react-native-simple-modal-picker

Easy to use and fully customized modal picker for both iOS and Android. Have same look and feel in both plateform.

## Installation

`$ npm install react-native-simple-modal-picker --save`

### Properties

| Prop | DataType | Description | IsRequired |
|---|---|---|---|
|**`data`**|Array| Data in json format | true |
|**`value`**|String|Name of field which you want tobe return on selection from array | true |
|**`label`**|String|Name of field which you want tobe shown in list of selection | true |
|**`onValueChange`**|function(value)|Will be called on item selection and get value as a argument| true |
|**`renderRow`**|function(rowData)|Custom component for render row and get row data as a argument| false |

## Usage

For simple modal picker example

```js
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity} from 'react-native';
import Picker from 'react-native-simple-modal-picker';

export default class Example extends Component {
  constructor(props){
    super(props)
    this.state={
      selectedIndex: 0
    }
    this.data=[
      {
        name:'Option 1',
        value: '1'
      },
      {
        name:'Option 2',
        value: '2'
      },
      {
        name:'Option 3',
        value: '3'
      },
      {
        name:'Option 4',
        value: '4'
      },
      {
        name:'Option 5',
        value: '5'
      }
    ]
  }

  render() {
    return (
      <View style={styles.container}>
        {this.simplePickerView()}
        {this.customRowPickerView()}
        {this.dropDownView()}
      </View>
    );
  }

  simplePickerView(){
    return(
      <View>
        <Picker 
          ref={instance => this.simplePicker = instance} 
          data={this.data} 
          label={'name'} 
          value={'value'}
          onValueChange={(value) => alert(value + ' selected')} />

        <View style={styles.subContainer}>
          <Button 
            title={'Open Simple Picker'} 
            onPress={() => this.simplePicker.setModalVisible(true)} />
        </View>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  subContainer:{
    margin: 8
  },
  rowStyle:{
    backgroundColor: '#FFF',
    color: '#333',
    padding: 8,
    fontSize: 20
  },
  dropDownContainer:{
    borderBottomWidth: 1,
    padding: 8
  },
  dropDownText:{
    fontSize: 20,
    margin: 8
  }
});

```

#### Simple Modal Picker

```js

<Picker 
  ref={instance => this.simplePicker = instance} 
  data={this.data} 
  label={'name'} 
  value={'value'}
  onValueChange={(value) => alert(value + ' selected')} />

```

![Simple](https://github.com/binbytes/react-native-simple-modal-picker/blob/master/screenshot/simple.gif)

#### Modal Picker with Custom Row

```js

<Picker 
  ref={instance => this.customRowPicker = instance} 
  data={this.data} 
  label={'name'} 
  value={'value'}
  onValueChange={(value) => alert(value + ' selected')}
  renderRow={(rowData) => <Text style={styles.rowStyle}>{rowData.name}</Text>} />

```

![Custom](https://github.com/binbytes/react-native-simple-modal-picker/blob/master/screenshot/custom.gif)

#### DropDown View

```js

<View>
  <Picker 
    ref={instance => this.dropDownPicker = instance} 
    data={this.data} 
    label={'name'} 
    value={'value'}
    onValueChange={(value, selectedIndex) => this.setState({selectedIndex})} />
  <View style={styles.subContainer}>
    <TouchableOpacity style={styles.dropDownContainer} onPress={() => this.dropDownPicker.setModalVisible(true)}>
      <Text style={styles.dropDownText}>{this.data[this.state.selectedIndex].name}</Text>
    </TouchableOpacity>
  </View>
</View>

```

![DropDown](https://github.com/binbytes/react-native-simple-modal-picker/blob/master/screenshot/dropdown.gif)
