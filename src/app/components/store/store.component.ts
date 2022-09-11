import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {


  categories:any;
  products:any;

  constructor( 
               private categoryService: CategoryService,
               private productService: ProductService,
               private toast:ToastrService
             ) { }

  ngOnInit(): void {

    this.getProducts()

    this.getCategories()

  }


  // get all categories
  getCategories(){

    this.categoryService.loadCategories().subscribe({

      next:(data)=>{
          console.log(data)
          this.categories=data
      },
      error:(error)=>{
          console.log(error)
          this.toast.error("Error in loading categories")
      },
      complete:()=>{

      }

    })
  }



  // get Products
  getProducts(){

    this.productService.loadProducts().subscribe({
      next:(data)=>{
          console.log(data)
          this.products=data
      },
      error:(error)=>{
          console.log(error)
          this.toast.error("Error in loading products")
      },
      complete:()=>{

      }
    })

  }

  

}
