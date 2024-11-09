import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';
import NotFoundPage from './pages/NotFoundPage';
import JobPage, {jobLoader} from './pages/JobPage';
import AddJobPage from './pages/AddJobPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path='/is-ilanlari' element={<JobsPage />} />
      <Route path='/is-ilanlari/:id' element={<JobPage />}  loader={jobLoader}/>
      <Route path='*' element={<NotFoundPage/>}/>
      <Route path='/is-ilani-ekle' element={<AddJobPage/>}/>
    </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App