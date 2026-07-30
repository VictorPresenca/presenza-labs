import { header } from "framer-motion/client"

export default function Navbar(){
    return (
        <header className="absolute w-full z-50 bg-transparent">
            <div className="flex justify-between items-center max-w-7xl mx-auto px-6 py-8 text-slate-800">
                <div className="font-bold text-lg tracking-wide text-slate-800">
                    <p>Presenza Labs</p>
                </div>
                <nav className="flex gap-10">
                    <a href="#Sobre">Sobre</a>
                    <a href="#Projetos">Projetos</a>
                    <a href="#Contato">Contato</a>
                </nav>
            </div>
            
        </header>
    )
}