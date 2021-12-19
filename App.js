import React from 'react';
import ContextProvider from './src/configs/context'
import TabNavigations from './src/configs/tab-navigations'

export default function App() {
  return (
    <ContextProvider>
      <TabNavigations />
    </ContextProvider>
  );
}
