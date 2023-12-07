import Image from 'next/image'
import { ModeToggle } from './_components/mode-toggle'

export default function Home() {
  return (
    <main className=" dark:bg-slate-900 bg-zinc-100">
      <div className='flex justify-between container space-y-6 lg:px-6 items-center h-24'>
      <div className="logo">
        <h2>logotipo</h2>
      </div>
        <ModeToggle />
      
      </div>
    </main>
  )
}
