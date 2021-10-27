import React from 'react';
import './CheckBox.css';
export default function CheckBox(props) {

    const inputRef = React.useRef(null);

    const onChange = () => {
        if (props.onChange) {
            props.onChange(inputRef.current)
        }
    }
    return (
<label className="checkbox">
    <input 
        type="checkbox" 
        ref={inputRef} 
        onChange={onChange} 
        checked={props.checked}/>
            {props.label}
</label>
    )
}
