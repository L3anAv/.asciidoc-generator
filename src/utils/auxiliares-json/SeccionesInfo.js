import { v4 as uuidv4 } from 'uuid';


export const ArrayBotonesSecciones = [
    {
        "id": uuidv4(),
        "TituloBoton": `Insignias`,
        "ContenidoTextArea": '// Insignias\n``\nObtener insignias en:\nhttps://github.com/Envoy-VC/awesome-badges[Awesome Badges,role=blue]\n``\n&#13;\n\nimage:https://i.postimg.cc/wxw7GzYn/asciidoc-badge.png[]\n\n[link=https://l3anav.github.io/L3anAv/]\nimage::https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white[Web,window=_blank]\n\n[link=https://github.com/Envoy-VC/awesome-badges?tab=readme-ov-file#-group]\nimage::https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white[Awesome Badges,window=_blank]',
    },
    {
        "id": uuidv4(),
        "TituloBoton": `Descripción de Uso`,
        "ContenidoTextArea": '=== Uso\n&#13;\n\nPara usar este proyecto, estos son los pasos:\n[square]\n* Paso 1:\n```\nnpm i libreria\n```\n* Paso 2:\n```\nnpm i libreria\n```\n',
    },
    {
        "id": uuidv4(),
        "TituloBoton": `Tecnologias usadas`,
        "ContenidoTextArea": '==== Stack\n&#13;\n\n``\nObtener más información de uso en:\nhttps://github.com/tandpfun/skill-icons#readme[Skill-Icons Repositorio,role=red,window=_blank]\n``\n\nimage::https://skillicons.dev/icons?i=react,vite,styledcomponents,java,py,postgres[]',
    },
    {
        "id": uuidv4(),
        "TituloBoton": `Librerias`,
        "ContenidoTextArea": '=== Librerias\n&#13;\n\n- https://www.npmjs.com/package/react-toastify[react-toastify,role=silver]\n\n:hide-uri-scheme:\n- https://www.npmjs.com/package/react-toastify',
    },
    {
        "id": uuidv4(),
        "TituloBoton": `gh-card`,
        "ContenidoTextArea": '``\nObtener gh-card personalizada en:\nhttps://gh-card.dev/\n``\n\nEjemplo:\n&#13;\n\n[link=https://github.com/L3anAv/.asciidoc-generator]\nimage::https://gh-card.dev/repos/L3anAv/.asciidoc-generator.png[window=_blank]',
    },
    {
        "id": uuidv4(),
        "TituloBoton": `Tabla de referencia colores`,
        "ContenidoTextArea": '=== Referencia de colores\n&#13;\n\n[cols="1,1"]\n|===\n|Color | Hex Code \n\n| Color Base 1\n| image:https://via.placeholder.com/10/665955?text=+[] #665955\n\n|Color Base 2\n|image:https://via.placeholder.com/10/556266?text=+[] #556266\n\n|Color Base 3\n|image:https://via.placeholder.com/10/cbdfd6?text=+[] #cbdfd6\n\n|===',
    },
    {
        "id": uuidv4(),
        "TituloBoton": `Uso de API`,
        "ContenidoTextArea": '=== Refencia de uso de API\n&#13;\n\n===== Get all items\n\n[source]\n----\nGET /api/items\n----\n\n\n[cols="1,1,1"]\n|===\n|Parametro | Tipo | Descripción\n\n\n| `api_key`\n| `string`\n| **Required**. Your API key\n\n|===\n\n\n===== Get item\n\n[source]\n----\nGET /api/items/${id}\n----\n\n[cols="1,1,1"]\n|===\n|Parametro | Tipo | Descripción\n\n\n| `id`  \n| `number`\n| **Required**. Id of item to fetch\n\n|===',
    },
    {
        "id": uuidv4(),
        "TituloBoton": `Uso/Ejemplos`,
        "ContenidoTextArea": `=== Uso/Ejemplos\n&#13;\n\n[source,javascript]\n----\nimport Component from 'my-project'\nfunction App() {\n return <Component />\n}\n----`,
    },
]