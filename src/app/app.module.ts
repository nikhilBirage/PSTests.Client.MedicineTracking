import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MedicineListComponent } from './medicine-list/medicine-list.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { ManageMedicineComponent } from './manage-medicine/manage-medicine.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { CommonModule } from '@angular/common';
import { MedicineModule } from './medicine.module';

const routes = [
  { path: 'medicines', component: MedicineListComponent },
  { path: 'add-medicines', component: ManageMedicineComponent },
  { path: 'edit-medicines/:id', component: ManageMedicineComponent },
  { path: 'medicines/:id', component: MedicineDetailsComponent },
  { path: '', redirectTo: '/medicines', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MedicineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
