export default function Sobre() {
    return (
        <div className="w-full h-screen flex justify-center items-center px-50 flex-col">
            <h2 className="flex justify-center font-elms tracking-tight font-bold text-2xl text-slate-400">Sobre mim</h2>
            <div className="justify-center grid grid-cols-3 gap-2 pt-8">
                <div className="bg-amber-50 rounded-lg">
                    <p className="p-6 text-slate-400">01</p>
                    <h2 className="font-elms font-bold text-lg">Projetar</h2>
                    <p>Compreender todas as informações possíveis sobre o projeto que quer desenvolver!</p>
                </div>
                <div className="p-50 bg-amber-50 rounded-lg">
                    <p>Programar</p>
                </div>
                <div className="p-50 bg-amber-50 rounded-lg">
                    <p>Publicar</p>
                </div>
            </div>
            <p className="my-8 text-slate-500">Projete, personalize e passe a ideia que quer compartilhar no mundo digital!</p>
        </div>
    )
}