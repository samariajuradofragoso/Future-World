import { Hero } from "app/components/home/Hero"
import { Descripcion } from "app/components/home/Descripcion"

export default function HomeLayout({ children }: {children: React.ReactNode }){

    return(
        <div>

            <Hero/>
            <Descripcion/>
            {children}
        </div>
    )
}