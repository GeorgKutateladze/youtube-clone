import {ActionsObservable, ofType} from "redux-observable";
import {Action} from "redux-actions";
import {map, switchMap} from "rxjs/operators";
import {GetData} from "../actions/actions";
import {getData} from "../services/services";

export const GetDataEffect$ = (actions$: ActionsObservable<Action<string>>) =>
    actions$.pipe(
        ofType(GetData.Pending),
        switchMap((action) => {
            return getData(action.payload).pipe(
                map((data: any) => {
                    return {
                        type: GetData.Success,
                        payload: data
                    }
                })
            )
        })
    );


