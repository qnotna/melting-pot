import React from 'react';
import ContentView from '../components/ContentView';
import ReaderView from '../components/ReaderView.js';
import SettingsView from '../components/settings/SettingsView.js';

export const Routes = [
    {
        path: "/",
        component: () => <ContentView/>
    },
    {
        path: "/business",
        component: () => <ContentView/>
    },
    {
        path: "/entertainment",
        component: () => <ContentView/>
    },
    {
        path: "/health",
        component: () => <ContentView/>
    },
    {
        path: "/science",
        component: () => <ContentView/>
    },
    {
        path: "/sportz",
        component: () => <ContentView/>
    },
    {
        path: "/technology",
        component: () => <ContentView/>
    },
    {
        path: "/melting hot",
        component: () => <ContentView/>
    },
    {
        path: "/search-results",
        component: () => <ContentView/>
    },
    {
        path: "/settings",
        component: () => <SettingsView/>
    },
    {
        path: "/reader-view",
        component: () => <ReaderView/>
    }
];