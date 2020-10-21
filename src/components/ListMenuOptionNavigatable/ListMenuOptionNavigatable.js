import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Settings from '../../utils/SettingsEnum'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'stretch',
        justifyContent: 'center',
        width: '95%',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        padding: 10
    },
    text: {
        fontSize: 18,
    }
})

const ListMenuOption = ({ options, navigation }) => {
    const { t } = useTranslation()

    const navigateToMenuScreen = item => {
        switch(item) {
            case Settings.LANGUAGE: {
                navigation.navigate('LanguageScreen')
                break
            }
            case Settings.HELP: {
                navigation.navigate('HelpScreen')
                break
            }
            case Settings.ABOUT_US: {
                console.log('ABOUT US SCREEN NOT IMPLEMENTED YET')
                break
            }
            default: {
                throw new Error('Setting does not exist')
            }
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={options}
                keyExtractor={x => String(x)}
                renderItem={({ item }) => 
                    <TouchableOpacity style={styles.container} onPress={() => navigateToMenuScreen(item)}>
                        <Text style={styles.text}>{t(item)}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    )
}

export default ListMenuOption;