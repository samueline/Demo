import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private products = [
    {
      id:1,
      name:'egg',
      category:'food',
      description:'lorem da egg',
      price:'$2'
    },
    {
      id:2,
      name:'Coca cola',
      category:'drink',
      description:'lorem da coca cola',
      price:'$2'
    },{
      id:3,
      name:'Cookie',
      category:'food',
      description:'lorem d cookie',
      price:'$2'
    }
  ];

  getAllProduct(){
    return this.products;
  }

  getProductById(id: string | number | null ){
    return this.products.filter((product)=> product.id == id);
  }
}
