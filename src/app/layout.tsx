import {Roboto} from 'next/font/google'
import { Header } from "app/components/shared/Header";
import{ Footer } from "app/components/shared/Footer";
import 'app/sass/globals.sass';
import { Hero } from 'app/components/home/Hero';
import { Descripcion } from 'app/components/home/Descripcion';

const roboto= Roboto ({
 weight: ["100", "300" , "500" , "700"] ,
 subsets: ["latin"] ,
})

export default function RootLayout({
  children,
}: {
  
  children: React.ReactNode;

}) {
 
  return (

    <html lang="en">
      <body className={roboto.className}>
      <Header />
      
    
        {children}

        <Footer />
        </body>
    </html>
  );
  }