import { useState } from "react"
import ClientApi from "./components/ClientApi"
import ClientPython from "./components/ClientPython"

type TabType = "python" | "api"

const App = () => {
  const [activeTab, setActiveTab] = useState<TabType>("python")

  return (
    <main className="min-h-screen bg-slate-100 px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <header className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-600">
            Gerenciamento
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Painel de clientes
          </h1>
          <p className="mt-2 text-slate-600">
            Gerencie clientes Python ou consulte os dados da API externa.
          </p>
        </header>

        <nav
          aria-label="Seções do painel"
          className="mb-5 inline-flex rounded-xl border border-slate-200 bg-white p-1 shadow-sm"
        >
          <button
            type="button"
            aria-pressed={activeTab === "python"}
            className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
              activeTab === "python"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
            onClick={() => setActiveTab("python")}
          >
            Clientes Python
          </button>
          <button
            type="button"
            aria-pressed={activeTab === "api"}
            className={`rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
              activeTab === "api"
                ? "bg-blue-600 text-white shadow-sm"
                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            }`}
            onClick={() => setActiveTab("api")}
          >
            Clientes API
          </button>
        </nav>

        <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8">
          {activeTab === "python" && <ClientPython />}
          {activeTab === "api" && <ClientApi />}
        </section>
      </div>
    </main>
  )
}

export default App
