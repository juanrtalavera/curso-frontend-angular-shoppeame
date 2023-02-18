import { ProductsService } from '../../../shared/service/products.service';
import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-page-product-detail',
  templateUrl: './page-product-detail.component.html',
  styleUrls: ['./page-product-detail.component.scss']
})
export class PageProductDetailComponent implements OnInit {

  @Input() stars:any = []
  product!:any
  id!:number
  userRegisterForm!:FormGroup



  constructor(private productService:ProductsService,private activatedRoute:ActivatedRoute,private router:Router,private formBuilder: FormBuilder) { }

  nuevoProducto: any = this.product


  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params =>{
      this.id =Number(params.get('id'))
      this.productService.getProductByid(this.id).subscribe((data:any) => {this.product =data})
    })
    this.userRegisterForm=this.formBuilder.group({

      name:["",[Validators.required,Validators.minLength(4)]],
      price:["",[Validators.required]],
      description:["",[Validators.required]],
      stars:["",[Validators.required]],
      image:["",[Validators.required]],

    })


  }
  submit(){

    this.nuevoProducto = this.userRegisterForm.value
    this.nuevoProducto.id = this.id
    console.log(this.nuevoProducto)
    this.productService.putProduct(this.nuevoProducto).subscribe()
    this.userRegisterForm.reset()
    window.location.reload()

  }

  eliminar(){
    this.activatedRoute.paramMap.subscribe(params =>{
      this.id =Number(params.get('id'))
      this.productService.delete(this.id).subscribe((data:any) => {this.product =data})
      this.router.navigate(['/products'])
    })
  }
}
