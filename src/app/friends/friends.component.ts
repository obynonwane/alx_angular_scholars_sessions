import { Component, OnInit } from '@angular/core';
import { Friend } from './model/friend';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
})
export class FriendsComponent implements OnInit {
  listOfFriends: Friend[] = [];
  title = 'List of my childhood friend';
  friendExist: boolean = false;

  ngOnInit(): void {
    this.listOfFriends = [
      { id: 1, name: 'Carlo', age: 22, nationality: 'Ethiopia' },
      { id: 2, name: 'Mamdou', age: 21, nationality: 'Senegal' },
      { id: 3, name: 'Samule', age: 19, nationality: 'Nigeria' },
      { id: 4, name: 'Sale', age: 24, nationality: 'Ghana' },
    ];

    this.checkFriendExist();
  }

  checkFriendExist() {
    if (this.listOfFriends.length > 0) {
      this.friendExist = true;
    } else {
      this.friendExist = false;
    }
  }
}
