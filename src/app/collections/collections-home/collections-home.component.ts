import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent implements OnInit {


  data = [
    { name: 'Sabelo', age: 21, job: 'Software Engineer', employed: true },
    { name: 'Jake', age: 19, job: 'Frontend Developer', employed: false },
    { name: 'Sakhile', age: 25, job: 'Backend Engineer', employed: true }
  ];

  headers = [
    { key: 'employed', label: 'Has a Job?' },
    { key: 'name', label: 'Name' },
    { key: 'age', label: 'Age' },
    { key: 'job', label: 'Job' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
