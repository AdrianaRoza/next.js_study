import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Página Produtos",
};

const Product = () => {
    return(
      <>
        <h1 className="text-4xl text-pink-700"> 
            Página de Produtos
        </h1>

         
          <Link href="/">
          </Link>
      </>
    )
}

export default Product
