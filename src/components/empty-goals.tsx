import { Plus } from 'lucide-react'
import { Button } from './ui/button'
import { DialogTrigger } from './ui/dialog'

import logo from '../assets/logo-my-orbit.svg'
import letsStart from '../assets/lets-start-illustration.svg'

export function EmptyGoals() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-8">
      <img src={logo} alt="my.orbit" />
      <img src={letsStart} alt="lets start" />

      <div className="flex flex-col items-center gap-5">
        <p className="w-96 px-2 text-zinc-300 text-lg leading-relaxed text-center">
          Você ainda não cadastrou nenhuma meta, que tal{' '}
          <span className="border-b border-gray-300">cadastrar uma</span> agora
          mesmo?
        </p>

        <DialogTrigger asChild>
          <Button>
            <Plus className="size-5" />
            Cadastrar nota
          </Button>
        </DialogTrigger>
      </div>
    </div>
  )
}
