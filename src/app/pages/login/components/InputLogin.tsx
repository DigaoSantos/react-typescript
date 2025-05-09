import React from 'react';

interface IInputLoginProps {
    type?: string;
    label: string;
    value: string;
    onPressEnter?: () => void;
    onChange: (newValue: string) => void;
}


export const InputLogin= React.forwardRef<HTMLInputElement, IInputLoginProps>((props, ref) => {
    return (
        <label>{props.label}
            <input
                ref={ref}
                type={props.type}
                value={props.value}
                onChange={e => props.onChange(e.target.value)}
                onKeyDown={e => e.key === 'Enter' 
                    ? props.onPressEnter && props.onPressEnter()
                    : undefined} // ao clicar enteder ele foca em password />
            />
        </label>
    )
});