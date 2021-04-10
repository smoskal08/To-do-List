import React from 'react';
import Todo from 'components/organisms/Todo/Todo';
import GlobalStyle from 'layouts/globalStyles';
import { Provider } from 'react-redux';
import store from 'store';

const Root = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Todo />
  </Provider>
);

export default Root;
