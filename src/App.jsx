import { useEffect, useState } from 'react'
import SplashScreen from './SplashScreen';
import { RouterProvider } from 'react-router-dom';
import './App.css'

export default function App({ router }) {
    const [showSplashscreen, setShowSplashscreen] = useState(true);

    useEffect(() => {
        // Set up an interval that will keep checking whether the navigation state within router has changed or not.
        // We need to do this manually since `useNavigation()` is not available.
        // So this component will not re-render automatically when the navigation state changes.
        const splashScreenInterval = setInterval(
            () => {
                
                // Normally, we'd be able to reference `navigation.state` directly using `useNavigation()`.
                // But since we are outside `<RouterProvider />`, we cannot use `useNavigation()`.
                // We only have the `router` object to provide us with the navigation state.
                const navState = router.state.navigation.state;

                // When the page is loading, `navState` will have a value of "loading".
                // This is when we'll display the Splash Screen.
                // When the data is fetched and loader has finished processing, 
                // `navState` will get the value "idle".
                if( navState == "idle" ){
                    // Hide the splash screen.
                    setShowSplashscreen(false);
                    clearInterval( splashScreenInterval )
                }
            }, 1000);

        // cleanup in case of component unmount
        () => clearInterval( splashScreenInterval );
    }, []);

    return (
        <>
            {
                showSplashscreen ? <SplashScreen /> : <RouterProvider router={router} />
            }
        </>
    );
}