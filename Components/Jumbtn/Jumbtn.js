import React from 'react';
import { useRouter } from 'next/dist/client/router';

const Jumbtn = () => {
    const router = useRouter();
    return (

        <div className="jumbotron jumbotron-fluid mt-5">
            <div className="container">
                <h1 className="display-4">Here your kitty cat</h1>
                <p className="lead">Please select your kitty cat from here and adopt.</p>
                <button type="button" className="btn btn-primary" onClick={() => router.push("/cat")}>Go to checkout</button>
            </div>
        </div>
    );
};

export default Jumbtn;