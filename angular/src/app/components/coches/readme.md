# Coches 
Aqui vamos a definir el componente de coches

## coche.component.html
Vamos a usar materialice para el estilo de la pagina.

Para configurar el fichero vamos a crear un formulario de esta manera:
```html
<form #cocheForm="ngForm" (ngSubmit)="addCoche(cocheForm)">

</form>
```
Lo que hacemos es que cuando le demos a submit lo que hara angular sera ejecutar un metodo llamado `addCoche` al que le pasaremos el formulario.

`nota`: la funcion la habra que declarar en la clase del fichero [coches.component.ts](coches.component.ts) de esta manera:

```typescript
export class CochesComponent {


  // Definimos la funcion que va a manejar el formulario
  addCoche(value:NgForm){

  }

}

```


