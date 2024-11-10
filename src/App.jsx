import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, { jobLoader } from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';
import EditJobPage from './pages/EditJobPage';
const App = () => {

  const addJob = async (newJob) => {
    const response = await fetch('/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  };
  const deleteJob = async (id) => {
    const response = await fetch(`/api/jobs/{id},`, {
      method: 'DELETE',
    });
    return;
  };

  const updateJob = async (job) => {
    const response = await fetch(`/api/jobs/${job.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(job),
    });
    return;
  };


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<HomePage />} />

        <Route path='*' element={<NotFoundPage />} />
        <Route path='/is-ilanlari' element={<JobsPage />} />
        <Route path='/is-ilani/:id' element={<JobPage />} loader={jobLoader} />
        <Route path='/is-ilani-ekle' element={<AddJobPage addJobSubmitHandler={addJob} />} />
        <Route path='/ilani-duzenle/:id' element={<EditJobPage
          updateJobSubmitHandler={updateJob} />}
          loader={jobLoader} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;