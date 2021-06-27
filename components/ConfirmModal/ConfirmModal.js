import React from 'react';

import { Modal, Text, StyleSheet, TouchableOpacity, View, Pressable, Alert } from 'react-native';

const ConfirmModal = ({ modalVisible, title, text, setModalVisible, handleDeleteItem }) => {
  return (
    <View style={styles.centeredView}>
      <Modal animationType='slide' transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity>
              <Text></Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>{title}</Text>
            <Text style={styles.modalText}>{text}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={[styles.button, styles.buttonConfirm]} onPress={handleDeleteItem}>
                <Text style={styles.textStyle}>Confirmar</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.buttonCancel]} onPress={() => setModalVisible(false)}>
                <Text style={styles.textStyle}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  button: {
    margin: 10,
    borderRadius: 15,
    padding: 10,
    elevation: 4,
  },
  buttonConfirm: {
    backgroundColor: '#88C425',
  },
  buttonCancel: {
    backgroundColor: '#CAD7B2',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: 18,
    textTransform: 'capitalize',
    marginBottom: 15,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ConfirmModal;
