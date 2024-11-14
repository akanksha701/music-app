"use client";
import React from 'react'
import { UseFormRegister, FieldErrors, Path, FieldValues } from "react-hook-form";

interface InputProps<T extends FieldValues> {
    label?: string;
    placeholder?: string;
    required?: boolean;
    type?: string;
    id: Path<T>;
    register: UseFormRegister<T>;
    errors: FieldErrors<T>;
    disabled?: boolean;
    options?: Object;
}

const Input = <T extends FieldValues>({
    label,
    placeholder,
    required,
    type = "text",
    id,
    register,
    errors,
    disabled,
    options
}: InputProps<T>) => {
  console.log(errors)
  return (
    <div className="mb-3">
      <label 
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-black"
      >
        {label}
      </label>
      <input 
        id={id}
        {...register(id, options)}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        className={`
          bg-gray-50 
          border 
          ${errors[id] ? 'border-rose-500' : 'border-blue-200'}
          text-gray-900 
          text-sm 
          rounded-lg 
          focus:ring-white-500 
          focus:border-white-500 
          block 
          w-full 
          p-2.5 
        `}
      />
      {errors[id] && (
        <span className="text-rose-500 text-sm">
          {errors[id]?.message as string}
        </span>
      )}
    </div>
  )
}

export default Input