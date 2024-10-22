import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-all-page-title',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './all-page-title.component.html',
  styleUrl: './all-page-title.component.scss'
})
export class AllPageTitleComponent {
  dateNow = new Date
}
