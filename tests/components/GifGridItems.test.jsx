import { render, screen } from "@testing-library/react";
import { GifGridItems } from "../../src/components/GifGridItems";

describe('Pruebas en <GifGridItems />', () => {

    const title = 'Título de prueba';

    const url = 'https://urldeprueba.com/';

    test('Debe hacer match con el snapshot', () => {

        const {container} = render(<GifGridItems title={title} url={url} />);
        
        expect(container).toMatchSnapshot();

    });

    test('Debe de mostrar la imagen con el URL y el ALT indicado', () => {

        render(<GifGridItems title={title} url={url} />);
        const {src, alt} = screen.getByRole('img');

        expect(src).toBe(url);
        expect(alt).toBe(title);

    });

    test('Debe de mostrar el título en el componente', () => {

        render(<GifGridItems title={title} url={url} />);

        expect(screen.getByText(title)).toBeTruthy();

    });

});