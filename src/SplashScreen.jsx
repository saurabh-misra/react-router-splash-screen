import reactLogo from './assets/react.svg'

export default function SplashScreen() {
    return (
        <>
            <a href="https://react.dev" target="_blank" rel="noreferrer">
                <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
            <br />
            <span className='text-muted'>Your React app is loading...</span>
        </>
    );
}