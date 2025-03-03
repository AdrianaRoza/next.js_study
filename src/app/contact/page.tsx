import Head from "next/head"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página Contato",
};

const Contact = () => {
  return(
    <>
    <Head>
     <title>Página de Contato</title>
    </Head>
    <h1 className="text-4xl text-orange-500">Página de Contato</h1>
    </>
  )
}
export default Contact
