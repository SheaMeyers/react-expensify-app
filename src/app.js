import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import getVisibleExpenses from './selectors/expenses';
import { addExpense } from './actions/expenses';
import { secondsInAMonth,
         secondsInTwoMonths, 
         secondsInAWeek} from './constants';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500, createdAt: (moment().valueOf() - secondsInAMonth)}));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: moment().valueOf()}));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: (moment().valueOf() - secondsInAWeek)}));
store.dispatch(addExpense({ description: 'Heating bill', amount: 5500, createdAt: (moment().valueOf() - secondsInTwoMonths)}));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
