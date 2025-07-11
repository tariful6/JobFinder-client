import { useContext } from 'react';
import logo from '../../assets/images/logo.png'
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Navber = () => {
    const {user, logOut} = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
        .then(()=> {})
        .catch(err => console.log(err))
    }
    return (
       <div className="shadow-sm ">
            <div className='navbar bg-base-100 container px-4 mx-auto'>
                <div className='flex-1'>
                    <div className='flex gap-2 items-center'>
                      <img className='w-auto h-7' src={logo} alt='' />
                      <span className='font-bold'>SoloSphere</span>
                    </div>
                </div>
                <div className=' flex flex-none items-center'>
                    <ul className='menu menu-horizontal px-1'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/allJobs'>Jobs</Link>
                    </li>

                    {
                        !user && <li > <Link to='signIn'className=' bg-pink-400 px-2 py-1 text-white rounded-md mt-1 ml-2 '>Login</Link></li>
                    }

                    </ul> 

                    {
                        user && <div className='dropdown dropdown-end z-50'>
                    <div
                        tabIndex={0}
                        role='button'
                        className='btn btn-ghost btn-circle avatar'
                    >
                        <div className='w-10 rounded-full' title={user?.displayName}>
                        <img className=' w-4'
                            referrerPolicy='no-referrer'
                            alt='User Profile Photo'
                            src={user?.photoURL}
                        />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
                    >
                       <li><Link to='/addJob'><div>Add Job</div></Link></li>
                       <li><Link to='/myPostedJobs'><div>My Posted Jobs</div></Link></li>
                       <li><Link to='/myBids'><div>My Bids</div></Link></li>
                       <li><Link to='/bidRequest'><div>Bid Requests</div></Link></li>
                        <li className='mt-2'>
                          <button onClick={handleLogOut} className='bg-gray-200 block text-center'>Logout</button>
                        </li>
                    </ul>
                    </div>
                    }
                </div>
                </div>
        </div>
    );
};

export default Navber;