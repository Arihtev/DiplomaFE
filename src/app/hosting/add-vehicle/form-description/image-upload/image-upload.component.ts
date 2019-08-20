import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { CarDatabaseService } from 'src/app/services/car-database/car-database.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {
  
  files: any = [];
  urls: any = [];
  selectedFile: File = null;
  fdd: FormData = new FormData
  photoFile: any

  printInfo(){
    // console.log(this.files[0])
    // let selectedFile = <File>this.files[0]
    // const fd = new FormData();
    // fd.append('image', selectedFile, selectedFile.name);
    console.log(this.selectedFile)
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
    // console.log(event[0])
    this.selectedFile = <File>event[0]
  }

  deleteAttachment(index) {
    this.files.splice(index, 1);
    this.urls.splice(index, 1);
  }

  constructor(private service: HttpClient) { }

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

  changes(){

  }

  upload(){
    // console.log(typeof this.files[0])
    // let selectedFile = <File>this.files[0]
    var reader = new FileReader();
    this.photoFile = reader.result
    console.log(reader.result)
    
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    // formData.append('file', file);
    // var options = { content: FormData };
    // console.log(fd)
    // console.log(this.files)
    // this.service.createCar("2004", "BMW", [], fd).subscribe(res => {
    //   console.log(res)
    // })
    this.service.post('http://127.0.0.1:8000/cars/create/', {
      year: 2004,
      make: "BMW",
      picture: fd
    }).subscribe(res => {
      console.log(res)
    })
  }

  progress() {
    // console.log(this.fd)
  }

  ngOnInit() {
  }

}
