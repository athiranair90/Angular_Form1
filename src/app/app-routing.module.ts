import { NgModule } from '@angular/core';
import { RouterModule, Routes, ActivatedRoute, ParamMap} from '@angular/router';
import { UserFormComponent } from './user-form/user-form.component';

const routes: Routes = [
  { path: 'user-form', component: UserFormComponent }
   //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
