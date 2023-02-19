import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {

  courses = [
    {id:101, name:'JavaScript for beginers', author: 'John Heikela', duration: 48, type:'Free', price: 0.00, rating:3.5, image:'assets/courses/course-image-1.jpeg',
     description:'in this course you will learn the fundamentalsl of javascript.'},
     {id:102, name:'JavaScript for beginers', author: 'John Heikela', duration: 48, type:'Free', price: 0.00, rating:3.5, image:'assets/courses/course-image-1.jpeg',
     description:'in this course you will learn the fundamentalsl of javascript.'},
     {id:103, name:'JavaScript for beginers', author: 'John Heikela', duration: 48, type:'Free', price: 0.00, rating:3.5, image:'assets/courses/course-image-1.jpeg',
     description:'in this course you will learn the fundamentalsl of javascript.'},
     {id:104, name:'JavaScript for beginers', author: 'John Heikela', duration: 48, type:'Free', price: 0.00, rating:3.5, image:'assets/courses/course-image-1.jpeg',
     description:'in this course you will learn the fundamentalsl of javascript.'},
     {id:105, name:'JavaScript for beginers', author: 'John Heikela', duration: 48, type:'Free', price: 0.00, rating:3.5, image:'assets/courses/course-image-1.jpeg',
     description:'in this course you will learn the fundamentalsl of javascript.'},
     {id:106, name:'JavaScript for beginers', author: 'John Heikela', duration: 48, type:'Free', price: 0.00, rating:3.5, image:'assets/courses/course-image-1.jpeg',
     description:'in this course you will learn the fundamentalsl of javascript.'},
     {id:107, name:'JavaScript for beginers', author: 'John Heikela', duration: 48, type:'Premium', price: 0.00, rating:3.5, image:'assets/courses/course-image-1.jpeg',
     description:'in this course you will learn the fundamentalsl of javascript.'},
     {id:108, name:'JavaScript for beginers', author: 'John Heikela', duration: 48, type:'Free', price: 0.00, rating:3.5, image:'assets/courses/course-image-1.jpeg',
     description:'in this course you will learn the fundamentalsl of javascript.'},
     {id:109, name:'JavaScript for beginers', author: 'John Heikela', duration: 48, type:'Free', price: 0.00, rating:3.5, image:'assets/courses/course-image-1.jpeg',
     description:'in this course you will learn the fundamentalsl of javascript.'},
     {id:110, name:'JavaScript for beginers', author: 'John Heikela', duration: 48, type:'Free', price: 0.00, rating:3.5, image:'assets/courses/course-image-1.jpeg',
     description:'in this course you will learn the fundamentalsl of javascript.'},
     {id:111, name:'JavaScript for beginers', author: 'John Heikela', duration: 48, type:'Premium', price: 0.00, rating:3.5, image:'assets/courses/course-image-1.jpeg',
     description:'in this course you will learn the fundamentalsl of javascript.'},

  ]
  getTotalCourses(){
    return this.courses.length;
  }
  getTotalFreeCourses(){
    return this.courses.filter(course => course.type==='Free').length;
  }
  getTotalPremiumCourses(){
    return this.courses.filter(course => course.type ==='Premium').length;
  }


  courseCountRadioButton: string = 'All';

  onFilterRadioButtonChanged(data: string){
    this.courseCountRadioButton = data;
    console.log('checking: ', this.courseCountRadioButton);

  }
}
