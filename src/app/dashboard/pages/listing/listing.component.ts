import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CrudService } from '../../services/crud.service';
import { Product } from '../../entities/product.entity';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.scss'],
  providers:[CrudService]
})

export class ListingComponent implements OnInit {
term : any;
dsp: boolean ;
products : Array<Product>;
  constructor(private crud: CrudService, private root:Router) {
    console.log("Constructor running");
  
  }
getData(){

  this.crud.getProducts().subscribe(data=>{
    this.products = data as Array<Product>;
});
}
    ngOnInit(): void {
      
        this.getData();
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
delete(id){
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.crud.deleteProductById(id).subscribe(res=>{
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
        this.getData();
      })
     
    }
  })
}
}
