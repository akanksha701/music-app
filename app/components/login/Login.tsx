import React from 'react'
import Image from 'next/image'
import appLogo from '@/public/images/music-app-icon-3jtlvkhmijnmigdp-3jtlvkhmijnmigdp.png'
import Input from '../inputs/Input'
import Button from '../buttons/Button'
import { useForm, SubmitHandler } from 'react-hook-form';
interface IFormInput {
    email: string;
    password: string;
}
const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data)
  return (
    <div className="flex items-center justify-center min-h-screen">
    <div
        className=" w-full max-w-xl p-6 bg-white font-mono border border-gray-200 rounded-lg shadow  bg-emerald-700 dark:border-emerald-500">
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
            label="Email"
            placeholder="Email"
            required
            type="email"
            id="email"
            register={register}
            errors={errors}
            options={{
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address"
              }
            }}
          />
          <Input
            label="Password"
            placeholder="Password"
            required
            type="password"
            id="password"
            register={register}
            errors={errors}
            options={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters long"
              }
            }}
          />
          <div className="flex flex-row justify-end">
            <Button name="Login" onClick={() => { handleSubmit(onSubmit) }} type="submit" />
          </div>
        </form>
        </div>
      </div>
    </div>
  )
}

export default Login