'next client'

import Head from "next/head";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Head>
        <title>Página Principal</title>
      </Head>
      <div>
        <h1 
          className="text-4xl text-white bg-cover bg-center p-5 mb-5"
          style={{ backgroundImage: "url('/images/pattern.jpg')" }}>
            Hello Adriana
        </h1>
        
        <div className="flex justify-center items-center">
          <Image 
            src="/images/city.jpg" 
            width={200} 
            height={200}
            alt="Cidade a Noite"
            className="rounded-lg"
          />
        </div>
      </div>
    </>
    
  );
}

export default Home
