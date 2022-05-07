import { Component, OnInit } from '@angular/core';
import {User} from '../../../models/Users';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  User?: User[];
  constructor() { }

  ngOnInit(): void {
  }
  search({chaine}: { chaine: any }) {
    console.log(chaine);
  }
}
