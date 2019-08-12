import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  files: any = [];
  urls: any = [];
  
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
