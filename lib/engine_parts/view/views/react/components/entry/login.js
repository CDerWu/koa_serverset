import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from '../main/main_login.js';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { rootReducer } from '@reducers/combineapp';

import ReduxConnectedIntlProvider from '@containers/locale/reduxconnectedintlprovider';
import reduxStore from '@react/js/reduxstore';
import initialization from '@react/js/initialization';


const createStoreWithMiddleware = applyMiddleware()(createStore);


(async()=>{
    let state = await reduxStore.getInitState();
    await initialization.init();
    ReactDOM.render(
        <Provider store={createStoreWithMiddleware(rootReducer,state) }>
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
})();