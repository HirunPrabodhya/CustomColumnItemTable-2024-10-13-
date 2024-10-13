import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-division-table',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './division-table.component.html',
  styleUrl: './division-table.component.scss'
})
export class DivisionTableComponent {
    divisionData = [
      {
         divisionId:1,
         divisionName:'d-01'
      },
      {
        divisionId:2,
        divisionName:'d-02'
      },
      {
        divisionId:3,
        divisionName:'d-03'
      }
    ]
}
