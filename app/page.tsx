
import Image from 'next/image'

export default function Home(){
  const categories=[
    {name:'MEN', img:'/hero.jpg'},
    {name:'WOMEN', img:'/hero.jpg'},
    {name:'UNISEX', img:'/hero.jpg'},
  ]

  return (
    <div className="bg-black text-white">
      <header className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <Image src="/logo.png" width={50} height={50} alt="PerfumeHub"/>
          <h1 className="text-xl font-bold">PerfumeHub</h1>
        </div>
        <button className="px-4 py-1 border border-gray-600 rounded-lg">Cart</button>
      </header>

      <section className="relative h-[400px] w-full">
        <Image src="/hero.jpg" alt="Hero" fill className="object-cover opacity-60"/>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl font-bold">Smell Exceptional</h2>
          <p className="mt-2 text-gray-300">Discover premium perfumes</p>
          <button className="mt-6 bg-white text-black px-4 py-2 rounded-lg">Shop Now</button>
        </div>
      </section>

      <div className="p-6 grid grid-cols-3 gap-4">
        {categories.map((c)=>(
          <div key={c.name} className="relative h-[200px] rounded-xl overflow-hidden">
            <Image src={c.img} alt={c.name} fill className="object-cover opacity-70"/>
            <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold">{c.name}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
