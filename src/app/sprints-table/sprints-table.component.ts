import { Component, OnInit } from '@angular/core';
import { KpiService} from '../services/kpi.service';
@Component({
  selector: 'app-sprints-table',
  templateUrl: './sprints-table.component.html',
  styleUrl: './sprints-table.component.css'
})
export class SprintsTableComponent implements OnInit {
  sprints: any[] = [];
  sprintData: any[] = [];
  displayedColumns: string[] = ['name', 'startDate', 'endDate', 'state'];

  constructor(private kpiService: KpiService) {}

  ngOnInit(): void {
    this.kpiService.getSprints().subscribe(
      (data) => {
      this.sprints = data;
      this.makeDataOrdered();
    });
   
    
  }
  makeDataOrdered(): void {
    const sortedNames = this.sprints.map(v => v.name.replace(/^Tableau\s/, ''))
      .sort((b, a) => a.localeCompare(b, undefined, { numeric: true })); // Trier de manière alphanumérique
    this.sprintData=sortedNames.map(name =>
      this.sprints.find(v => v.name.replace(/^Tableau\s/, '') === name)
    );
    this.sprintData.forEach(v =>
      v.name=v.name.replace(/^Tableau\s/, '')
    )
  }
}
