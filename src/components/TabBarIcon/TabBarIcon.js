import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const TabBarIcon = ({ iconName, focused }) => {
    const activeTintLabelColor = '#386fa4'
    const inactiveTintColor = '#495057'

    return (
        <Ionicons name={iconName} size={26} color={focused ? activeTintLabelColor : inactiveTintColor }/>
    )
}

export default TabBarIcon;