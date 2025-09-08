import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTopFurniture, getBestSales } from "../data/products";

export const getProducts = createAsyncThunk(
  "product/getProducts",
  async (_, thunkAPI) => {
    try {
      // Simulate async operation for consistency with existing code
      await new Promise((resolve) => setTimeout(resolve, 100));
      return getTopFurniture();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

export const Bestsales = createAsyncThunk(
  "product/Bestsales",
  async (_, thunkAPI) => {
    try {
      // Simulate async operation for consistency with existing code
      await new Promise((resolve) => setTimeout(resolve, 100));
      return getBestSales();
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: null,
    bestsales: null,
    productData: [],
    userInfo: null,
  },
  reducers: {
    addtoCart: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.productData.push(action.payload);
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.id !== action.payload
      );
    },
    resetcart: (state) => {
      state.productData = [];
    },
    increamentQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity++;
      }
    },
    DecrementtQuantity: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    //user
    adduser: (state, action) => {
      state.userInfo = action.payload;
    },
    deleteuser: (state) => {
      state.userInfo = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {})
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProducts.rejected, (state, action) => {})
      //best
      .addCase(Bestsales.pending, (state, action) => {})
      .addCase(Bestsales.fulfilled, (state, action) => {
        state.bestsales = action.payload;
      })
      .addCase(Bestsales.rejected, (state, action) => {});
  },
});
export const {
  addtoCart,
  deleteItem,
  resetcart,
  DecrementtQuantity,
  increamentQuantity,
  adduser,
  deleteuser,
} = productSlice.actions;
export default productSlice.reducer;
