import Axios from "axios-observable";
import {map} from "rxjs/operators";

export const getData = (input: string) => {
    const url = 'https://www.googleapis.com/youtube/v3/search';
    const key = 'AIzaSyCLvtN50N7Gnqz5-LcVFX5Yv6g1qAC4hU4';

    return Axios.get(`${url}?part=snippet&maxResult=5&key=${key}&q=${input}`).pipe(map(({ data }) => data))
};
