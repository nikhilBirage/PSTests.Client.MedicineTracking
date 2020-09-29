import { CommonModule } from '@angular/common';
import { ManageMedicineComponent } from './manage-medicine/manage-medicine.component';
import { MedicineDetailsComponent } from './medicine-details/medicine-details.component';
import { NgModule } from '@angular/core';
import { MedicineListComponent } from './medicine-list/medicine-list.component';

@NgModule({
    declarations: [
        ManageMedicineComponent,
        MedicineDetailsComponent,
        MedicineListComponent
    ],
    imports: [
        CommonModule
    ],
    providers: []
})
export class MedicineModule { }