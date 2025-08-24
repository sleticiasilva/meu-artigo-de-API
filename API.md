As **APIs** são fundamentais no desenvolvimento moderno, permitindo que sistemas, sites e aplicativos conversem entre si.  
Neste artigo, vamos entender o que é uma API, como funcionam os **métodos HTTP** e **status codes**, e por fim criar uma **API do zero** usando **ExpressJS**.
-------
## 🔹 O que é uma API

**API** (Application Programming Interface) é um **conjunto de regras** que permite a comunicação entre sistemas.  
Ela funciona como uma **ponte** entre o cliente (**frontend**) e o servidor (**backend**).

### 📌 Exemplo prático:
Imagine um aplicativo de **clima** no seu celular:
- O app envia um **pedido** para uma API de clima.
- A API acessa os dados do servidor.
- A API devolve ao app as informações sobre temperatura e previsão.

**Sem a API, o aplicativo não teria como acessar esses dados.**
--------
## 🔹 Métodos HTTP

As APIs geralmente usam o **HTTP** para comunicação, e cada ação tem um **método** específico:

| **Método** | **Descrição**                          | **Exemplo**                    |
|------------|--------------------------------------|-------------------------------|
| **GET**    | Busca informações no servidor        | Buscar todos os usuários     |
| **POST**   | Envia dados para o servidor         | Criar um novo usuário       |
| **PUT**    | Atualiza **todos** os dados de um recurso | Atualizar o perfil de um usuário |
| **PATCH**  | Atualiza **parte** dos dados de um recurso | Alterar somente o e-mail    |
| **DELETE** | Remove um recurso do servidor       | Deletar um usuário          |
-------
| **Código**|	**Categoria**  |	**Significado**|	**Exemplo de Uso**|
|---------- |----------------|---------------------------|-------------------------------|
| **200**   | ✅ Sucesso     |	**Requisição concluída**	| **GET concluído com sucesso**|
| **201**   | ✅ Criado	Novo** | recurso criado	       | POST de um novo usuário |
|**400**    |	⚠️ Erro do Cliente**|	Requisição inválida	| Dados faltando no POST|
|**401**    |	🔒 Não autorizado** |	Falta autenticação	| Token inválido |
|**404**    |	❌ Não encontrado** |	Recurso não existe|	Usuário não encontrado|
|**500**    |	💥 Erro do Servidor**|	Problema interno no backend |	Falha na conexão do banco |
