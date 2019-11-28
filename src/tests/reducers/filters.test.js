import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' })
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' })
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should setup text to test', () => {
    const text = 'test';
    const action = { type: 'SET_TEXT_FILTER', text: text };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('should setup startDate to beginning of month', () => {
    const startDate = moment();
    const action = { type: 'SET_START_DATE', startDate: startDate };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(startDate);
});

test('should setup endDate to end of month', () => {
    const endDate = moment();
    const action = { type: 'SET_END_DATE', endDate: endDate };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(endDate);
});