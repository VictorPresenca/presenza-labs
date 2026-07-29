export default function Hero() {
  return (
    <div className="relative w-full h-screen bg-[#fdf6db] flex flex-col justify-center items-center">
        <div className="font-elms text-2xl tracking-tight flex-1 flex items-end text-slate-800 pb-16">
          <p>Criamos seu site do jeito que você imagina!</p>
        </div>
        <div className="flex-2 flex items-baseline justify-center">
          <h1 className="font-elms tracking-tight text-center text-8xl font-bold text-slate-800 text-shadow-lg ">Criação de sites <br/>pessoais e profissionais <br/> personalizados</h1>
        </div>
        <div className="w-full h-24 bg-gradient-to-b from-[#fdf6db] to-white pointer-events-none" />
    </div>
  );
}