import { Injectable } from '@angular/core';

// Tendremos que importar el modulo httpclient para poder hacer el crud con el servidor de mi pagina web
// de tal manera que podamos realizar el CRUD
import { HttpClient} from '@angular/common/http'
import { CocheModule } from '../../models/coche/coche.module';

@Injectable({
  providedIn: 'root'

})
export class CocheService {

  selectedCoche: CocheModule;
  coches: CocheModule[] = [];


  // instanciamos el httpclient en el constructor de la clase
  constructor(private http: HttpClient) { 
    this.selectedCoche = new CocheModule();

  } 
 


  // Uri del http
  uri = "http://localhost:3000/coches"


  

  // Nos devolvera un arreglo de empleados que vendran desde nuestro servidor
  getCoches(){
    return this.http.get(this.uri);
  }

  postCoche(coche: CocheModule){

    // al hacer el post tendremos que pasarle la url y el dato que le queremos pasar que en nuestro caso sera el coche
    return this.http.post(this.uri, coche);

  }

  putCoche(coche: CocheModule){ 
    // put necesita lo mismo pero nosotros en nuestra api rest le tenemos que pasar el id del empleado para que este
    // sepa cual es el que tiene que cambiar y de ahi el  + `/${coche._id}`
    return this.http.put(this.uri + `/${coche._id}`, coche );
  }

  deleteCoche(id: String){
    // Aqui lo mismo que antes usamos el metodo delete de http y le mandamos el id del coche que queremos eliminar
    return this.http.delete(this.uri + `/${id}`);
  }

  // Busca por marca
  findByMarca(marca: String){
    return this.http.get(this.uri + `/marca/${marca}`);
  }

  // Busca por id
  findByID(marca: String){
    return this.http.get(this.uri + `/id/${marca}`);
  }

  // Buscar por modelo
  findByModelo(modelo: String){
    return this.http.get(this.uri + `/modelo/${modelo}`);
  }
  
}
