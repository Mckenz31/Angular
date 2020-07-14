import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.css']
})
export class ErrorPageComponent implements OnInit {

  errorMessage:string;

  constructor(private activRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.errorMessage = this.activRoute.snapshot.data['message'];
    this.activRoute.data.subscribe(
      (data: Data) => {
        this.errorMessage = data['message'];
      }
    )
  }

}
