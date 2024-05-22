import React, { useReducer } from "react";


const inputreducer = (state, action) => {
    switch (action.type) {
        case 'change':
            return{
                ...state,
                value: action.value,
            };
        case 'touch':
            return{
                ...state,
                istouched: true
            }
    }
}


const Input = (props) => {

    const Handlechange = event => {
        dispatch({
            type: 'change',
            value: event.target.value
        })
    }

    const touchhandler = () => {
        dispatch({
            type: 'touch'
        })
    }

    const [inputstate, dispatch] = useReducer(inputreducer,{
        value: props.intialValue,
        istouched: false,
        isvalid: props.intialValue || false
    })

    const element = props.type === "textarea" ? (
        <textarea
            id={props.id}
            placeholder={props.placeholder}
            onChange={Handlechange}
            onBlur={touchhandler}
            value={inputstate.value}
        />
    ) : (
        <input
            id={props.id}
            type={props.type}
            placeholder={props.placeholder}
            onChange={Handlechange}
            onBlur={touchhandler}
            value={inputstate.value}
        />
    );
    


    return (
        <div className="con">
           {element}
           {!inputstate.isvalid && inputstate.istouched && <p>{props.errortext}</p>}
        </div>
    )
};

export default Input;
