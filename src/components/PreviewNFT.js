export const PreviewNFT = ($template) => {
    const $clone = document.importNode($template, true); // Se clona el template recibido.

    // Se trabaja sobre la instancia creada (clon), accediendo a los elementos dentro de la instancia para modificar su contenido.
    $clone.querySelector('.header__img').setAttribute('src', './src/images/image-equilibrium.jpg');
    $clone.querySelector('.header__img').setAttribute('alt', 'Imagen de portada');

    $clone.querySelector('.card__title').textContent = 'Equilibrium #3429';
    
    $clone.querySelector('.card__detalle').textContent = 'Our Equilibrium collection promotes balance and calm.';

    $clone.querySelector('.icon-ethereum').setAttribute('src', './src/images/icon-ethereum.svg');
    $clone.querySelector('.icon-ethereum').setAttribute('alt', 'icon-ethereum');
    
    $clone.querySelector('.card__precio').textContent = '0.041 ETH';

    $clone.querySelector('.icon-clock').setAttribute('src', './src/images/icon-clock.svg');
    $clone.querySelector('.icon-clock').setAttribute('alt', 'icon-clock');

    $clone.querySelector('.card__fecha').setAttribute('datetime', '17-02-2025');
    $clone.querySelector('.card__fecha').textContent = '3 days left';
    
    $clone.querySelector('.avatar').setAttribute('src', './src/images/image-avatar.png');
    $clone.querySelector('.avatar').setAttribute('alt', 'image-avatar');
    
    // Aqui no se usa "textContent" porque plancharia o remplazaria el strong (.nombre) que esta dentro.
    $clone.querySelector('.autor').prepend(document.createTextNode('Creation of')); // Asi que, se agrega un nuevo nodo de texto como primer hijo. 
    
    $clone.querySelector('.nombre').textContent = 'Jules Wyvern';
    
    // Se retorna el template clonado y modificado.
    return $clone // Ahora el componente final es una instancia de ese template.
}