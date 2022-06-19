import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import style from '../../Components/Card/Card.module.css';
import Nav from '../../Components/Nav/Nav';

const CatDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [cat, setCat] = useState([]);
    useEffect(() => {
        fetch(`/api/cats/${id}`)
            .then(res => res.json())
            .then(data => setCat(data.cat))
    }, [id])

    // console.log(cat);
    return (
        <>
            <Nav></Nav>
            <div className='container mt-5 mb-5'>
                <div className={style.card}>
                    <div className={style["card-header"]}>
                        <img src={cat?.image?.url} alt={cat?.image?.alt} width='100%' height='100%' />
                    </div>
                    <div>
                        <h3>{cat.name}</h3>
                        <p>{cat.phone}</p>
                        <p>{cat.email}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CatDetails;