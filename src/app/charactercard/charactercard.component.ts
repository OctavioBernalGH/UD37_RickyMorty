import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-charactercard',
  templateUrl: './charactercard.component.html',
  styleUrls: ['./charactercard.component.css']
})
export class CharactercardComponent implements OnInit {

  personajes:any = null;

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5,6").subscribe(
      result => {
        this.personajes = result;
      },
      error => {
        console.log('Error occurred')
      }
    )
  }

}
