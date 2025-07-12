
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import SocialShare from "./SocialShare";

import signUpImg from '../../assets/images/register.jpg'
import axios from "axios";


const SignUp = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state || '/';
    const {user, createUser, updateUserProfile, setUser } = useContext(AuthContext);
    const handleSignUp = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        try{
          const result = await createUser(email, password)
           await  updateUserProfile(name, photo)
        //    setUser({...user, photoURL : photo, displayName : name})
           setUser({...result?.user, photoURL : photo, displayName : name})
           axios.post(`${import.meta.env.VITE_API_URL}/jwt`, {email : result?.user?.email}, {withCredentials : true})
            .then(res => {
                alert(res.user ,' --- successfully created')
                navigate(from, {replace : true})
            })
           
        }catch (err) {console.log(err)}
    }



    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)]'>
                <div className='flex w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-lg  lg:max-w-4xl '>
                    <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>
                    <div className='flex justify-center mx-auto'>
                        <img
                        className='w-auto h-7 sm:h-8'
                        src='https://merakiui.com/images/logo.svg'
                        alt=''
                        />
                    </div>

                    <p className='mt-3 text-xl text-center text-gray-600 '>
                        Get Your Free Account Now.
                    </p>

                    <SocialShare></SocialShare>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  lg:w-1/4'></span>

                        <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                        or Registration with email
                        </div>

                        <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                    </div>
                    <form onSubmit={handleSignUp}>
                        <div className='mt-4'>
                        <label
                            className='block mb-2 text-sm font-medium text-gray-600 '
                            htmlFor='name'
                        >
                            Username
                        </label>
                        <input
                            id='name'
                            autoComplete='name'
                            name='name'
                            className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                            type='text'
                        />
                        </div>
                        <div className='mt-4'>
                        <label
                            className='block mb-2 text-sm font-medium text-gray-600 '
                            htmlFor='photo'
                        >
                            Photo URL
                        </label>
                        <input
                            id='photo'
                            autoComplete='photo'
                            name='photo'
                            className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                            type='text'
                        />
                        </div>
                        <div className='mt-4'>
                        <label
                            className='block mb-2 text-sm font-medium text-gray-600 '
                            htmlFor='LoggingEmailAddress'
                        >
                            Email Address
                        </label>
                        <input
                            id='LoggingEmailAddress'
                            autoComplete='email'
                            name='email'
                            className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                            type='email'
                        />
                        </div>

                        <div className='mt-4'>
                        <div className='flex justify-between'>
                            <label
                            className='block mb-2 text-sm font-medium text-gray-600 '
                            htmlFor='loggingPassword'
                            >
                            Password
                            </label>
                        </div>

                        <input
                            id='loggingPassword'
                            autoComplete='current-password'
                            name='password'
                            className='block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300'
                            type='password'
                        />
                        </div>
                        <div className='mt-6'>
                        <button
                            type='submit'
                            className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50'
                        >
                            Sign Up
                        </button>
                        </div>
                    </form>

                    <div className='flex items-center justify-between mt-4'>
                        <span className='w-1/5 border-b  md:w-1/4'></span>

                        <Link
                        to='/signIn'
                        className='text-xs text-gray-500 uppercase  hover:underline'
                        >
                        or sign in
                        </Link>

                        <span className='w-1/5 border-b  md:w-1/4'></span>
                    </div>
                    </div>
                    <div
                    className='hidden bg-cover bg-center lg:block lg:w-1/2'
                    style={{
                        backgroundImage: `url(${signUpImg})`,
                    }}
                    ></div>
                </div>
        </div>
    );
};

export default SignUp;