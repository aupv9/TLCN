
import Home_Main from './components/home-main';
import SignIn from './components/signin';
import SignUp from './components/signup';
import ListXe from './components/list-xe';
import Admin from './pages/admin';
import Payment from "./components/payment";
import SearchTicket from "./components/search-ticket";
import User from './pages/admin/user';
// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LibraryBooks from "@material-ui/icons/LibraryBooks";

const routes=[
    
        {
            path: "/admin",
            name: "Dashboard",
            icon: Dashboard,
            layout: "/admin"
            
        },
        {
            path: "/admin/user",
            name: "User",
            icon: Person,
            layout: "/admin"
            
        }, {
            path: "/admin/xe",
            name: "Xe",
            icon: LibraryBooks,
            layout: "/admin"
            
        },
    
    
]

export default routes;
