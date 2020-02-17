import React from 'react';
import {Data} from '../../../pages/types/page.types';

export const GlobalConfigContext = React.createContext({} as Data | undefined);
export const GlobalConfigProvider = GlobalConfigContext.Provider;
export const GlobalConfigConsumer = GlobalConfigContext.Consumer;