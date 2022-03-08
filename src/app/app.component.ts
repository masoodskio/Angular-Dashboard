import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, shareReplay } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

@ViewChild(MatSidenav) sidenav!: MatSidenav;
currentYear: number=new Date().getFullYear();
title ="Angular Dashboard";

constructor(private breakpointObserver: BreakpointObserver) {}

ngAfterViewInit() {
  this.sidenav.mode = 'side';

  this.breakpointObserver
    .observe(['(max-width: 800px)'])
    .pipe(delay(1),
      shareReplay()
    )
    .subscribe((res) => {
      if (res.matches) {
         this.sidenav.close();
      } else {
         this.sidenav.open();
      }
    });
}}