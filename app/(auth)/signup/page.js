'use client'
import React, {useEffect, useState} from 'react';
import { useForm } from 'react-hook-form';
import Cookies from 'js-cookie';

export default function SignUpPage() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    let resp= {test:''}
    const onSubmit = async(data) => {
        const {Name,Email,Password,DOB,Gender,Photo}=data;
        console.log(`${Name} ${Email} ${Password} ${DOB} ${Gender} ${Photo}`);
            const response = await fetch('http://localhost:8000/userstore/user/', {
                method: "POST",
                credentials:'include',
                body: JSON.stringify({"name":Name,"post":Email}),
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': Cookies.get('csrftoken')
                }
            },);
        resp=await response.json();
        console.log(resp)
    }
    console.log(errors);

    return (
<>
{/*
        <div className={"flex flex-col items-center justify-center max-h-auto"}>
            <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col justify-evenly text-black"}>
                <input type="text" placeholder="Name" {...register("name", {required: true})} />
                <input type="text" placeholder="Email" {...register("email", {required: true})} />
                <input type="text" placeholder="Password" {...register("pwd", {required: true})} />
                <input type="text" placeholder="Confirm Password" {...register("confpwd", {required: true})} />

*/}
                {/*<input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
            <select {...register("Title", { required: true })}>
                <option value="Mr">Mr</option>
                <option value="Mrs">Mrs</option>
                <option value="Miss">Miss</option>
                <option value="Dr">Dr</option>
            </select>

            <input {...register("Developer", { required: true })} type="radio" value="Yes" />
            <input {...register("Developer", { required: true })} type="radio" value="No" />
*/}
{/*
                <input type="submit" className={"text-white"}/>
            </form>
        </div>
*/}
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
    Create your account
    </h2>
    </div>

    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div className="bg-white bg-opacity-25 py-8 px-4 shadow sm:rounded-lg sm:px-10">
    <form  onSubmit={handleSubmit(onSubmit)} className="space-y-6" action="#" method="POST">
    <div>
    <label htmlFor="name" className="block text-sm font-medium text-white">
    Name
    </label>
    <div className="mt-1">
    <input
    id="name"
    name="name"
    type="text"
    autoComplete="name"
    required
    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white bg-opacity-25 text-white"
    placeholder="Enter your name"
    {...register("Name", {required: true})}
    />
    </div>
    </div>

    <div>
    <label htmlFor="email" className="block text-sm font-medium text-white">
    Email address
    </label>
    <div className="mt-1">
    <input
    id="email"
    name="email"
    type="email"
    autoComplete="email"
    required
    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white bg-opacity-25 text-white"
    placeholder="Enter your email"
    {...register("Email", {required: true})}
    />
    </div>
    </div>

    <div>
    <label htmlFor="password" className="block text-sm font-medium text-white">
    Password
    </label>
    <div className="mt-1">
    <input
    id="password"
    name="password"
    type="password"
    autoComplete="new-password"
    required
    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white bg-opacity-25 text-white"
    placeholder="Enter your password"
    {...register("Password", {required: true})}

    />
    </div>
    </div>

    <div>
    <label htmlFor="dob" className="block text-sm font-medium text-white">
    Date of Birth
    </label>
    <div className="mt-1">
    <input
    id="dob"
    name="dob"
    type="date"
    required
    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white bg-opacity-25 text-white"
    {...register("DOB", {required: true})}
    />
    </div>
    </div>

    <div>
    <label htmlFor="gender" className="block text-sm font-medium text-white">
    Gender
    </label>
    <div className="mt-1">
    <select
    id="gender"
    name="gender"
    autoComplete="gender"
    required
    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white bg-opacity-25 text-black"
    {...register("Gender", {required: true})}
    >
    <option value="">Select</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
    <option value="other">Other</option>
    </select>
    </div>
    </div>

    <div>
    <label htmlFor="photo" className="block text-sm font-medium text-white">
    Upload Photo
    </label>
    <div className="mt-1">
    <input
    id="photo"
    name="photo"
    type="file"
    accept="image/*"
    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white bg-opacity-25 text-white"
    {...register("photo", {required: false})}
    />
    </div>
    </div>

    <div>
    <button
    type="submit"
    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    >
    Create Account
    </button>
    </div>
    </form>
    </div>
    </div>
    </div>
    <p>this is csrf token : Cookies.get('csrftoken')</p>
    <p>this is resp: {resp.test}</p>
</>);
}