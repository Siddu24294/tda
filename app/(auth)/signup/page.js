'use client'
import React from 'react';
import { useForm } from 'react-hook-form';

export default function SignUpPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async(data) => {
        const {name,email,pwd,confpwd}=data;
        console.log(name,email,pwd,confpwd);
        if(pwd===confpwd) {
            const response = await fetch('http://localhost:3000/register', {
                method: "POST",
                body: JSON.stringify({name, email, pwd})
            });
            console.log(response)
        }
    }
    console.log(errors);

    return (

        <div className={"flex flex-col items-center justify-center max-h-auto"}>
            <form onSubmit={handleSubmit(onSubmit)} className={"flex flex-col justify-evenly text-black"}>
                <input type="text" placeholder="Name" {...register("name", {required: true})} />
                <input type="text" placeholder="Email" {...register("email", {required: true})} />
                <input type="text" placeholder="Password" {...register("pwd", {required: true})} />
                <input type="text" placeholder="Confirm Password" {...register("confpwd", {required: true})} />

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
                <input type="submit" className={"text-white"}/>
            </form>
        </div>
    );
}