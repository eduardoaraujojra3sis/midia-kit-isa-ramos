import { FileDown } from 'lucide-react'

export default function DownloadButton() {
  return (
    <button
      onClick={() => window.print()}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-5 py-3 rounded-xl bg-gradient-to-r from-dourado to-marrom-claro text-white text-sm font-medium shadow-xl shadow-bege/40 hover:shadow-bege/60 hover:from-marrom-claro hover:to-rosa-metalico hover:-translate-y-0.5 transition-all duration-300 print:hidden"
    >
      <FileDown size={18} />
      <span className="hidden sm:inline">Baixar mídia kit em PDF</span>
      <span className="sm:hidden">Baixar PDF</span>
    </button>
  )
}
