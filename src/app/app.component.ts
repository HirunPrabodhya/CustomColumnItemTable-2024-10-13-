import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { SectionTableComponent } from './Tables/section-table/section-table.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SectionTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sectionOrder';
}
