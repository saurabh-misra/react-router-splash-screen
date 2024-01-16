import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Root from './Root';
import Home, { loader as homeLoader } from './Home';
import App from './App';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: homeLoader
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App router={router} />
    </React.StrictMode>,
)
