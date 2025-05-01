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
        <h1>The About Page</h1>
      < p> Hello I am Kayla Maldonado a senior at UCSD</p>
      </div>
      </main>
    )
  }