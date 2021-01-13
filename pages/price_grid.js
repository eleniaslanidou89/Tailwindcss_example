import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return(
  <div className="py-10 px-4">
    <Head>
      <title>Price</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="rounded-lg overflow-hidden md:w-2/4">
      <section className="p-8 bg-white">
        <h1 className="text-xl text-teal-600 font-semibold">Join our community</h1>
        <h2 className="text-yellow-600 font-semibold pt-4">30-day hassel-freee money back guarentee</h2>
        <p className="pt-2 text-gray-500">Gain....</p>      
      </section>
      <section className="text-white md:flex md:flex-row">
        <div className="bg-red-400 p-8 md:w-1/2">
          <h2 className="text-lg font-semibold">Money Subscription</h2>
          <div className="flex items-center pt-2">
            <p className="text-2xl font-semibold">$29</p>
            <p>per month</p>
          </div>
          <p className="font-light text-sm">Full access for less than $1 a day</p>
          <button className="bg-red-100 w-full hover:bg-red-500 text-white font-bold py-2 px-4 rounded mt-6">
            Sign up
          </button>
        </div>
        <div className="bg-red-500 p-8 md:w-1/2">
            <h2 className="font-semibold text-lg">Why us</h2>
            <div className="text-xs font-light pt-2">
              <p>Tutorials by..</p>
              <p>Tutorials by..</p>
              <p>Tutorials by..</p>
              <p>Tutorials by..</p>
              <p>Tutorials by..</p>
              <p>Tutorials by..</p>
            </div>
          </div>
      </section>
    </div>
  </div>
  )
}
