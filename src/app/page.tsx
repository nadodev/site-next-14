import Image from 'next/image'
import { ModeToggle } from './_components/mode-toggle'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 dark:bg-slate-900 bg-zinc-100">
      <ModeToggle />
    </main>
  )
}
