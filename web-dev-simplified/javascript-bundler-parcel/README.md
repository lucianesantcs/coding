### Começar

Iniciar package.json
<br>`npm init -y`

Instalar Parcel como dependência de desenvolvimento
<br>`npm install parcel-bundler -D`

Configurar script no package.json
<br>
`"dev": "parcel src/*.html"`
<br>
`"build": "parcel build src/*.html"`
<br>

### Processo

Estrutura de pastas
<br>

```
/src
    /js
      script.js
    /scss
      style.css
```

Arquivo
<br>
`script.js`
<br>
Importa todos os scripts e o arquivo main do css para serem compilados

### Compilando

Executar
<br>
`npm run dev`
<br>
Irá compilar os arquivos e criar uma pasta **dist** na raíz do projeto
<br><br>
`npm run build`
<br>
Gera os arquivos finais, já compresso na pasta **dist**

### Source

_Must Know JavaScript Bundler - Parcel_  ·  <a href="https://www.youtube.com/watch?v=DblzpCoPakw">Video</a>
