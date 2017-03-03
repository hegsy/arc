import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TaskListPage } from '../task-list/task-list';
import { ReportPage } from '../report/report';

import { TaskCategory } from '../task-category';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
export class TasksPage {

  artasks: TaskCategory[];
  socialtasks: TaskCategory[];
  clubtasks: TaskCategory[];
  exploretasks: TaskCategory[];
  foodtasks: TaskCategory[];
  campustasks: TaskCategory[];

  constructor(public nav: NavController) {


        this.artasks = [
        {title: "Library", desc: "Scan Poster for More Information", credits: 100},
        {title: "Canteen", desc: "Scan Poster for More Information", credits: 100},
        {title: "Health", desc: "Scan Poster for More Information", credits: 100},
        {title: "Computers", desc: "Scan Poster for More Information", credits: 100},
        {title: "Counselling", desc: "Scan Poster for More Information", credits: 100},
        {title: "Careers", desc: "Scan Poster for More Information", credits: 100}
    ];

        this.socialtasks = [
        {title: "Add a Friend", desc: "Add someone to your list of friends", credits: 100},
        {title: "Add 20 Friends", desc: "Make 20 new Friends on ARC", credits: 2000},
        {title: "Add 5 Classmates", desc: "Add Friends on the same Course", credits: 500},
        {title: "Add 5 Non-Classmates", desc: "Add Friends on a different Course", credits: 500},
        {title: "Add 3 Friends in a different Year", desc: "Add Friends who are not in the same year as you", credits: 300},
        {title: "Profile Picture", desc: "Add a Photo to your Profile", credits: 200}
    ];

    this.clubtasks = [
        {title: "Join a Club", desc: "Become a member of a club on campus", credits: 1000},
        {title: "Try 3 Clubs", desc: "Get a taste for different clubs on campus", credits: 3000},
        {title: "Write a Clubs Post", desc: "Talk about your club using the Clubs post category", credits: 200},
        {title: "Attend Event", desc: "Go to an event organised by your club", credits: 500},
        {title: "New Club", desc: "Create a new Club!", credits: 5000},
        {title: "Bring a Friend", desc: "Get a Friend to Join a Club", credits: 2000}
    ];

    this.exploretasks = [
        {title: "Take a Bus to Campus", desc: "Find out which bus takes you to College", credits: 400},
        {title: "Taxi Home", desc: "How much does a taxi from town cost?", credits: 200},
        {title: "Ask for Directions", desc: "Find where you're looking for by asking others in an Explore post category", credits: 500},
        {title: "Recommend a venue for Class Party", desc: "Write an Explore post to recommend a venue to others", credits: 500},
        {title: "Find the nearest ATM", desc: "Locate nearest place to get cash!", credits: 200},
        {title: "Go to the Cinema", desc: "Find the local cinema and bring friends!", credits: 400}
    ];

    this.foodtasks = [
        {title: "Recommend a Cafe", desc: "Write an Explore post to recommend a Cafe to others", credits: 500},
        {title: "Find your nearest pub", desc: "Where is the nearest place for a tipple?", credits: 200},
        {title: "Go to the Nearest Shop", desc: "Where is the handiest place to get emergency shopping?", credits: 500},
        {title: "Canteen", desc: "Grab lunch on campus in the Canteen", credits: 500},
        {title: "Rate the Food", desc: "Rate the food on campus using Campus category", credits: 200},
        {title: "Cook Dinner for your Housemates", desc: "Challenge yourself to prepare a home-cooked meal for 4", credits: 2000}
    ];

    this.campustasks = [
        {title: "Find your Classrooms", desc: "Locate all the rooms on your timetable", credits: 500},
        {title: "Check out a Library Book", desc: "Use your student card to check out a book", credits: 600},
        {title: "Ask for advice", desc: "Ask others for help or information using the Information post category", credits: 500},
        {title: "Organise an event", desc: "Post an event in the Event post category", credits: 800},
        {title: "Attend an event", desc: "Go to an on-campus event and post about it using the Campus post category!", credits: 600}
        
    ];
  }

    ionViewDidLoad() {
    console.log('Hello TasksPage Page');
    }
  
    goToTaskList(array) {
        this.nav.push(TaskListPage, {
          taskCategory: array,

        });
    }
    
    goToReport() {
        this.nav.push(ReportPage);
    }


}
