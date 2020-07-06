import {handleActions} from "redux-actions";
import {GetData} from "../actions/actions";

export interface IDataState {
    collection: any;
}

const initialState: IDataState  = {
    collection: {
        items: []
    },
};


const dataReducer = handleActions(
    {
        [GetData.Success]: (state: IDataState, action: any) => {
            return {
                ...state,
                collection: action.payload,
            }
        },
    },
    initialState
);

export default dataReducer;
