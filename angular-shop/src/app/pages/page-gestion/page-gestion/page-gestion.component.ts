import { ProductsService } from '../../../shared/service/products.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-gestion',
  templateUrl: './page-gestion.component.html',
  styleUrls: ['./page-gestion.component.scss']
})
export class PageGestionComponent implements OnInit {

  userRegisterForm!:FormGroup

  constructor(private formBuilder: FormBuilder,private productService:ProductsService,private router:Router) { }

  nuevoProducto!: any

  ngOnInit(): void {
    this.userRegisterForm=this.formBuilder.group({

      name:["",[Validators.required,Validators.minLength(3)]],
      price:["",[Validators.required,Validators.minLength(1)]],
      description:["",[Validators.required,Validators.minLength(5)]],
      stars:["",[Validators.required,Validators.minLength(1)]],
      image:["",[Validators.required,Validators.minLength(5)]]
    })
  }
  submit(){

    this.nuevoProducto = this.userRegisterForm.value
    console.log(this.nuevoProducto)

    this.productService.addProduct(this.nuevoProducto)

    console.log("ok")
    this.userRegisterForm.reset()

    this.router.navigate(['/products'])

  }

}