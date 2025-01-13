import { Component, OnInit } from '@angular/core';
import { KpiService } from '../../services/kpi.service';
import { Sprint } from './sprint';

@Component({
  selector: 'app-sprint-list',
  templateUrl: './sprint-list.component.html',
  styleUrls: ['./sprint-list.component.css']
})
export class SprintListComponent implements OnInit {
  sprints: Sprint[] = [];
  filteredSprints: Sprint[] = [];
  years: string[] = [];
  states: string[] = ['All', 'Active', 'Closed'];
  selectedYear: string = 'All';
  selectedState: string = 'All';

  constructor(private kpiService: KpiService) {}

  ngOnInit(): void {
    this.kpiService.getSprints().subscribe((data: Sprint[]) => {
      this.sprints = data;

      // Extract and sort years in descending order
      this.years = Array.from(new Set(this.sprints.map(s =>
        new Date(s.startDate).getFullYear().toString()
      ))).sort((a, b) => parseInt(b) - parseInt(a));
      this.years.unshift('All'); // Add "All" option for showing all sprints

      // Set default selected year and state, then filter sprints
      this.selectedYear = this.years[0];
      this.selectedState = 'All';
      this.filterSprints();
    });
  }

  filterSprints(): void {
    this.filteredSprints = this.sprints
      .filter(sprint => (this.selectedYear === 'All' || new Date(sprint.startDate).getFullYear().toString() === this.selectedYear))
      .filter(sprint => (this.selectedState === 'All' || sprint.state.toLowerCase() === this.selectedState.toLowerCase()));
  }

  onYearSelectionChange(): void {
    this.filterSprints();
  }

  onStateSelectionChange(): void {
    this.filterSprints();
  }
}
