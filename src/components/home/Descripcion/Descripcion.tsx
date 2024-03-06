'use client'
import Image from 'next/image';
import classNames from 'classnames/bind';
import{useState} from 'react';
import styles from './Description.module.sass';

 const placeholder_IMAGEN='data:image/jpeg;base64,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';
export const Descripcion = () =>{
    const [hasBodder, setBorder] = useState(false);

    const handleChick= () =>  setBorder (!hasBodder);

const cx = classNames.bind(styles);
    const buttonStyles = cx('Description__button',{
    'Description__button__border':hasBodder
})

    console.log(buttonStyles);

    return(

    <section className={styles.Description}>
      <button onClick={handleChick} className={buttonStyles}>
        <div className={styles.Description__imageContainer}>
        <Image
         src="/images/description.jpeg" 
         alt="Products marketplace"
         fill
         />
         </div>
         </button>
         <div className={styles.Description__text}>
            <h2>Bring the future today</h2>
            <p>Future World: Your Geteway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear.
Stay ahead of the curve and redefine ypur digital lifestyle with us.</p>
       </div>

    </section>
)
}


