export const Dialog = () => {
    const $dialog = document.createElement('dialog'),
        $img = document.createElement('img'),
        $btn = document.createElement('button');

    $img.setAttribute('src', './src/images/image-equilibrium.jpg');
    $btn.classList.add('dialog__btn');
    $btn.textContent = 'close';
    // Cuadro de dialogo
    $dialog.classList.add('dialog');
    $dialog.appendChild($btn);
    $dialog.appendChild($img);

    // Manejador de eventos para cerrar el cuadro de diálogo
    $btn.addEventListener('click', () => {
        $dialog.close();
    });

    return $dialog;
}