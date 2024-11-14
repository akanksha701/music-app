"use client";
import React from 'react'
import Image from 'next/image'
import appLogo from '@/public/images/music-app-icon-3jtlvkhmijnmigdp-3jtlvkhmijnmigdp.png'
import Input from '../inputs/Input'
import Button from '../buttons/Button'
import RadioButton from '../inputs/RadioButton';
import { useForm, SubmitHandler } from 'react-hook-form';

interface IFormInput {
    firstname: string;
    lastname: string;
    dob: string;
    email: string;
    mobileNumber: number;
    password: string;
    profilePicture: FileList;
}
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
    const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="w-full max-w-xl p-6 bg-white font-mono border border-gray-200 rounded-lg shadow bg-emerald-700 dark:border-emerald-500">
                <div className="flex flex-row w-full">
                    <Image src={appLogo} alt="logo" width={100} height={100} />
                    <div className="flex flex-col mt-8 ml-6 w-full">
                        <h3 className="text-2xl  font-bold font-mono text-black">Welcome again  </h3>
                        <hr className="border-t border-gray-200 my-2" />
                        <h6 className="font-bold font-mono text-grey opacity-50">Login to spotify   </h6>
                    </div>

                </div>

                <div className="flex flex-col mt-4 ml-6">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Input
                            label="First Name"
                            placeholder="First Name"
                            required
                            type="text"
                            id="firstname"
                            register={register}
                            errors={errors}
                            options={{ required: 'first name is required', maxLength: { value: 10, message: 'first name must be less than 10 characters' }, minLength: { value: 3, message: 'first name must be more than 3 characters' } }}
                        />

                        <Input
                            label="Last Name"
                            placeholder="Last Name"
                            required
                            type="text"
                            id="lastname"
                            register={register}
                            errors={errors}
                            options={{ required: 'last name is required', maxLength: { value: 10, message: 'last name must be less than 10 characters' }, minLength: { value: 3, message: 'last name must be more than 3 characters' } }}
                        />
                        <Input
                            label='Date of Birth'
                            placeholder='Date of Birth'
                            required
                            type='date'
                            id='dob'
                            register={register}
                            errors={errors}
                            options={{ required: 'date of birth is required' ,max: { value: new Date().toISOString().split('T')[0], message: 'date of birth must be less than today' }}}
                        />
                        <Input
                            label="Email"
                            placeholder="Email"
                            required
                            type="email"
                            id="email"
                            register={register}
                            errors={errors}
                            options={{ required: 'email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'invalid email address' } }}
                        />
                        <Input
                            label="Mobile Number"
                            placeholder="Mobile Number"
                            required
                            type="number"
                            id="mobileNumber"
                            register={register}
                            errors={errors}
                            options={{ required: 'mobile number is required', minLength: { value: 10, message: 'mobile number must be more than 10 digits' }, maxLength: { value: 10, message: 'mobile number must be less than 10 digits' } }}
                        />
                        <Input
                            label="Password"
                            placeholder="Password"
                            required
                            type="password"
                            id="password"
                            register={register}
                            errors={errors}
                            options={{ required: 'password is required', minLength: { value: 8, message: 'password must be more than 8 characters' } }}
                        />
                        <RadioButton radioOptions={['female', 'male', 'other']} radioLabel='Gender' />
                        <Input
                            label="Profile Picture"
                            placeholder="Profile Picture"
                            required
                            type="file"
                            id="profilePicture"
                            register={register}
                            errors={errors}
                            options={{ 
                                required: false,
                                validate: {
                                    fileType: (value: FileList) => 
                                        !value[0] || 
                                        ['image/jpeg', 'image/png'].includes(value[0].type) || 
                                        'File must be a JPEG or PNG image',
                                    fileSize: (value: FileList) =>
                                        !value[0] ||
                                        value[0].size <= 5 * 1024 * 1024 ||
                                        'File size must be less than 5MB'
                                }
                            }}
                        />
                        <div className="flex flex-row justify-end mt-3">
                            <Button name="Signup" type="submit" onClick={handleSubmit(onSubmit)} />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default Signup