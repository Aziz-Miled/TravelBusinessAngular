import { Component, OnInit } from '@angular/core';
import { TravelProgramService } from '../../services/TravelProgramService'
import { User } from '../../interfaces/User'
import { HttpErrorResponse } from '@angular/common/http';
import { TravelProgram } from 'src/app/interfaces/TravelProgram';

@Component({
  selector: 'app-tables',
  templateUrl: './travelprograms.component.html',
  styleUrls: ['./travelprograms.component.scss']
})
export class TravelProgramComponent implements OnInit {
  public travelPrograms: TravelProgram[];

  constructor(private travelProgramService: TravelProgramService) { }

  ngOnInit() {
    this.getTravelPrograms();
  }

  public getTravelPrograms(): void {
    this.travelProgramService.getTravelPrograms().subscribe({
      next: (response: TravelProgram[]) => {
        this.travelPrograms = response;
        console.log(response);
        },
      error: (error: HttpErrorResponse) => {
          alert(error.message);
        },
      complete: () => {
        console.log('complete');
        }
    });
  }

}
