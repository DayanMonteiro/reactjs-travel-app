import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
} from "lucide-react";
import { useState } from "react";
import { Button } from "./components/button";

export default function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);

  function openGuestsInput() {
    setIsGuestsInputOpen(true);
  }

  function closeGuestsInput() {
    setIsGuestsInputOpen(false);
  }

  return (
    <div className="h-screen flex items-center justify-center bg-pattern bg-no-repeat bg-center">
      <div className="flex flex-col items-center gap-3">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="flex items-center gap-2 flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Para onde você vai?"
                className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              />
            </div>

            <div className="flex items-center gap-2">
              <Calendar className="size-5 text-zinc-400" />
              <input
                type="text"
                placeholder="Quando"
                className="bg-transparent text-lg placeholder-zinc-400 w-40"
              />
            </div>

            <div className="w-px h-6 bg-zinc-800" />

            {isGuestsInputOpen ? (
              <Button onClick={closeGuestsInput} variant="secondary">
                Alterar local/data
                <Settings2 className="size-5" />
              </Button>
            ) : (
              <Button onClick={openGuestsInput}>
                Continuar
                <ArrowRight className="size-5" />
              </Button>
            )}
          </div>

          {isGuestsInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <div className="flex items-center gap-2 flex-1">
                <UserRoundPlus className="size-5 text-zinc-400" />
                <input
                  type="text"
                  placeholder="Quem estará na viagem?"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
                />
              </div>

              <div className="w-px h-6 bg-zinc-800" />
              <Button>
                Confirmar viagem
                <ArrowRight className="size-5" />
              </Button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br />
          com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
    </div>
  );
}
