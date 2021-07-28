import React from 'react';
import './radio-button.css'

function RadioButton(props) {
    const {value, onChange, isChecked, className} = props
    return (
            <label className={isChecked ? `${className} checked` : className}>
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