import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../services/crud.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../entities/product.entity';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss'],
  providers:[CrudService]
})
export class GestionComponent implements OnInit {
id:any;
product : Product = new Product;
constructor(private crud:CrudService, private ac: ActivatedRoute, private rout:Router) {

    this.ac.params.subscribe(res=>{
      this.id = res.id;
      console.log(res);
    })
   }

  ngOnInit(): void {
    this.crud.geProductById(this.id).subscribe(res=>{
      this.product = <Product>res ;
    })
  }
   update(){

    this.crud.updateProductById(this.id, this.product).subscribe(
      res=>{console.log(res);
        this.rout.navigate(['listing']);
    
    })
   }

   create(){

    this.crud.addProduct(this.product).subscribe(
      res=>{console.log(res);
        this.rout.navigate(['listing']);
    
    })
   }
}
