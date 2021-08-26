import { createSlice,createAction } from '@reduxjs/toolkit';

export const setCustomerError = createAction("setCustomerError");
export const newCustomerError = createAction("newCustomerError");
export const editCustomerError = createAction("editCustomerError");
export const deleteCustomerError = createAction("deleteCustomerError");

const CustomerSlice = createSlice({
  name: "customers",
  // initialState: initialCustomers,
  initialState: {
    customers: [],
    status: "idle",
  },
  reducers: {
    setCustomers: (state, action) => {
      return { ...state, customers: [...action.payload.user] };
    },

    newCustomer: (state, action) => {
      state.customers.push(action.payload);
    },

    deleteCustomer: (state, action) => {
      const customers = state.customers.filter((customer) => customer.id !== action.payload.id);
      return { ...state, customers: [...customers] };
    },

    editCustomer: (state, action) => {
      const newCustomer = action.payload;
      const customerIndex = state.customers.findIndex((customer) => customer.id === newCustomer.id);

      if (customerIndex >= 0) {
        state.customers[customerIndex] = newCustomer;
      }
    },
  },
});

const { reducer, actions } = CustomerSlice;
export const { setCustomers, newCustomer, deleteCustomer, editCustomer } = actions;
export default reducer;