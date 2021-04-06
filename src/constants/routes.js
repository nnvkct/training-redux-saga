import AdminHomePage from '../containers/AdminHomePage';
import Taskboard from '../containers/Taskboard';

export const ADMIN_ROUTES = [
  { path: '/', name: 'Trang quản trị', exact: true, component: AdminHomePage, },
  {
    path: '/task-board',
    name: 'Quản lý công việc',
    exact: true,
    component: Taskboard,
  },
];
