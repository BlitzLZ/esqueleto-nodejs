
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
# Standard Version
Para tener standar version se utilizan conventional commits:
- **fix**: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
```bash
fix(project): "fix pequeño"
```
- **feat**: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
```bash
feat(project): "feat mediano"
```
- **BREAKING CHANGE**: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.
```bash
BREAKING CHANGE(project): "Cambio grande, rompemos la app"
```

**Instalar**
```bash
npm install --save-dev standard-version@^9.5.0
```

**Config**
En el archivo package.json añadimos el comando "version:release"
```js
"scripts": {
    "version:release": "standard-version",
    .
    .
    .
  },
```

**Uso**
```bash
npm run version:release
git push --follow-tags origin main && npm publish
```