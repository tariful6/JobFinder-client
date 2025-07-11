import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TabCart from './TabCart';

const TabCategories = () => {
    const [jobs, setJobs] = useState([])
    return (
     <div className='my-6'>
              <div>
                 <h2 className=' text-2xl font-semibold text-gray-800 text-center'>Brows Jobs By Categories</h2>
                 <p className=' max-w-2xl mx-auto my-6 text-gray-500 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut aliquid inventore eveniet quas, sunt sed dolorum totam optio perferendis placeat.</p>
              </div>
              <Tabs>
                <div className=' flex items-center justify-center my-6'>
                    <TabList>
                        <Tab>Web Development</Tab>
                        <Tab>Graphics Design</Tab>
                        <Tab>Digital Marketing</Tab>
                    </TabList>
                </div>

                <TabPanel>
                    <div className=' grid grid-cols-3 gap-6'>
                        {
                            jobs?.filter(j => j.category === 'Web Development')?.map(job => <TabCart key={job._id} job={job}></TabCart>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className=' grid grid-cols-3 gap-6'>
                        {
                            jobs.filter(j => j.category === 'Graphics Design').map(job => <TabCart key={job._id} job={job}></TabCart>)
                        }
                    </div>
                </TabPanel>

                <TabPanel>
                    <div className=' grid grid-cols-3 gap-6'>
                        {
                            jobs.filter(j => j.category === 'Digital Marketing').map(job => <TabCart key={job._id} job={job}></TabCart>)
                        }
                    </div>
                </TabPanel>





            </Tabs>
        </div>
    );
};

export default TabCategories;