# Usa uma imagem base oficial do Node.js
FROM node:14

# Define o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copia o package.json e package-lock.json para instalar dependências
COPY package*.json ./

# Instala as dependências da aplicação
RUN npm install

# Copia o código da aplicação
COPY . .

# Expõe a porta 3000
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["node", "index.js"]
