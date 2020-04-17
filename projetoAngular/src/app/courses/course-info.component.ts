import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from './course.service';
import { Course } from './course';

@Component({
  templateUrl: './course-info.component.html'
})

export class CourseInfoComponent implements OnInit {

  course: Course;

  constructor(private activedRoute: ActivatedRoute, private courseServie: CourseService) {}

  ngOnInit(): void {
    this.course = this.courseServie.retrieveById(+this.activedRoute.snapshot.paramMap.get('id'));
  }

  save(): void {
    this.courseServie.save(this.course);
  }

}
