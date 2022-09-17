import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimeInterval } from 'rxjs/internal/operators/timeInterval';

@Component({
  selector: 'app-stop-watch',
  templateUrl: './stop-watch.component.html',
  styleUrls: ['./stop-watch.component.scss'],
})
export class StopWatchComponent implements OnDestroy {
  mm = 0;
  ss = 0;
  ms = 0;
  isRunning = false;
  timerId = 0;
  timerInterval: any;

  clickHandler() {
    if (!this.isRunning) {
      // Stop => Running
      this.timerInterval = setInterval(() => {
        this.ms++;

        if (this.ms >= 100) {
          this.ss++;
          this.ms = 0;
        }
        if (this.ss >= 60) {
          this.mm++;
          this.ss = 0;
        }
      }, 10);
    } else {
      clearInterval(this.timerInterval);
    }
    this.isRunning = !this.isRunning;
  }

  format(num: number) {
    return (num + '').length === 1 ? '0' + num : num + '';
  }
  ngOnDestroy(): void {
    clearInterval(this.timerInterval);
  }
}
