import { createSlice } from "@reduxjs/toolkit";
import { fetchAllOrders } from "./fetchOrdersApi";
import { updateOrderStatus } from "./updateOrderStatusApi";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    loading: false,
    error: null,
    updatedOrder: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllOrders.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllOrders.fulfilled, (state, action) => {
        state.loading = false;
        state.orders = action.payload.orders;
        localStorage.setItem("totalOrder", action.payload.totalOrder);
      })
      .addCase(fetchAllOrders.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(updateOrderStatus.fulfilled, (state, action) => {
        const updated = action.payload.updatedOrder;
        state.orders = state.orders.map((order) =>
          order._id === updated._id ? updated : order
        );

        if (action.payload.totalDeliveredPrice) {
          localStorage.setItem("Revenue", action.payload.totalDeliveredPrice);
        }
      });
  },
});

export default orderSlice.reducer;
