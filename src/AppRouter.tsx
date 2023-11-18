import {createBrowserRouter} from 'react-router-dom'
import { Root } from './layouts/Root';
import { Audits, DashboardInvgate} from './pages';
import { Resources } from './pages/Resources';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[
        {
            path: "/",
            element: <DashboardInvgate/>
        },
        {
            path: '/paises/:id',
            element:  <DashboardInvgate/>
        },
        {
          path:'/audit',
          element: <Audits/>
        },
        {
          path: '/resources',
          element: <Resources/>
        }
      ]
    },
  ]);

export default router;