import AdminHomePage from '../containers/AdminHomePage';
import LoginPage from '../containers/LoginPage';
import SignupPage from '../containers/SignupPage';
import Taskboard from '../containers/Taskboard';

export const ADMIN_ROUTES = [
  {
    path: '/admin',
    name: 'Trang quản trị',
    exact: true,
    component: AdminHomePage,
  },
  {
    path: '/admin/task-board',
    name: 'Quản lý công việc',
    exact: true,
    component: Taskboard,
  },
];

export const ROUTES = [
  { path: '/login', name: 'Đăng nhập', exact: true, component: LoginPage, },
  { path: '/signup', name: 'Đăng ký', exact: true, component: SignupPage, },
];
