import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro',
})
export class FiltroPipe implements PipeTransform {
  transform(value: any[], columna: string = '', texto: string = ''): any[] {
    if (texto === '' || !value) {
      return value;
    }
    return value.filter((item) =>
      item[columna].toLowerCase().includes(texto.toLowerCase())
    );
  }
}
