import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { KpiService } from '../../services/kpi.service';
import { Semester } from './semester';
import { Chart, registerables } from 'chart.js';
import { isPlatformBrowser } from '@angular/common';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { PLATFORM_ID, Inject } from '@angular/core';

@Component({
  selector: 'app-velocity-per-semester-chart',
  templateUrl: './velocity-per-semester-chart.component.html',
  styleUrls: ['./velocity-per-semester-chart.component.css']
})
export class VelocityPerSemesterChartComponent implements OnInit, AfterViewInit {
  velocities: Semester[] = [];
  chart2: Chart | undefined;
  displayedColumns: string[] = ['semester', 'velocity']; // Define the columns for the table
  @ViewChild('velocityChartPerSemester', { static: false }) velocityChartPerSemester!: ElementRef;

  constructor(
    private KpiService: KpiService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      Chart.register(...registerables, ChartDataLabels); // Ensure this is browser-only
    }

    const staticData: Semester[] = [
      { semester: '2023-H1', velocity: 120 },
      { semester: '2023-H2', velocity: 130 },
      { semester: '2024-H1', velocity: 110 },
      { semester: '2022-H2', velocity: 100 },
    ];

    // Fetch dynamic data and merge with static data
    this.KpiService.getVelocityPerSemester().subscribe((data: Semester[]) => {
      const dynamicData = data.sort(this.sortSemesters);
      this.velocities = [...staticData, ...dynamicData].sort(this.sortSemesters);
      this.createChart(); // Ensure the chart is created after data is populated
    });
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.createChart();
    }
  }

  sortSemesters(a: Semester, b: Semester): number {
    const [yearA, halfA] = a.semester.split('-');
    const [yearB, halfB] = b.semester.split('-');
    if (yearA === yearB) {
      return halfA.localeCompare(halfB); // Sort by half if years are equal
    }
    return yearA.localeCompare(yearB); // Sort by year
  }

  createChart(): void {
    if (!isPlatformBrowser(this.platformId)) return; // Ensure this runs only in the browser

    const semesters = this.velocities.map(v => v.semester);
    const velocityValues = this.velocities.map(v => v.velocity);

    if (this.chart2) {
      this.chart2.destroy(); // Safely destroy existing chart
    }

    const ctx = this.velocityChartPerSemester.nativeElement.getContext('2d');
    if (ctx) {
      this.chart2 = new Chart(ctx, {
        type: 'line',
        data: {
          labels: semesters,
          datasets: [
            {
              label: 'Velocity',
              data: velocityValues,
              fill: true,
              borderColor: 'rgba(75, 192, 192, 1)',
              tension: 0.1,
            },
          ],
        },
        options: {
          plugins: {
            datalabels: {
              display: false,
              color: 'black',
              anchor: 'end',
              align: 'top',
              formatter: (value) => value.toFixed(2),
              font: {
                size: 12,
              },
              
              padding: {
                top: 4,
                bottom: 4,
              },
            },
            tooltip: {
              callbacks: {
                label: (context) => `Velocity: ${context.raw}`,
              },
              bodyFont: {
                size: 14,
              },
              titleFont: {
                size: 16,
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
              }
            },
            
          },
        },
      });
    }
  }
}
