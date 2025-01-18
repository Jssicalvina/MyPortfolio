import {RouterProvider} from 'react-router-dom';
import {createHashRouter} from 'react-router-dom';
import MainLayouts from './layouts/MainLayouts';
import ProfilePage from './pages/ProfilePage';
import ProjectPage from './pages/ProjectPage';
import ContactPage from './pages/ContactPage';

const router = createHashRouter([
  {
    path: '/',
    element: <h1><MainLayouts /></h1>,
    children: [
      {
        index: true,
        element: <ProfilePage />,
      },
      {
        path: 'project',
        element: <ProjectPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router = {router} />
  )
};

export default App;