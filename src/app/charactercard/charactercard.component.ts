import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RickmortyService } from '../rickmorty.service';

@Component({
  selector: 'app-charactercard',
  templateUrl: './charactercard.component.html',
  styleUrls: ['./charactercard.component.css']
})
export class CharactercardComponent implements OnInit {

  personajes:any = null;

  constructor(private rickmortyService: RickmortyService) { }

  ngOnInit(){
    this.rickmortyService.retornar().
    subscribe(result =>  this.personajes = result)
}
}
