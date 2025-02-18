import { PreviewNFT } from "./components/PreviewNFT.js";

document.addEventListener('DOMContentLoaded', () => {
    // Se obtiene el elemento principal
    const $app = document.getElementById('root'),
        $template = document.getElementById('template__card').content, // El modelo a seguir de las cards; el contenido del template.
        $fragment = document.createDocumentFragment();

    // Se agregan componentes al fragmento
    $fragment.appendChild(PreviewNFT($template)); // "PreviewNFT" recibe como parametro el template, para clonarlo y crear una instancia basada en ese template.

    // Se agrega el fragmento, ya con todos los componentes, al elemento principal.
    $app.appendChild($fragment);
});