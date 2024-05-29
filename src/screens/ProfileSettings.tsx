import React, {useState} from 'react';
import {Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

// Assuming these are your navigation component imports
import {
    DataAndSecuritySettingsNavigation,
    OverlaySettingsNavigation,
    UserSettingsNavigation
} from '../types/NavigationObjects';
import Ionicons from "@expo/vector-icons/Ionicons";
import SettingButtons from "../components/SettingButtons";

const ProfileSettings = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [SelectedComponent, setSelectedComponent] = useState<React.ComponentType | null>(null);
    const [closeModalIconSize, setCloseModalIconSize] = useState(40);

    const openModal = (Component: React.ComponentType) => {
        setSelectedComponent(() => Component);
        setModalVisible(true);
    };

    const closeModal = () => {
        setSelectedComponent(null);
        setModalVisible(false);
    };

    const onPressInHandler = () => {
        setCloseModalIconSize(35);
    };

    // Funktion, um den Stil beim Loslassen zurückzusetzen
    const onPressOutHandler = () => {
        setCloseModalIconSize(40);
    };


    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.innerContainer}>
                    <View style={styles.settingContainer}>
                        <View style={styles.appSettings}>
                            <View style={styles.settingTitleContainer}>
                                <Text style={styles.settingTitle}>App Settings</Text>
                            </View>
                            <View style={styles.settingButton}>
                                {OverlaySettingsNavigation.map((item, index) => (
                                    // <TouchableOpacity key={index} onPress={() => openModal(item.component)}>
                                    //     <Text style={styles.itemText}>{item.options.title}</Text>
                                    // </TouchableOpacity>
                                    <SettingButtons key={item.name} item={item}
                                                    onPress={() => openModal(item.component)}/>
                                ))}
                            </View>
                        </View>
                        <View style={styles.dataAndSecuritySettings}>
                            <View style={styles.settingTitleContainer}>
                                <Text style={styles.settingTitle}>Daten uns Sicherheit</Text>
                            </View>
                            <View style={styles.settingButton}>
                                {DataAndSecuritySettingsNavigation.map((item, index) => (
                                    <SettingButtons key={item.name} item={item}
                                                    onPress={() => openModal(item.component)}/>
                                ))}
                            </View>
                        </View>
                        <View style={styles.userSettings}>
                            <View style={styles.settingTitleContainer}>
                                <Text style={styles.settingTitle}>User Settings</Text>
                            </View>
                            <View style={styles.settingButton}>
                                {UserSettingsNavigation.map((item, index) => (
                                    <SettingButtons key={item.name} item={item}
                                                    onPress={() => openModal(item.component)}/>
                                ))}
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
            {SelectedComponent && (
                <Modal
                    visible={modalVisible}
                    onRequestClose={closeModal}
                    animationType="slide"
                    transparent={true}
                >
                    <View style={styles.topBar}>
                        <TouchableOpacity
                            onPressIn={onPressInHandler}
                            onPressOut={onPressOutHandler}
                            onPress={() => setModalVisible(!modalVisible)}
                            style={styles.closeButton}
                        >
                            <Ionicons
                                style={styles.closeModalIcon}
                                name={"close"}
                                size={closeModalIconSize}
                            />
                        </TouchableOpacity>
                    </View>
                    <SelectedComponent/>
                </Modal>
            )}
        </View>
    );
}

export default ProfileSettings;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#161616',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    innerContainer: {
        marginTop: '20%'
    },
    itemText: {
        color: 'white',
        marginBottom: 10,
    },
    modalContent: {
        marginTop: 50,
        backgroundColor: 'white',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    closeButtonText: {
        color: 'blue',
        marginTop: 20,
    },
    topBar: {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",
        marginBottom: 15
    },
    closeModalIcon: {
        color: 'white'
    },
    closeButton: {
        padding: 10,
    },
    settingTitleContainer: {
        justifyContent: 'flex-start',
        width: '100%',
        paddingHorizontal: '5%',
    },
    settingTitle: {
        color: 'white',
        fontSize: 20
    },
    settingContainer: {},
    settingButton: {
        marginTop: '10%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '20%'
    },
    appSettings: {},
    dataAndSecuritySettings: {
        marginVertical: '12%'
    },
    userSettings: {}
});
