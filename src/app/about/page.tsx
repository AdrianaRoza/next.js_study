import Link from "next/link"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Página Sobre Nós",
};

const About = () => {
    return(
      <>
      <h1 className="text-4xl text-green-600">Página de About</h1>
				<Link href="/">
				</Link>
        
			
      </>
    )
}

export default About
