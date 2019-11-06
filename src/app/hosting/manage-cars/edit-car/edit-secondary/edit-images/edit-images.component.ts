import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { moveItemInArray } from '@angular/cdk/drag-drop';
import { ICar } from 'src/app/models/site-db/cars';

@Component({
  selector: 'app-edit-images',
  templateUrl: './edit-images.component.html',
  styleUrls: ['./edit-images.component.scss']
})
export class EditImagesComponent implements OnInit {

  @Input() car: ICar

  @Output() messageEvent = new EventEmitter<any[]>();

  files: any = [];
  urls: any = [];
  filelist: FormData = new FormData

  myFile

  filesBase64: any[] = []


  drop(event) {
    // console.log(event)
    moveItemInArray(this.files, event.previousIndex, event.currentIndex);
    moveItemInArray(this.urls, event.previousIndex, event.currentIndex);
    // console.log(this.files)
    this.detectFiles()
  }

  uploadFile(event) {
    console.log(event)
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

  constructor() { }

  detectFiles() {
    this.urls = [];
    this.filesBase64 = []
    if (this.files) {
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
      this.filesBase64.push({ picture: reader.result })
    }
  }

  upload() {
    this.detectFiles()
  }

  progress() {
    console.log(this.files)
    console.log(this.urls)
    console.log(this.filesBase64)
  }

  ngOnInit() {
    this.getFiles()
    // this.detectFiles()
  }

  getFiles(){
    let files = new FormData
    let pics = this.car.pictures
    console.log(pics)
    // this.car.pictures.forEach(picture => {
    for (let i=0; i < pics.length; i++){
      var request = new XMLHttpRequest();
      request.open('GET', pics[i].picture, true);
      request.responseType = 'blob';
      request.onloadend = (e: any) => {
        let blob = e.currentTarget.response
        let file = new File([blob], "image"+i, { type: "image/png", lastModified: new Date().getMilliseconds() })
        // console.log(file)
        // let number = i.toString()
        // let obj = {number: file}
        // this.filelist.append(number, file)
        this.files.push(file);
      }
      request.send();
    };
    // console.log(files)
    // this.detectFiles()
  }
  
  getPictures(){
    this.car.pictures.forEach(picture => {
      var request = new XMLHttpRequest();
      request.open('GET', picture.picture, true);
      request.responseType = 'blob';
      request.onloadend = (e: any) => {
        let blob = e.currentTarget.response
        let file = new File([blob], "fisss", { type: "image/png", lastModified: new Date().getMilliseconds() })
        this.files.push(file);
        this.decodeBlob(blob)
      }
      request.send();
    
    });
  }

  decodeBlob(blob) {
    var reader = new FileReader();
    reader.readAsDataURL(blob); 
    reader.onloadend = (e) => {
      this.urls.push(reader.result)
    }
  }

  showFile(file){
    console.log(file)
  }

  sendImages() {
    // console.log("emitting")
    this.messageEvent.emit(this.filesBase64)
  }

  detect(){
    this.detectFiles()
  }

  printInfo() {
    // console.log(this.response)
    console.log(this.files)
    console.log(this.urls)
    console.log(this.filelist)
    // console.log(this.myFile)
  }

}
