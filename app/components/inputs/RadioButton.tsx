"use client";
import React from 'react'
import Input from './Input';

interface RadioButtonProps {
    radioOptions: string[];
    radioLabel: string;
}
const RadioButton = (props: RadioButtonProps) => {
    const { radioOptions, radioLabel } = props;
    return (
        <>
            <div className="flex items-center mt-3">
                <label className="ms-2 text-sm font-medium text-black-900 dark:text-black-300">{radioLabel}</label>
                {

                    radioOptions?.map((element, index) => (
                        <div className='flex items-center' key={index}>
                            <input
                                defaultChecked={index === 0}
                                className="ml-2 font-mono text-black"
                                name='gender'
                                key={index}
                                id={`default-radio-${index}`}
                                type="radio"
                                value={element} />
                            <label
                                htmlFor={`default-radio-${index}`} className="ms-2 text-sm font-medium text-black-900 dark:text-black-300">{element}
                            </label>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default RadioButton