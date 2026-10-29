# importa as classes principais de  fastApi e exceção para erros HTTP
from fastapi import FastAPI, HTTPException
# import o middleware de cores para permite requisições de outros dominios(react)
from fastapi.middleware.cors import CORSMiddleware
# importa a classe base do pydantic par validação e estruturação e dados
from pydantic import BaseModel
# importa utilitários de tipagem do python 
from typing import Optional, List

# inicializa a aplicação FastApi definindo o titulo e a versão
app= FastAPI(title="Api de Clientes", version="1.0")

# adiciona o middleware de cors na aplicação para evitar bloqueios 
# de segurança do navegador

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

# Define o modelo de dados para criação de um cliente usando Pydantic
# valida o que chega do frontend
class ClienteCreate(BaseModel):
    nome:str
    email:str
    telefone: Optional[str]=""
    empresa: Optional[str]=""

#  Define o modelo completo do cliente herdando de ClienteCreate e
# adicionando os campos id e ativos

class Cliente(ClienteCreate):
     id: int
     active: bool = True

clients_db:List[Cliente]=[
     Cliente(id=1,nome="Huguinho",email="huguinho@email.com",telefone="(11)5555-5555", empresa="Tech Solution", active=True),
     Cliente(id=2,nome="Zezinho",email="zezinho@email.com",telefone="(14)3333-7455", empresa="Raiz Copy", active=True),
]

# define a rota HTTP Get para o endpoint que retorna a lista de clientes
@app.get("/api/clients",response_model=List[Cliente])
def buscar_cliente():
     return clients_db

@app.post("/api/clients",response_model=Cliente,status_code=201)
def adicionar_client(client:ClienteCreate):
     novo_id =len(clients_db) + 1
     novo_cliente = Cliente(
          id=novo_id,
          nome=client.nome,
          email=client.email,
          telefone= client.telefone,
          empresa=client.empresa,
          active=True
     )

     clients_db.append(novo_cliente)

     return novo_cliente
