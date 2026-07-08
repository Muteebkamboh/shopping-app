import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {fetchProductsApi, fetchProductByIdApi} from '../../api/productApi';

export const fetchProducts = createAsyncThunk(
  'products/fetchproducts',
  async () => {
    const response = await fetchProductsApi();
    return response;
  }
);

export const fetchProductsById = createAsyncThunk(
  'products/fetchproductById',
  async (id) => {
    const response = await fetchProductByIdApi(id);
    return response;
  }
);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    products: [],
    product: null,
    loading: false,
    error: null
  },
  reducers: {
    clearProduct: (state) => {
      state.product = null
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })

    .addCase(fetchProductsById.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchProductsById.fulfilled, (state, action) => {
      state.loading = false;
      state.product = action.payload;
    })
    .addCase(fetchProductsById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
  }
});

export const {clearProduct} = productSlice.actions;

export const selectAllProducts = (state) => state.products.products;
export const selectSingleProduct = (state) => state.products.product;
export const selectProductsLoading = (state) => state.products.loading;
export const selectProductsError = (state) => state.products.error;

export default productSlice.reducer;

