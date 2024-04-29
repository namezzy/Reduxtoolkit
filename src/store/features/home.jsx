import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios  from "axios";

export const fetchHomeMultiDataAction = createAsyncThunk("fetch/homemultidata", async () => {
    const res = await axios.get("http://123.207.32.32:8000/home/multidata")

    return res.data
    // const banners = res.data.data.banner.list
    // const recommends = res.data.data.recommend.list

})


const homeSlice = createSlice({
    name: "home",
    initialState: {
        banners: [],
        recommends: []
    },
    reducers: {
        changeBanners(state, { payload }) {
            state.banners = payload
        },

        changeRecommends(state, { payload }) {
            state.recommends = payload
        }
    },
    // extraReducers: {
    //     [fetchHomeMultiDataAction.pending](state, action) {
    //         console.log("fetchHomeMultidataAction pending")
    //     },
    //     [fetchHomeMultiDataAction.fulfilled](state, action) {
    //         console.log("fetchHomeMultidataAction fulfilled")
    //     },
    //     [fetchHomeMultiDataAction.rejected](state, action) {
    //         console.log("fetchHomeMultidataAction rejected")
    //     }
    // }

    extraReducers: (builder) => {
        builder.addCase(fetchHomeMultiDataAction.pending, (state, action) => {
          console.log("fetchHomeMultidataAction pending");
          // 可以在这里修改 state 以反映加载状态
        });
        builder.addCase(fetchHomeMultiDataAction.fulfilled, (state, {payload}) => {
            state.banners = payload.data.banner.list
            state.recommends = payload.data.recommend.list

          console.log("fetchHomeMultidataAction fulfilled");
          // 在这里处理 action 携带的数据，更新 state
        });
        builder.addCase(fetchHomeMultiDataAction.rejected, (state, action) => {
          console.log("fetchHomeMultidataAction rejected");
          // 在这里处理错误状态，可能需要更新 state 来显示错误信息或其他
        });
      }
})


export const { changeBanners, changeRecommends } = homeSlice.actions

export default homeSlice.reducer