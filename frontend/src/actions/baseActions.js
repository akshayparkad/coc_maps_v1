import axios from "axios"
import { BASE_LIST_REQUEST, BASE_LIST_SUCCESS, BASE_LIST_FAIL } from "../constants/baseConstants"

export const listBases = () => async (dispatch) => {
    try {

        dispatch({ type: BASE_LIST_REQUEST })

        const { data } = await axios.get('/api/bases/')

        dispatch({
            type: BASE_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {

        dispatch({
            type: BASE_LIST_FAIL,
            payload: error.response && error.response.data.datail ? error.response.data.detail : error.message,
        })
    }
}

