import { Injectable } from '@angular/core';
import { WRITERS } from '../db/escritores.db';
import { Writer } from '../model/writer.model';

@Injectable({
  providedIn: 'root'
})
export class WritersService {

  paises: string[];

  constructor() { 
    this.paises = [];
  }

  // Metodo que nos retorna todos los elementos del array
  getAllWriters():Promise<Writer[]>{
    return new Promise((resolve, rejects)=>{
      resolve(WRITERS);
    });
  }

  // Metodo que extrae los paises para cargarlos en el select
  getPais(): string[]{
    WRITERS.forEach(element => {
      this.paises.push(element.pais);
    });    
    const arrFilterPais = this.paises.filter((pais, index) => {
      return this.paises.indexOf(pais) === index;
    });
    return arrFilterPais;
  }

  // Metodo para filtrar los esxritores por pais
  filterByPais(pPais: string): Promise<Writer[]>{
    return new Promise((resolve, reject)=>{
      const arrFilter = WRITERS.filter(escritor => {
        return escritor.pais === pPais;
      });
      resolve(arrFilter);
    });  
  }

  getNameWriter(pId: number): string{ 
    var auxE: string;   
    const writer = WRITERS.find((element)=>{
      if(element.id === pId){
        auxE = element.nombre;
      }
    });
    return auxE;
  }

  getByID(pId: number): Promise<Writer>{
    return new Promise((resolve, reject)=>{
      const escritorFound = WRITERS.find(writer =>{
        return writer.id === pId
      });
      resolve(escritorFound);
    });
  }



}
