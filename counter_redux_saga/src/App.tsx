import React, { useState } from "react";
import "./styles.css";

import { Value } from "./components/Value";
import { Button } from "./components/Button";
import {incrementAsync, decrementAsync, incrementByValueAsync, decrementByValueAsync} from "./ducks/actions";
import { connect } from "react-redux";

const mapDispatchToProps = (dispatch: any) => ({
    increment: () => dispatch(incrementAsync()),
    decrement: () => dispatch(decrementAsync()),
    incrementByValue: (value: number) => dispatch(incrementByValueAsync(value)),
    decrementByValue: (value: number) => dispatch(decrementByValueAsync(value))
});

function App({ increment, decrement, incrementByValue, decrementByValue }:any) {
    const [value, setValue] = useState("0");


    return (
        <div className="App">
            <Value />
            <div style={{ marginBottom: 16 }}>
                <Button text="Увеличить" onClick={ increment } />
                <Button text="Уменьшить" onClick={ decrement } />
            </div>
            <div>
                <input value={value} onChange={({target} ) => {setValue(target.value);}}/>
                <div>
                    <Button text="Увеличить на значение" onClick={() => {
                            incrementByValue(parseInt(value));
                            setValue('0');
                        }}
                    />
                    <Button text="Уменьшить на значение" onClick={() => {
                            decrementByValue(parseInt(value));
                            setValue('0');
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(App);