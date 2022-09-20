import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-small-exercise',
  templateUrl: './small-exercise.component.html',
  styleUrls: ['./small-exercise.component.css'],
})
export class SmallExerciseComponent implements OnInit, AfterViewInit {
  @ViewChild('element') div: any;

  ngOnInit() {
    this.delay(2000);
  }
  ngAfterViewInit() {
    this.animateRight(this.div.nativeElement);
  }

  // # 1 Returns a array with unique items
  removesDuplicates(arr: any) {
    return [...new Set(arr)];
  }

  // # 2  moves the element to the right by 100px over duration of 1 second
  animateRight(el: any) {
    setTimeout(() => {
      el.classList.add('active');
    }, 1000);
  }

  // # 3 Returns promise that is resolved after (argument) milliseconds

  delay(ms: number) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(resolve, ms);
    });
    promise
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
