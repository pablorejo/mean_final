import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })

// Definimos estos tipos para que solo se puedan poner valores de esta manera.

type Carroceria = 'Sedán'| 'Berlina'| 'SUV'| 'Coupé'| 'Cabrio' | 'Familiar'| 'Compacto'| 'Monovolumen'|'Furgoneta'|'Furgon'|'Autocaravana'| 'Pick Up'| 'Clasico'| 'Super deportivo';
type Propulsion = 'Electrico'| 'Diesel'| 'Hibrido'| 'Hidrogeno';
type Traccion = 'FWD'| 'RWD'| 'AWD'| '4WD'| '4x4';

export class CocheModule { 
  
  _id: string ;
  marca:          string;
  modelo:         string;
  color:          string;
  etiqueta:       string;
  puertas:        number;
  cv:             number; 
  a_matricula:    number;
  cantidad:       number;
  precio:         number;
  propulsion:     Propulsion;
  carroceria:     Carroceria;
  traccion:       Traccion;
  
  constructor (
    _id = '', 
    marca= '', 
    modelo='', 
    color= '', 
    etiqueta = '', 
    puertas= 0, 
    cv = 0, 
    a_matricula =2023,
    cantidad =0, 
    precio =0,
    traccion: Traccion = 'FWD', 
    propulsion: Propulsion = 'Electrico', 
    carroceria: Carroceria = 'Sedán'
  )
  {
    this._id = _id;
    this.marca = marca;
    this.modelo = modelo;
    this.color =   color   ;  
    this.etiqueta =   etiqueta   ;
    this.puertas = puertas      ;
    this.cv =   cv         ;
    this.a_matricula =  a_matricula ;
    this.cantidad =     cantidad  ;
    this.precio =   precio     ;
    this.propulsion =propulsion;
    this.carroceria =carroceria;
    this.traccion =traccion;
  }
}



