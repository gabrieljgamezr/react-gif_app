import { fireEvent, render, screen } from '@testing-library/react';
import { GifApp } from '../src/GifApp';

describe('Pruebas en el componente <GifApp />', () => {

    test('Match con el Snapshot', () => { 

        const {container} = render( <GifApp /> );

        expect(container).toMatchSnapshot();

    });
    
    test('La caja de texto debe de estar vacia inicialmente', () => { 

        render( <GifApp /> );
        
        const input = screen.getByRole('textbox');

        expect(input.value).toBe('');

    });

    test('Debe de cambiar el valor de la caja de texto', () => { 

        render( <GifApp /> );
        
        const input = screen.getByRole('textbox');

        fireEvent.input( input, {target: {value: 'Dragon Ball'}} );

        expect(input.value).toBe('Dragon Ball');

    });

});