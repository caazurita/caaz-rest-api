#determinar version de node
FROM node:22-alpine
ENV TZ=America/La_Paz

#determinar directorio de trabajo
WORKDIR /app

#copiar archivos
COPY package*.json ./

#instalar typescript
RUN npm install typescript --save-dev

#instalar dependencias
RUN npm install

#instalar pm2
RUN npm install pm2 -g


COPY . .

#compilar archivos .ts a .js
RUN npm run build



#ejecutar comando de inicio
CMD ["pm2-runtime", "start", "ecosystem.config.js"]
