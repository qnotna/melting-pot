import React from 'react';
import SettingsModule from '../components/SettingsModule'

export const ComponentsEnum = {
    SETTINGS: "settings"
}


export const Components = {
    loadComponent(component_name){
        switch (component_name) {
            case ComponentsEnum.SETTINGS:
                return <SettingsModule/>
        
            default:
                break;
        }
    }
}