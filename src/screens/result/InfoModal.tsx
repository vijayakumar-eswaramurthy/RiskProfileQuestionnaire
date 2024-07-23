import React, { useEffect, useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import TextGlobal from '../../components/ui/TextGlobal';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';

type InfoModalProps = {
  isVisible: boolean,
  hideModal: any
}

const InfoModal = ({ isVisible, hideModal }: InfoModalProps) => {

  return (
    <View>
      {/* Modal Dialog */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isVisible}
        onRequestClose={() => hideModal()}
      >
        <View style={styles.modalView}>
          <View>
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => hideModal()}
            >
              <TextGlobal variant="headlineSmall">{' X '}</TextGlobal>
            </TouchableOpacity>
          </View>
          <View>
            <View style={{ marginBottom: 15 }}>
              <TextGlobal variant="headlineSmall">{'Risk Level 1: Low'}</TextGlobal>
              <TextGlobal variant="labelLarge">{'You can accept small returns of your investments with low risk exposure and price fluctuation'}</TextGlobal>
            </View>
            <View style={{ marginBottom: 15 }}>
              <TextGlobal variant="headlineSmall">{'Risk Level 2: Low to Medium'}</TextGlobal>
              <TextGlobal variant="labelLarge">{'You can accept some returns of your investments with low to medium risk exposure and price fluctuation.'}</TextGlobal>
            </View>
            <View style={{ marginBottom: 15 }}>
              <TextGlobal variant="headlineSmall">{'Risk Level 4: Medium to High'}</TextGlobal>
              <TextGlobal variant="labelLarge">{'You can accept growth of capital with high risk exposure and price fluctuation.'}</TextGlobal>
            </View>
            <View style={{ marginBottom: 15 }}>
              <TextGlobal variant="headlineSmall">{'Risk Level 5: High'}</TextGlobal>
              <TextGlobal variant="labelLarge">{'You can accept high growth of capital with higher risk exposure and significant price fluctuation'}</TextGlobal>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    position: 'absolute',
    bottom: 100
  },
  closeButton: {
    alignSelf: 'flex-end',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    marginRight: -150
  },
});

export default InfoModal;
