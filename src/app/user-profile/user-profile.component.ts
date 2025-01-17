import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
    private apiUrl="http://localhost:8080/member/kpi/2";
    completedStoryPoints: number = 0;
    tasksToDo: number=0;
    tasksCompleted: number=0;
    isLoading: boolean= true;

    constructor(private http: HttpClient){}
    getScrumMemberKpi(): Observable<any>{
      return this.http.get<any>(`${this.apiUrl}`);
    }
    ngOnInit(): void {
        this.fetchMemberKpi();
    }
    fetchMemberKpi():void{
      this.getScrumMemberKpi().subscribe(
        (response) =>{
            this.completedStoryPoints=response.totalStoryPoints;
            this.tasksCompleted=response.tasksCompleted;
            this.tasksToDo=response.tasksToDo;
            this.isLoading = false;
        }
      )
    }
}
