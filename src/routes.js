
import Home_Main from './components/home-main';
import SignIn from './components/signin';
import SignUp from './components/signup';
import ListXe from './components/list-xe';
import Admin from './pages/admin';
import Payment from "./components/payment";
import SearchTicket from "./components/search-ticket";
import User from './pages/admin/user';

const homeRoutes=[
    {
        path: '/',
        component:Home_Main,
        layout:'/'
    },
    {
        path: '/sign-in',
        component:SignIn,
        layout:'/'
    },
    {
        path: '/sign-up',
        component:SignUp,
        layout:'/'
    },
    {
        path: '/list-xe/:start/:end/:date',
        component:ListXe,
        layout:'/'
    },
    ,
    {
        path: '/payment',
        component:Payment,
        layout:'/'
    },
    {
        path: '/ticketinfo',
        component:SearchTicket,
        layout:'/'
    },
    {
        path: '/admin',
        component:Admin,
        layout:'/',

    },
    {
        path: '/admin/user',
        component:User,
        layout:'/',
        
    },
    
]

export default homeRoutes;
