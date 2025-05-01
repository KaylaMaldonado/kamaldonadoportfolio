import Link from 'next/link' ;
export default function Home() {
    return (
      <main>
      <nav className="navbar">
        <Link href="/" className="header"> Home</Link>
        <Link href="/about" className="header"> About</Link>
        <Link href="/contacts" className="header"> Contacts</Link>
      </nav>
      <div className="p-12">
        <h1>Welcome to the contacts page</h1>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/kayla-maldonado/" target="_blank" rel="noopener noreferrer">
              Follow Me on LinkedIn
            </a>
          </li>
          <li>
            <a href="https://kayla-maldonado-2025.webflow.io/" target="_blank" rel="noopener noreferrer">
              View my portfolio here
            </a>
          </li>
        </ul>
      </div>
        
      </main>
    )
  }