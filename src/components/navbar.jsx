import Link from "next/link"

const Navbar = () => {
    return(
    <ul className="flex bg-black px-10 py-10 text-white ">
      
      <div className="inline-flex space-x-4">
      <li>
          <Link href="/" 
            className="group text-white no-underline 
              transition duration-300"
          >
              <span 
                className="text-white group-hover:text-gray-400">
                    Home
              </span>
          </Link>
          </li>

          <li>
          <Link href="/todos"
            className="group text-white no-underline 
            transition duration-300"
          >
            <span className="text-white group-hover:text-gray-400">
              Tarefas
            </span>
          </Link>
        </li>

        <li>
          <Link href="/products"
            className="group text-white no-underline 
            transition duration-300"
          >
              <span className="text-white group-hover:text-gray-400">
                    Produto
              </span>
          </Link>
        </li>

        <li>
          <Link href="/about"
            className="group text-white no-underline 
            transition duration-300"
          >
            <span className="text-white group-hover:text-gray-400">
              Sobre nós
            </span>
          </Link>
        </li>

        <li>
          <Link href="/contact"
            className="group text-white no-underline 
            transition duration-300"
          >
            <span className="text-white group-hover:text-gray-400">
              Contato
            </span>
          </Link>
        </li>
      </div>
      </ul>
    )
}

export default Navbar
