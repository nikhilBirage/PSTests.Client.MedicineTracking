import { Component, OnInit } from '@angular/core';
import { MedicineService } from '../shared/services/medicine.service';
import { IMedicine } from '../shared/models/medicine.model';
import * as moment from 'moment';

@Component({
  selector: 'app-medicine-list',
  templateUrl: './medicine-list.component.html',
  styleUrls: ['./medicine-list.component.css']
})
export class MedicineListComponent implements OnInit {
  medicineList: IMedicine[] = [];
  constructor(
    private readonly medicineService: MedicineService
  ) { }

  async ngOnInit(): Promise<void> {
    this.medicineList = await this.medicineService.GetMedicines().toPromise();
  }

  checkExpiryState(date: Date): string {
    return moment(new Date()).add(30, 'days').isSameOrBefore(moment(date)) ? 'not-expired' : 'expired';
  }

}
