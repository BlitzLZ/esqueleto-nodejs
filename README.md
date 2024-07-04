
# Esqueleto backend NodeJS
Ejemplo esqueleto backend NodeJS.

# Deploy
**Clone the Mail Service project:**

```bash
git clone https://github.com/BlitzLZ/esqueleto-nodejs
cd esqueleto-nodejs
```
**Install npm:**
```bash
npm install
```
**Build project:**
```bash
npm run build
```

**Deploy**

- Dev
```bash
npm run build:watch
npm run dev
```
- Prod
```bash
npm run start
```
# Docker
Para desplegar el server en docker ejecutar:
```bash
docker-compose up -d
```