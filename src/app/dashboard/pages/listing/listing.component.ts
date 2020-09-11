import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../../services/crud.service';
import { Product } from '../../entities/product.entity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  providers:[CrudService]
})
export class ListingComponent implements OnInit {

products : Array<Product>;
  constructor(private crud: CrudService, private root:Router) {
    console.log("Constructor running");
  
  }

    ngOnInit(): void {
      
      this.crud.getProducts().subscribe(data=>{
          this.products = data as Array<Product>;
      });
     }
     ngOnDestroy(): void {
     console.log('ngOnDestroy() called');
     }
     ngAfterContentInit() {
     console.log('ngAfterContentInit() called');
     } 

edit(prod){

  this.root.navigate(['gestion', {id:prod.id}])
}
delete(){

 // this.root.navigate('gestion', prod.id
}
}
