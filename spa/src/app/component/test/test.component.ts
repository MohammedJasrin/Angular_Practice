import { NgOptimizedImage } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-test',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {

  photos:Array<Album> = [];

  constructor(private http:HttpClient){
    http.get<Album[]>("https://jsonplaceholder.typicode.com/photos").subscribe({
      next:(data)=>{
        this.photos = data
      },
      error:(err)=>console.log(err)
    })
  }

}

interface Album{
    albumId: string,
    id: number,
    title: string,
    url: string,
    thumbnailUrl: string
}