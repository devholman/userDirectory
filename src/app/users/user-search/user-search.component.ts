import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-user-search',
  templateUrl: './user-search.component.html',
  styleUrls: ['./user-search.component.css']
})
export class UserSearchComponent implements OnInit {
  @Input() loadedUsers;
  @Output() searchUsers = new EventEmitter();
  constructor() {}
  onSearchUser() {
    this.searchUsers.emit(event);
  }
  ngOnInit() {}
}
