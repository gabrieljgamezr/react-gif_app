import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en el componente <GifExpertApp />', () => {

    test('Match con el Snapshot', () => { 

        const {container} = render( <GifExpertApp /> );

        expect(container).toMatchSnapshot();

    });
    
    test('La caja de texto debe de estar vacia inicialmente', () => { 

        render( <GifExpertApp /> );
        
        const input = screen.getByRole('textbox');

        expect(input.value).toBe('');

    });

    test('Debe de cambiar el valor de la caja de texto', () => { 

        render( <GifExpertApp /> );
        
        const input = screen.getByRole('textbox');

        fireEvent.input( input, {target: {value: 'Dragon Ball'}} );

        expect(input.value).toBe('Dragon Ball');

    });

});