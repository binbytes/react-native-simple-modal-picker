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

Here full [example](https://github.com/binbytes/react-native-simple-modal-picker/tree/master/example) of package usage

#### Simple Modal Picker

```js

<Picker 
  ref={instance => this.simplePicker = instance} 
  data={this.data} 
  label={'name'} 
  value={'value'}
  onValueChange={(value) => alert(value + ' selected')} />

```

![Simple](https://i.imgur.com/xcriwIC.gif)

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

![Custom](https://i.imgur.com/NSZ0NfW.gif)

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

![DropDown](https://i.imgur.com/rPTVTh6.gif)
