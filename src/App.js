// import "./styles.css";
import React , {useEffect} from "react";
import { BrowserRouter as Router, Route, Routes , createBrowserRouter,RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailPage";
import { store } from "./store/store";
import { Provider } from 'react-redux';
import Navbar from "./components/Navbar";

const Error = () => {
  return (<><p>Error occured</p></>)
};

export default function App() {

  // all the link routes
  const router = createBrowserRouter([
    {
      path:"/", 
      element: <Navbar />,
      errorElement: <Error />,
      children:[
        { index:true, element: <HomePage />},
        { path:"/detail/:id", element: <DetailPage />},
      ]
    }
  ]);

  // <Provider store={store}>
      //     <Router>
      //       <Routes>
      //         <Route path="/" element={<HomePage />} />
      //         <Route path="/detail/:id" component={DetailPage} />
      //       </Routes>
      //     </Router>
      //   </Provider>
  
  

  return (
      
      <Provider store={store}>
          <RouterProvider router={router} />   
      </Provider> 
  );
}
