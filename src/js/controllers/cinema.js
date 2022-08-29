import { peliculas } from '../data/peliculas';

export const mostrarCard = () => {

    let tarjeta = ``;

    peliculas.map(pelicula => (
            
            tarjeta += `
                <div class="tarjeta__content">
                    <img src=${pelicula.poster} class="tarjeta__img" alt="...">
                    <p class="tarjeta__titulo">${ pelicula.nombre.substring(0, 18) }</p>
                </div>
            `
           
        )

    );

    return tarjeta;

}