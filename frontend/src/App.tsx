import { useState } from "react"
import ClientApi from "./components/ClientApi"
import ClientPython from "./components/ClientPython"

type TabType ="python" | "api"



const App = () => {
  const [activeTab, setActiveTab] =useState<TabType>("python")
  return (
    <div>
      <div>
        <h1 className="font-bold">Painel Simples de API's</h1>
        <div>
          <button onClick={()=>setActiveTab("python")}>
            {activeTab ==="python"}
            Clientes Python
          </button>
          <button
          onClick={()=>setActiveTab("api")}>
            {activeTab ==="api"}
            Clientes API
          </button>
        </div>

        {activeTab === "python" && <ClientPython/>}
        {activeTab === "api" && <ClientApi/>}
      </div>
      
    </div>
  )
}

export default App
