import {createActions} from 'redux-actions';

export enum GetData {
    Pending = '[Pending] Get Data',
    Success = '[Success] Get Data'
}

export const dataActions = createActions({
    [GetData.Pending]: (payload: string) => payload,
    [GetData.Success]: (payload: any) => payload,
});

