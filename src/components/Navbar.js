import { useSelector , useDispatch} from "react-redux";
import { 
    deleteSession ,
    authSelector ,
    createSession,
    setInitialStateAsync
} from "../store/reducers/authReducer";
// css styles 

// import form react router
import { Outlet, NavLink } from "react-router-dom";
import { useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

// Navbar Component
export default function Navbar(){
    const dispatch = useDispatch();

    // Initializing the the auth state
    useEffect(()=>{
        // dispatch(setInitialStateAsync());
    },[]);
    

    // to check if the user is still logged in on page refresh
    useEffect(()=>{
        // getting user authentication token from local storage
        const token=window.localStorage.getItem("token");
        if(token){
            // loggedIn user's data 
            const index=window.localStorage.getItem("index");
            const user=JSON.parse(index);
            dispatch(createSession(user));
        }
    },[]);
    
    // user's login status
    const authState = useSelector(authSelector);
    const {isLoggedIn,userLoggedIn}=authState;

    // getting real time update of user's cart / order
    useEffect(()=>{
        // Case : user logged in
        if(isLoggedIn){
            // updating order
            // dispatch(updateOrdersAsync(userLoggedIn));
        }
    });

    // Getting message for notification
    // const {message} = useSelector(notySelector);

    // resetting notification after 5s
    // useEffect(()=>{
    //     if (message) {
    //         toast.success(message);
    //         setTimeout(()=>{
    //             dispatch(reset());
    //         },500)
    //     }
    // },[message]);
       
    
    

    // return(
    //     <>
    //         {/* main container */}
    //         <div className={styles.navbarContainer}> 
    //             {/* app heading */}
    //             <div className={styles.appName}>
    //                 <NavLink to="/">
    //                     {/* logo of the app */}
    //                     <i className="fa-solid fa-shop"></i>
    //                     New App
    //                 </NavLink>
    //             </div>

    //             {/* all the navigation link */}
    //             <div className={styles.navLinks}>

    //                 {/* homepage link */}
    //                 <NavLink to="/">
    //                     <span>
    //                         {/* home logo */}
    //                         <i className="fa-solid fa-house"></i>
    //                         Home
    //                     </span>
    //                 </NavLink>


    //                 {/* for signIN and signOut */}
    //                 <NavLink to={!isLoggedIn?"/signin":"/"}>
    //                     <span>
    //                         {!isLoggedIn?
    //                             <>
    //                                 {/* sign in icon */}
    //                                 <i className="fa-solid fa-right-to-bracket"></i>
    //                                 SignIn
    //                             </>
    //                             :
    //                             <>
    //                                 {/* sign out icon */}
    //                                 <i className="fa-solid fa-right-from-bracket"></i>
    //                                 {/* sign out user  */}
    //                                 <span onClick={()=>dispatch(deleteSession())}>SignOut</span>
    //                             </>
    //                         }
    //                     </span>
    //                 </NavLink>
    //             </div>
    //         </div>
    //         {/* render child pages */}
    //         <Outlet />
    //     </>
    // )
    return (<>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
              <NavLink to={!isLoggedIn?"/signin":"/"}>
              <Button color="inherit">
              {!isLoggedIn? 'SignIn' : 'SignOut'} 
                </Button>
                </NavLink>
            </Toolbar>
          </AppBar>
        </Box>
        <Outlet />
    </>)
}