import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Languages from '../utils/LanguagesEnum'
import i18n from 'i18next'

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
        // paddingBottom: 10,
    }
})

const ListMenuOptionSelectable = ({ options }) => {
    const { t } = useTranslation()
    
    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    const selectMenuOption = item => {
        switch(item) {
            case Languages.ENGLISH: {
                changeLanguage('en')
                break
            }
            case Languages.SPANISH: {
                changeLanguage('es')
                break
            }
            default: {
                throw new Error(`Language ${item} does not exist`)
            }
        }
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={options}
                keyExtractor={x => String(x)}
                renderItem={({ item }) => 
                    <TouchableOpacity style={styles.container} onPress={() => selectMenuOption(item)}>
                        <Text style={styles.text}>{t(item)}</Text>
                    </TouchableOpacity>
                }
            />
        </View>
    )
}

export default ListMenuOptionSelectable;