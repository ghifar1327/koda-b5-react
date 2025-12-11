import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export const addProductThunk = createAsyncThunk(
  "product/addProductThunk",
  async (payload, { rejectWithValue }) => {
    try {
      await new Promise((res) => setTimeout(res, 1000));
      return payload; 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteProductThunk = createAsyncThunk(
  "product/deleteProductThunk",
  async (id, { rejectWithValue }) => {
    try {
      await new Promise((res) => setTimeout(res, 1e3));
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editProductThunk = createAsyncThunk(
  "product/editProductThunk",
  async ({ id, updatedProduct }, { rejectWithValue }) => {
    try {
      await new Promise((res) => setTimeout(res, 1e3));
      return { id, updatedProduct };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  products: [],
  nextId: 1,

  fetchStatus: {
    add: { isLoading: false, isSuccess: false, isFailed: false },
    delete: { isLoading: false, isSuccess: false, isFailed: false },
    edit: { isLoading: false, isSuccess: false, isFailed: false },
  },

  errors: {
    add: null,
    delete: null,
    edit: null,
  },
};


const inputProduct = createSlice({
  name: "inputProduct",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    return builder

      .addAsyncThunk(addProductThunk, {
        pending: (state) => {
          state.fetchStatus.add.isLoading = true;
          state.fetchStatus.add.isSuccess = false;
          state.fetchStatus.add.isFailed = false;
        },
        fulfilled: (state, { payload }) => {
          state.fetchStatus.add.isLoading = false;
          state.fetchStatus.add.isSuccess = true;

          state.products.push({
            id: state.nextId,
            ...payload,
          });
          state.nextId++;
        },
        rejected: (state, { payload }) => {
          state.fetchStatus.add.isLoading = false;
          state.fetchStatus.add.isFailed = true;
          state.errors.add = payload;
        },
      })

      .addAsyncThunk(deleteProductThunk, {
        pending: (state) => {
          state.fetchStatus.delete.isLoading = true;
          state.fetchStatus.delete.isSuccess = false;
          state.fetchStatus.delete.isFailed = false;
        },
        fulfilled: (state, { payload }) => {
          state.fetchStatus.delete.isLoading = false;
          state.fetchStatus.delete.isSuccess = true;

          state.products = state.products.filter(
            (p) => p.id !== payload
          );
        },
        rejected: (state, { payload }) => {
          state.fetchStatus.delete.isLoading = false;
          state.fetchStatus.delete.isFailed = true;
          state.errors.delete = payload;
        },
      })

      .addAsyncThunk(editProductThunk, {
        pending: (state) => {
          state.fetchStatus.edit.isLoading = true;
          state.fetchStatus.edit.isSuccess = false;
          state.fetchStatus.edit.isFailed = false;
        },
        fulfilled: (state, { payload }) => {
          const { id, updatedProduct } = payload;

          state.fetchStatus.edit.isLoading = false;
          state.fetchStatus.edit.isSuccess = true;

          state.products = state.products.map((item) =>
            item.id === id ? { ...item, ...updatedProduct } : item
          );
        },
        rejected: (state, { payload }) => {
          state.fetchStatus.edit.isLoading = false;
          state.fetchStatus.edit.isFailed = true;
          state.errors.edit = payload;
        },
      });
  },
});

export const inputProductActions = {
  addProductThunk,
  deleteProductThunk,
  editProductThunk,
};

export default inputProduct.reducer;
