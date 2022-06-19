import React from 'react';
import style from './Card.module.css';
import { useRouter } from 'next/dist/client/router';

const Card = ({ cat }) => {
    const { name, phone, email, image, id } = cat;
    const router = useRouter();
    return (
        <div className='col'>
            <div className={style.card} onClick={() => router.push(`/cat/${id}`)}>
                <div className={style["card-header"]}>
                    <img src={image.url} alt={image.alt} width='100%' height='100%' />
                </div>
                <div>
                    <h3>{name}</h3>
                    <p>{phone}</p>
                    <p>{email}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;