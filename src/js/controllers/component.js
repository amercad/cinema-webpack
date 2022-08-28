import '../assets/css/component.css';

export const saludar = ( nombre ) => {

    const h1 = document.createElement('h1');
    h1.innerText = `Hola, soy ${ nombre }`;
    h1.setAttribute('class', 'container');

    document.body.append( h1 );

}