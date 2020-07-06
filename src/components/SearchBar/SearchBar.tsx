import React, {useRef} from 'react';
import './SearchBar.css';
import {GetData} from "../../_store/actions/actions";
import {useDispatch} from "react-redux";


const SearchBar = () => {
    const dispatch = useDispatch();

    const input = useRef<HTMLInputElement>(null);

    const onSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (input.current) {
            dispatch({type: GetData.Pending, payload: input.current.value});
        }
    };

    return (
        <form className="search-bar" onSubmit={onSubmit}>
            <input type="text" className="search-input" ref={input}/>
        </form>
    );
};

export default SearchBar;
