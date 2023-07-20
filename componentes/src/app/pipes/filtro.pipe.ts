import { Pipe, PipeTransform } from '@angular/core';
import { Albums } from '../interfaces/interfaces';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(value: Albums[], texto: string = ''): Albums[] {
    if (texto === '' || !value) {
      return value;
    }
    return value.filter((album: Albums) =>
      album.title.toLowerCase().includes(texto.toLowerCase())
    );
  }
}
