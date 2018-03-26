import {dynamicNumbersUrl} from '../conf/Config';
import {get} from '../conf/API';

export const INIT_DYNNB_FETCHER = 'INIT_DYNNB_FETCHER';
export const FETCH_DYNNB = 'FETCH_DYNNB';
export const FETCH_DYNNB_SUCCESS = 'FETCH_DYNNB_SUCCESS';
export const FETCH_DYNNB_FAILURE = 'FETCH_DYNNB_FAILURE';
export const LOAD_DYNNB = 'LOAD_DYNNB';

export const initDynamicNumberFetcher = (numberType) => {
  return {
    type: INIT_DYNNB_FETCHER,
    numberType: numberType
  };
};

export const fetchDynamicNumber = (numberType) => {
  return {
    type: FETCH_DYNNB,
    numberType: numberType
  };
};

export const fetchDynamicNumberSuccess = (numberType, number) => {
  return {
    type: FETCH_DYNNB_SUCCESS,
    numberType: numberType,
    number: number
  };
};

export const fetchDynamicNumberFailure = (numberType, error) => {
  return {
    type: FETCH_DYNNB_FAILURE,
    numberType: numberType,
    error: error
  };
};

export function loadDynamicNumber(numberType) {
  return function (dispatch) {
    dispatch(initDynamicNumberFetcher(numberType));
    dispatch(fetchDynamicNumber(numberType));

    return get(dynamicNumbersUrl[numberType],
      undefined,
      (text) => dispatch(fetchDynamicNumberSuccess(numberType, text)),
      (error) => dispatch(fetchDynamicNumberFailure(numberType, error))
    );
  };
}
