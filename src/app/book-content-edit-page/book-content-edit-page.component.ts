import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-book-content-edit-page',
  templateUrl: './book-content-edit-page.component.html',
  styleUrls: ['./book-content-edit-page.component.css']
})
export class BookContentEditPageComponent implements OnInit {
  bookId:string;
  displayParagraphBookForm:boolean = false;
  paragraphAudio:File;
  urlToAddParagraph:string = 'http://localhost:3000/api/addParagraph';

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.bookId = localStorage.getItem("bookIdForContributor")
  }

  onSubmitParagraph(postform:NgForm){
    const sendingData = {
      paragraphId:postform.value.paragraphId,
      paragraphTitle:postform.value.paragraphTitle,
      pragraphAudio:this.paragraphAudio
    }
    this.http.post(this.urlToAddParagraph,sendingData).subscribe();
  }

  onAddAudio(event:Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.paragraphAudio = file;
  }
}
