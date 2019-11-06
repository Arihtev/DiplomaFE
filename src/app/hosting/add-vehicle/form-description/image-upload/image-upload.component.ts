import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CarDatabaseService } from 'src/app/services/car-database/car-database.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  
  @Output() messageEvent = new EventEmitter<any[]>();
  
  files: any = [];
  urls: any = [];

  filesBase64: any[] = []

  printInfo(){
    console.log(this.filesBase64)
  }
  
  drop(event) {
    // console.log(event)
    moveItemInArray(this.files, event.previousIndex, event.currentIndex);
    moveItemInArray(this.urls, event.previousIndex, event.currentIndex);
    // console.log(this.files)
    this.detectFiles()
  }

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element)
    }  
    this.detectFiles();
    // console.log(event[0])
  }

  deleteAttachment(index) {
    this.files.splice(index, 1);
    this.urls.splice(index, 1);
    this.filesBase64.splice(index, 1);
    this.sendImages()
  }

  constructor(private service: HttpClient) { }

  detectFiles(){
    this.urls = [];
    this.filesBase64 = []
    if (this.files){
      for (let file of this.files) {
        // let element = this.files[index]
        let reader = new FileReader();
          reader.onload = (e: any) => {
            this.urls.push(e.target.result);
          }
          reader.readAsDataURL(file);

        this.changeSelected(file);
        }
      }
    this.sendImages()
  }

  changeSelected(img) {
    // console.log(img)
    var reader = new FileReader();
    reader.readAsDataURL(img); 
    reader.onloadend = (e) => {
    //  this.filesBase64 = reader.result;
    // this.filesBase64.push(1)
    //  console.log(reader.result);
    this.filesBase64.push({picture: reader.result})
    }
  }

  upload(){
    this.detectFiles()
  }

  progress() {
    console.log(this.files)
    console.log(this.urls)
  }

  ngOnInit() {
  }

  sendImages() {
    // console.log("emitting")
    this.messageEvent.emit(this.filesBase64)
  }

}
