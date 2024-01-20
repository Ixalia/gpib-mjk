import React from "react";
import { Link } from "react-router-dom";
import { Button, Label, TextInput } from 'flowbite-react';

export default function Signup() {
    return (
        <div className='min-h-screen mt-20'>
            <div className='flex flex-col md:flex-row md:items-center p-3 max-w-3xl mx-auto gap-5'>
                {/* kiri */}
                <div className='flex-1'>
                    <Link to="/" className='font-semibold dark:text-white text-4xl'>
                        <span className='px-2 py-1 bg-gradient-to-r from-green-500 to-lime-500 rounded-lg text-white>'>GPIB</span>
                        Immanuel Mojokerto
                    </Link>
                    <p className='mt-5'>
                        Untuk diperhatikan
                    </p>
                </div>
                {/* Kanan */}
                <div className='flex-1'>
                    <form className='flex flex-col gap-4'>
                        <div>
                            <Label value='Nama Pengguna' />
                            <TextInput
                                type='text'
                                placeholder='username'
                                id='username'
                            />
                        </div>
                        <div>
                            <Label value='Kata Sandi' />
                            <TextInput
                                type='password'
                                placeholder='password'
                                id='password'
                            />
                        </div>
                        <div>
                            <Label value='Email' />
                            <TextInput
                                type='text'
                                placeholder='email'
                                id='email'
                            />
                        </div>
                        <Button gradientDuoTone='BlueToPurple' type='submit'>
                            Sign Up
                        </Button>
                    </form>
                    <div className="flex gap-2 mt-5 text-sm">
                        <span>Sudah punya akun? </span>
                        <Link to='/sign-in' className='text-blue-500'>Sign In</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}