import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  YellowBox,
  FlatList
} from "react-native";
import PropTypes from "prop-types";
import ListView from "deprecated-react-native-listview";

export default class ModalPicker extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.state = {
      dataSource: ds.cloneWithRows(this.props.data),
      modalVisible: false
    };
    YellowBox.ignoreWarnings(["ListView is deprecated"]);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.dataSource != nextProps.dataSource) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(nextProps.data)
      });
    }
  }

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: "transparent",
          flex: 1,
          position: "absolute"
        }}
      >
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            this.setModalVisible(false);
          }}
        >
          <TouchableHighlight
            style={styles.container}
            onPress={() => this.setModalVisible(false)}
            underlayColor={"#333333cc"}
          >
            <View>
              <FlatList
                data={this.props.data}
                renderItem={({ item: { name, value } }) => (
                  <TouchableHighlight
                    underlayColor={"transparent"}
                    onPress={() => {
                      this.setModalVisible(false);
                      this.props.onValueChange(value);
                    }}
                  >
                    <Text style={styles.itemText}>{name}</Text>
                  </TouchableHighlight>
                )}
              />
            </View>
          </TouchableHighlight>
        </Modal>
      </View>
    );
  }
}

ModalPicker.propTypes = {
  data: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onValueChange: PropTypes.func,
  renderRow: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#333333cc",
    padding: 16
  },
  itemText: {
    backgroundColor: "#fff",
    padding: 16,
    fontSize: 18,
    color: "#222",
    borderTopWidth: 1,
    borderColor: "#CCC"
  }
});
