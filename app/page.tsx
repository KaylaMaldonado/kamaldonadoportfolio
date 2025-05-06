import Link from 'next/link' ;

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <Link href="/" className="header"> Home</Link>
        <Link href="/about" className="header"> About</Link>
        <Link href="/projects" className="header"> Projects</Link>
      </nav>
      <div className="p-12">
        <h1>Helloworld</h1>
        <img src="https://i.ytimg.com/vi/8Go6dHuylyM/maxresdefault.jpg" width="500"></img>
      </div>
    </main>
  )
}

//will be the main page