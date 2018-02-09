import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutes } from '../app-routes';
import { HomeComponent } from '../home/home.component';
import { RecipesComponent } from '../recipes/recipes.component';
import { RecipeDetailComponent } from '../recipes/recipe-detail/recipe-detail.component';
import { ShoppingComponent } from '../shopping/shopping.component';
import { AuthGuardService } from '../shared/services/auth-guard.service';


const APPLICATION_ROUTES: Routes = [

  { path: AppRoutes.HOME, component: HomeComponent },

  { path: AppRoutes.RECIPES, component: RecipesComponent, children: [

    { path: ':id', component: RecipeDetailComponent }
  ] },

  { path: AppRoutes.SHOPPING, canActivate: [ AuthGuardService ], component: ShoppingComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot( APPLICATION_ROUTES )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }