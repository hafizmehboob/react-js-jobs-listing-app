import React from 'react';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound';
import JobListings from './components/JobListings';
import JobDetails, {getJobs} from './pages/JobDetails';
import Edit from './pages/Edit';
import AddJobPage from './pages/AddJobPage';
import EditJob from './pages/EditJob';

const App = () => {
  // Add Job
  const addJob = async (newJob) => {
    const res = await fetch('/api/jobs',{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newJob),
    });
    return res;
  };
  // Delete Job
  const deleteJob = async (id) => {
    const res = await fetch(`/api/jobs/${id}`,{
      method: "DELETE",
    });
    return res;
  }
  // Edit Job
  const updateJob = async (job) => {
    console.log(job, 'Job Data');
    const res = await fetch(`/api/jobs/${job.id}`,{
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(job),

    });
    return res;
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >  
        <Route index element={<Home />} />
        <Route path='/jobs' element={<JobListings />} />
        <Route 
          path='/jobs/:id'
          element={<JobDetails deleteJob={deleteJob} />} 
          loader={getJobs}
        />
         <Route 
          path='/edit-job/:id'
          element={<EditJob updatedJobData={updateJob} />} 
          loader={getJobs}
        />
        <Route path='/edit/:id' element={<Edit />} />
        <Route path='/add-job' element={<AddJobPage newJobData={addJob} />} />
        <Route path='*' element={<NotFound />} />
     </Route> 
    )
  );

  return <RouterProvider router={router}/>
};

export default App;