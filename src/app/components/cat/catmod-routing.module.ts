import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { SubcategoryComponent } from './subcategory/subcategory.component';

import { ProductsComponent } from './products/products.component';

import { ProductDetailComponent } from './product-detail/product-detail.component';



const routes: Routes = [

{path:'subcategory/:id',component:SubcategoryComponent},

{path:'products/:id',component:ProductsComponent},

{path:'productdetail/:id',component:ProductDetailComponent}

];



@NgModule({

  imports: [RouterModule.forChild(routes)],

  exports: [RouterModule]

})

export class CatmodRoutingModule { }
