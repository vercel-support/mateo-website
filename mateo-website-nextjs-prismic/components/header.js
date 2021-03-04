import Link from 'next/link'

export default function Header() {
  return (
      <div className="flex flex-row items-center mb-20 mt-8">
    <h2 className="text-2xl md:text-4xl font-bold">
      <Link href="/">
        <a className="hover:underline">MATEO</a>
      </Link>
    </h2>
          <div className="flex-grow"></div>
          <div className="flex flex-row items-center">
              <h2 className="text-xl font-bold mr-5">
                  <Link href="/funktionen">
                      <a className="hover:underline">Funktionalitäten</a>
                  </Link>
              </h2>
              <h2 className="text-xl font-bold mr-10">
                  <Link href="/ueberuns">
                      <a className="hover:underline">Über Uns</a>
                  </Link>
              </h2>
              <div>
                  <div className="text-lg font-bold p-3 text-white rounded-md" style={{
                      backgroundImage: 'url(' + './images/mateobackground.jpg' + ')',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                      backgroundRepeat: 'no-repeat',
                  }}>
                  Kostenlos Testen
                  </div>
              </div>
          </div>
      </div>
  )
}
