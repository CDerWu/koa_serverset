
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from '../main/main_unlogin.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '@reducers/combineapp';

import ReduxConnectedIntlProvider from '@containers/locale/reduxconnectedintlprovider';
const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <ReduxConnectedIntlProvider>
            <BrowserRouter>
                <div>
                    <Main />
                </div>
            </BrowserRouter>
        </ReduxConnectedIntlProvider>
    </Provider>,
    document.getElementById('main_content')
);