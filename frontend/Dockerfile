FROM node:20

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm install

COPY . .

# Vite default port
EXPOSE 5173

# Required so browser can access from outside container
CMD ["npm", "run", "dev", "--", "--host"]
