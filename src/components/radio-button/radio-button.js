import React from 'react';
import './radio-button.css'

function RadioButton(props) {
    const {value, onChange, isChecked} = props
    return (
            <label className={isChecked ? "radio__button checked" : "radio__button"}>
                <input
                    className="radio__button-input"
                    type="radio"
                    value={value}
                    checked={isChecked}
                    onChange={onChange}
                />
                {value}
            </label>
    );
}

export default RadioButton;