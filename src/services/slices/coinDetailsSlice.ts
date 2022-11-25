import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { SingleCoinDetailsData } from "../../components/App/types";
import { FETCH_STATE } from "../constants";
import { API } from "aws-amplify";

export const fetchCoinDetails = createAsyncThunk(
    "coinDetailsSlice/coinDetails",
    async (id: string) => {
        try {
            const params = {
                queryStringParameters: {
                    id,
                },
            };
            const response = await API.get("cryptoApi", "/coinDetails", params);
            return response.body.data.coin;
        } catch (err) {
            return err;
        }
    }
);

type EmptyObject = Record<any, never>;

interface InitialState {
    coinDetails: SingleCoinDetailsData | EmptyObject;
    coinDetailsStatus: string;
    error: string;
}

const initialState: InitialState = {
    coinDetailsStatus: "",
    error: "",
    coinDetails: {},
};

export const coinDetailsSlice = createSlice({
    name: "coinDetails",
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchCoinDetails.pending, (state) => {
                state.coinDetailsStatus = FETCH_STATE.loading;
            })
            .addCase(fetchCoinDetails.fulfilled, (state, action) => {
                state.coinDetailsStatus = FETCH_STATE.fulfilled;
                state.coinDetails = action.payload;
            })
            .addCase(fetchCoinDetails.rejected, (state, action) => {
                state.coinDetailsStatus = FETCH_STATE.failed;
                state.error = action.error.message!;
            });
    },
});
