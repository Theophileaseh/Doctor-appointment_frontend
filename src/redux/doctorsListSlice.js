import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_CAR_LIST = 'doctors/fetchDoctorsList';
const UPDATE_FETCH_CAR_LIST = 'doctors/updatefetchDoctorsList';

const initialState = {
  status: 'default',
  doctors: [],
  response: '',
  indexes: [],
  delay: true,
};

const optionalBody = (body) => {
  if (body === null) {
    return null;
  }
  return JSON.stringify(body);
};

const fetchAPI = async (method, endPoint, body = null) => {
  const request = await fetch(`${process.env.REACT_APP_API_PATH}${endPoint}`, {
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: optionalBody(body),
  });
  const raWresponse = await request.json();
  const { data, message } = raWresponse;
  const filteredData = data.filter((car) => car.removed === false);
  return { data: filteredData, message };
};

export const fetchDoctorsList = createAsyncThunk(FETCH_CAR_LIST, async () => {
  const response = await fetchAPI('GET', 'doctors');
  return response;
});

export const updatefetchDoctorsList = createAsyncThunk(UPDATE_FETCH_CAR_LIST, async (body) => {
  const response = await fetchAPI('POST', 'doctors/add', body);
  return response;
});

const doctorsListSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    updateIndexes: (state, action) => ({
      status: state.status,
      doctors: state.doctors,
      response: '',
      indexes: action.payload,
      delay: state.delay,
    }),
    delayShow: (state, action) => ({
      status: state.status,
      doctors: state.doctors,
      response: '',
      indexes: state.indexes,
      delay: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctorsList.fulfilled, (state, action) => ({
        status: 'ready',
        doctors: action.payload.data,
        response: '',
        indexes: state.indexes,
        delay: state.delay,
      }))
      .addCase(updatefetchDoctorsList.fulfilled, (state, action) => ({
        status: state.status,
        doctors: action.payload.data,
        response: action.payload.message,
        indexes: state.indexes,
        delay: state.delay,
      }))
      .addDefaultCase((state) => ({
        status: state.status,
        doctors: state.doctors,
        response: '',
        indexes: state.indexes,
        delay: state.delay,
      }));
  },
});

export const { updateIndexes, delayShow } = doctorsListSlice.actions;
export default doctorsListSlice;
