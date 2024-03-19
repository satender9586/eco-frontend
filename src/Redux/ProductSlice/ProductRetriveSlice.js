import { createSlice, createAsyncThunk} from "@reduxjs/toolkit"
import axiosconfg from "../../../confitg/axiosconfig.js"



const initialState = {
    products: [],
    status: 'idle',
    error: null,
  };

  export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
      const response = await axiosconfg.get('/product/products');
      return response.data;
    },
   
  );

  fetchProducts()
  
  const ProductRetriveSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchProducts.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.products = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    },
});


export default ProductRetriveSlice.reducer;