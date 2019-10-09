import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  StyleSheet,
  FlatList
} from "react-native";
import PropTypes from "prop-types";


export default class ModalPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (state.data === props.data) {
      return null;
    }

    return { data: props.data };
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
                data={this.state.data}
                keyExtractor={(_, index) => index.toString()} 
                renderItem={({ item, index }) => {
                  return (
                    <TouchableHighlight
                      underlayColor={"transparent"}
                      onPress={() => {
                        this.setModalVisible(false);
                        this.props.onValueChange(item[this.props.value], index);
                      }}
                    >
                      {this.props.renderRow ? (
                        this.props.renderRow(item, index)
                      ) : (
                        <Text style={styles.itemText}>
                          {item[this.props.label]}
                        </Text>
                      )}
                    </TouchableHighlight>
                  );
                }}
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
