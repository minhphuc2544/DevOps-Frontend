import { useState } from 'react';
import EyeOpenIcon from '../assets/icons/eye_Open.svg';
import EyeClosedIcon from '../assets/icons/eye_Close.svg';

export default function EyeToggle({ 
    value,
    onChange, 
    placeholder,
    wrapClassName = '',
    inputClassName = '',
    iconClassName = '',
}) {
    const [show, setshow] = useState(false);
    const toggle = () => setshow(s => !s);
    

    return (
        <div className={wrapClassName}>
            <input 
                type={show ? 'text' : 'password'}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={inputClassName}
            />
            
            <span 
                className={iconClassName}
                onClick={toggle}
                >
                    <img 
                    src={show ? EyeOpenIcon : EyeClosedIcon}
                    alt={show ? 'Hide password': 'Show password'}
                    style={{width: '24px', height: '24px' }} 
                />
            </span>
        </div>
    );
}