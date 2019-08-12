import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  todos = [
    {
      name: 'Angular',
      category: 'Web Development'
    },
    {
      name: 'Flexbox',
      category: 'Web Development'
    },
    {
      name: 'iOS',
      category: 'App Development'
    },
    {
      name: 'Java',
      category: 'Software development'
    }
  ];

  onDrop(event) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }

  
  files: any = [];
  urls: any = [];

  printInfo(){
    console.log(this.files)
  }
  
  drop(event) {
    console.log(event)
    moveItemInArray(this.files, event.previousIndex, event.currentIndex);
    moveItemInArray(this.urls, event.previousIndex, event.currentIndex);
  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element)
    }  
    this.detectFiles();
  }
  deleteAttachment(index) {
    this.files.splice(index, 1);
    this.urls.splice(index, 1);
  }

  constructor() { }

  detectFiles(){
    this.urls = [];
    if (this.files){
    for (let file of this.files) {
      // let element = this.files[index]
      let reader = new FileReader();
        reader.onload = (e: any) => {
          this.urls.push(e.target.result);
        }
        reader.readAsDataURL(file);
      }
    }
  }

  ngOnInit() {
  }

}
