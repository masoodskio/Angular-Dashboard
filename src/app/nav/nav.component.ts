import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { delay, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  iconsOnly: boolean = false;
  constructor(private breakpointObserver: BreakpointObserver) {}

  ngAfterViewInit() {
    this.breakpointObserver
      .observe(['(max-width: 800px)'])
      .pipe(delay(1),
        shareReplay()
      )
      .subscribe((res) => {
        if (res.matches) {
          this.iconsOnly = true;
        } else {
          this.iconsOnly=false;
        }
      });
  }

}
          