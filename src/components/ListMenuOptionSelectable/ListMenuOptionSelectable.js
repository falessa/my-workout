import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { setLanguage } from '../../redux/settings'
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useTranslation } from 'react-i18next';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Languages from '../../utils/LanguagesEnum'
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
        // padding: 10
    },
    optionSelected: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingRight: '75%',
        // color: '#386fa4' // when applying the color, the colored text is not displayed on android devices
    }
})

const ListMenuOptionSelectable = ({ options }) => {
    const dispatch = useDispatch();
    const settings = useSelector(store => store.settings)
    const languageStored = settings.language

    const { t } = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    const selectMenuOption = item => {
        switch (item) {
            case Languages.ENGLISH: {
                changeLanguage('en')
                dispatch(setLanguage(Languages.ENGLISH))
                break
            }
            case Languages.SPANISH: {
                changeLanguage('es')
                dispatch(setLanguage(Languages.SPANISH))
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
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={languageStored === item ? styles.optionSelected : styles.text}>{t(item)}</Text>
                            {languageStored === item
                                ? <Ionicons name='checkmark' size={22} color={'#386fa4'} />
                                : <></>
                            }
                        </View>
                    </TouchableOpacity>
                }
            />
        </View>
    )
}

export default ListMenuOptionSelectable;