import React, { useEffect, useState } from 'react';
import Card from '../../Components/Card/Card';
import Nav from '../../Components/Nav/Nav';

const Index = () => {
    const [cats, setCats] = useState([]);
    useEffect(() => {
        fetch('api/cats')
            .then(res => res.json())
            .then(data => setCats(data.cats))
    }, [])
    // console.log(cats);
    return (
        <>
            <Nav></Nav>
            <div className='container mt-5 mb-5'>
                <div className='row gx-5 gy-5'>
                    {
                        cats.map(cat => (<Card cat={cat} key={cat.id}></Card>))
                    }
                </div>
            </div>

        </>
    );
};

export default Index;