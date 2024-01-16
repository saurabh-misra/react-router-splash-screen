import { useLoaderData } from "react-router-dom";
import Card from "./Card";
import getData from "./api";

export async function loader() {
    return await getData();
}

export default function Home() {
    const data = useLoaderData();

    return (
        <>
            <div className="container mt-5 text-start">
                <div className="row">
                    <div className="col">
                        <h1>Home Page</h1>
                        <Card {...data} />
                    </div>
                </div>
            </div>
        </>
    );
}