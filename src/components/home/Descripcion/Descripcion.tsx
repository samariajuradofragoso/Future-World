import { getPriority } from 'os'
import styles from './Description.module.sass'
import Image from 'next/image'

export const Descripcion = () =>{
return(
    <section className={styles.Description}>
        <Image
         src="/images/description.jpeg" 
         alt="Products marketplace"
         width={500} 
         height={300}
         priority={false}
         quality={100}
         />

       <div className={styles.Description__text}>
        
        <h2>Bring the future today</h2>
<p>Future World: Your Geteway to Tomorrow's Tech! Dive into a world of cutting-edge gadgets and gear.Stay ahead of the curve and redefine ypur digital lifestyle with us.</p>
   </div>
    </section>
)
}


