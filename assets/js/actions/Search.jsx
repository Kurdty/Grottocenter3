export const START_SEARCH = 'START_SEARCH';
export const LOAD_CAVE_SUCCESS = 'LOAD_CAVE_SUCCESS';
export const LOAD_ENTRY_SUCCESS = 'LOAD_ENTRY_SUCCESS';
export const LOAD_GROTTO_SUCCESS = 'LOAD_GROTTO_SUCCESS';
export const SHOW_MARKER = 'SHOW_MARKER';

export const startSearch = (value) => {
  return {
    type: START_SEARCH,
    value: value
  };
};

export const loadCaveSuccess = (data) => {
  return {
    type: LOAD_CAVE_SUCCESS,
    data: data
  };
};

export const loadEntrySuccess = (data) => {
  return {
    type: LOAD_ENTRY_SUCCESS,
    data: data
  };
};

export const loadGrottoSuccess = (data) => {
  return {
    type: LOAD_GROTTO_SUCCESS,
    data: data
  };
};

export const showMarker = (entry) => {
  return {
    type: SHOW_MARKER,
    entry: entry
  };
};
