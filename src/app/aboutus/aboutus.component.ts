import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  title ='Angular + HTML + CSS + TypeScript Application';
  description = 'Using Rick and Morty API'
  dateDone = 'Exercise carried out on 06/07/2022'
  programedBy = ' and programed by Octavio Bernal'
  constructor() { }

  ngOnInit(): void {
  }

}
