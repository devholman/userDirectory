import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { User } from '../user.model';
import { phone } from '../../../../assets/svg-icons/card-svg.js';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent implements OnInit {
  @Input() user: User;
  constructor() {}

  ngOnInit() {}
}
