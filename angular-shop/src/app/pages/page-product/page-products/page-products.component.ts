import { ProductsService } from '../../../shared/service/products.service';
import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-page-products',
  templateUrl: './page-products.component.html',
  styleUrls: ['./page-products.component.scss']
})
export class PageProductsComponent implements OnInit {

 @Input() products: any[] = []
 @Input() stars: any = []




  constructor(private productService:ProductsService) { }



  ngOnInit(): void {
    this.productService.getProducts().subscribe((res:any) => {
      console.log(res)

      this.products = res

  })


  }
}