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
        <h1 className="text-2xl font-bold mb-6">Welcome to the Projects page</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 shadow rounded-lg">
            <img src="https://cdn.prod.website-files.com/675d103f5b086e9ce6b6a358/67f05180ffaa7cfeae53f858_Group%202.png" alt="Project One" className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">Citus</h2>
            <p className="text-gray-700">As grocery prices continue to rise, people are increasingly looking for ways to save money while choosing the right products. Through surveys and interviews, I identifying key problems. Leveraging these insights, I designed and developed an app to address this issue.</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <img src="https://cdn.prod.website-files.com/675d103f5b086e9ce6b6a358/67f051d4b31da9cebf26c2fa_Group%20254%20(1).png" alt="Project Two" className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">Plantae</h2>
            <p className="text-gray-700">Plantae is a mobile app case study designed to help users forage food safely. It features a plant database with tips on identification, harvesting, and cooking—encouraging a deeper connection with nature through everyday foraging.</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <img src="https://cdn.prod.website-files.com/675d103f5b086e9ce6b6a358/67ffe55680811a2c7847fb25_Group%201%20(4).png" alt="Project Three" className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">Oracle Health</h2>
            <p className="text-gray-700">Oracle Health (formerly Cerner) is an EHR system used by up to 22% of U.S. hospitals. It centralizes patient records to help medical professionals access and manage care efficiently. Our goal is to improve a specific user flow to streamline tasks and give providers more time for patients.</p>
          </div>
        </div>
      </div>
      </main>
    )
  }