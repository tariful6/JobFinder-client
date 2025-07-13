import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import axios from "axios";
import BidRequestRow from "./BidRequestRow";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const BidRequests = () => {
    const axiosSecure = useAxiosSecure()
    const {user} = useContext(AuthContext)
    const queryClient = useQueryClient() // for invalidateQueries refetch. 
    // const [bids, setBids] = useState([])  // used it for axios fetch.
    // const [control, setControl] = useState(false); // used it for axios fetch.

    // tanstack query for get data fetch option 1----------
    const {data: bids = [], isLoading, refetch, isError, error} = useQuery({
        queryFn : () => getData(),
        queryKey : ['bids' , user?.email] // we can add here useEffect dependency --
    })
    console.log(bids);
    console.log(isLoading);

    const getData = async () => {
        const {data} = await axiosSecure(`/bid-request/${user.email}`)
        return data
    }

    // axios fetch data option 2---------------------
    // useEffect(()=>{
    //     axiosSecure(`/bid-request/${user.email}`)
    //     .then(res => {
    //         setBids(res.data)
    //         setControl(!control)
    //     })
    // },[user, control, axiosSecure])



    // tanstack query for  patch data  option 1 ----------
    // we also can use mutateAsync for post data ----------

    const { mutateAsync} = useMutation({
        mutationFn : async ({id, status}) => {
           const {data} = await axiosSecure.patch(`/bids/${id}`, {status})
           console.log(data); 
        },
        onSuccess : () => {
             alert('update successful')
            //  refetch() // invalidateQueries is a advance alternative of refetch. 
            queryClient.invalidateQueries({queryKey : ['bids']})
        }
    })

    const handleUpdateStatus =  async (id, prevStatus, status) =>{
        console.log(id, prevStatus, status);
        if(prevStatus === status) return alert('sorry bhai')``
        await mutateAsync({id, status})
    }


    // axios patch data option 2---------------------------------
    // const handleUpdateStatus =  (id, prevStatus, status) =>{
    //     console.log(id, prevStatus, status);
    //     if(prevStatus === status) return alert('sorry bhai')

    //     axios.patch(`${import.meta.env.VITE_API_URL}/bids/${id}`, {status})
    //     .then(res => {
    //         if(res.data.modifiedCount > 0){
    //             alert('update successful')
    //         }
    //     })

    // }

    if(isLoading) return <p className=" text-green-400 text-3xl text-center">loading .....</p>
  
    return (
        <div>
            <section className='container px-4 mx-auto pt-12'>
                <div className='flex items-center gap-x-3'>
                    <h2 className='text-lg font-medium text-gray-800 '>Bid Requests</h2>

                    <span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full '>
                    {bids.length} Requests
                    </span>
                </div>

                <div className='flex flex-col mt-6'>
                    <div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
                    <div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
                        <div className='overflow-hidden border border-gray-200  md:rounded-lg'>
                        <table className='min-w-full divide-y divide-gray-200'>
                            <thead className='bg-gray-50'>
                            <tr>
                                <th
                                scope='col'
                                className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                >
                                <div className='flex items-center gap-x-3'>
                                    <span>Title</span>
                                </div>
                                </th>
                                <th
                                scope='col'
                                className='py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500'
                                >
                                <div className='flex items-center gap-x-3'>
                                    <span>Email</span>
                                </div>
                                </th>

                                <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                >
                                <span>Deadline</span>
                                </th>

                                <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                >
                                <button className='flex items-center gap-x-2'>
                                    <span>Price</span>
                                </button>
                                </th>

                                <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                >
                                Category
                                </th>

                                <th
                                scope='col'
                                className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'
                                >
                                Status
                                </th>

                                <th className='px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500'>
                                Actions
                                </th>
                            </tr>
                            </thead>
                            <tbody className='bg-white divide-y divide-gray-200 '>
                                {
                                    bids.map(bid => <BidRequestRow key={bid._id} bid={bid} handleUpdateStatus={handleUpdateStatus}></BidRequestRow>)
                                } 

                                
                            </tbody>
                        </table>
                        </div>
                    </div>
                    </div>
                </div>
                </section>
        </div>
    );
};

export default BidRequests;