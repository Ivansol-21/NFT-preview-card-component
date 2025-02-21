
export const PreviewNFT = ($template) => {
    const $clone = document.importNode($template, true), // Se clona el template recibido.
        $header = $clone.querySelector('article > header');

    $header.classList.add('muestra'); // identificador para el click

    // Se trabaja sobre la instancia creada (clon), accediendo a los elementos dentro de la instancia para modificar su contenido.
    $clone.querySelector('article > header > img').setAttribute('src', './src/images/image-equilibrium.jpg');
    $clone.querySelector('article > header > img').setAttribute('alt', 'Imagen de portada');
    $clone.querySelector('article > header > img').classList.add('header__img'); // Agrega clase css.

    $clone.querySelector('article > section').classList.add('sct-1'); // Agrega clase css.
    
    $clone.querySelector('article > section > h3').textContent = 'Equilibrium #3429';
    $clone.querySelector('article > section > h3').classList.add('card__title'); // Agrega clase css.
    
    $clone.querySelector('article > section > p').textContent = 'Our Equilibrium collection promotes balance and calm.';
    $clone.querySelector('article > section > p').classList.add('card__detalle'); // Agrega clase css.
    
    $clone.querySelector('article > section + section').classList.add('sct-2'); // Agrega clase css.

    $clone.querySelector('article > section + section > figure > img').setAttribute('src', './src/images/icon-ethereum.svg');
    $clone.querySelector('article > section + section > figure > img').setAttribute('alt', 'icon-ethereum');
    $clone.querySelector('article > section + section > figure > img').classList.add('icon-ethereum'); // Agrega clase css.
    
    $clone.querySelector('article > section + section > figure > img + figcaption').textContent = '0.041 ETH';
    $clone.querySelector('article > section + section > figure > img + figcaption').classList.add('card__precio'); // Agrega clase css.

    $clone.querySelector('article > section + section > figure + figure > img').setAttribute('src', './src/images/icon-clock.svg');
    $clone.querySelector('article > section + section > figure + figure > img').setAttribute('alt', 'icon-clock');
    $clone.querySelector('article > section + section > figure + figure > img').classList.add('icon-clock'); // Agrega clase css.

    $clone.querySelector('article > section + section > figure + figure > img + time').setAttribute('datetime', '2025-02-17');
    $clone.querySelector('article > section + section > figure + figure > img + time').textContent = '3 days left';
    $clone.querySelector('article > section + section > figure + figure > img + time').classList.add('card__fecha'); // Agrega clase css.
    
    $clone.querySelector('article > footer > img').setAttribute('src', './src/images/image-avatar.png');
    $clone.querySelector('article > footer > img').setAttribute('alt', 'image-avatar');
    $clone.querySelector('article > footer > img').classList.add('avatar'); // Agrega clase css.
    
    // Aqui no se usa "textContent" porque plancharia o remplazaria el strong (.nombre) que esta dentro.
    $clone.querySelector('article > footer > img + p').prepend(document.createTextNode('Creation of')); // Asi que, se agrega un nuevo nodo de texto como primer hijo. 
    $clone.querySelector('article > footer > img + p').classList.add('autor'); // Agrega clase css.
    
    $clone.querySelector('article > footer > img + p > strong').textContent = 'Jules Wyvern';
    $clone.querySelector('article > footer > img + p > strong').classList.add('nombre'); // Agrega clase css.

    // Manejador de eventos
    $header.addEventListener('click', event => {
        if (event.target.matches('.muestra')) {
            document.querySelector('.dialog').showModal();
        }
    })
    
    // Se retorna el template clonado y modificado.
    return $clone // Ahora el componente final es una instancia de ese template.
}