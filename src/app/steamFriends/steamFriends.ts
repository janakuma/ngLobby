import { Component } from '@angular/core';

export class Player {
  img: string;
  name: string;
  group: string;
}

const PLAYERS: Player[] = [
  { img: '_profile.jpg', name: 'Mr. Nice1', group: 'online' },
  { img: '_profile1.jpg', name: 'Mr. Nice2', group: 'online' },
  { img: '_profile2.jpg', name: 'Mr. Nice3', group: 'team' },
  { img: '_profile3.jpg', name: 'Mr. Nice4', group: 'team' },
  { img: '_profile4.jpg', name: 'Mr. Nice5', group: 'team' },
  { img: '_profile5.jpg', name: 'Mr. Nice6', group: 'online' },
  { img: '_profile6.jpg', name: 'Mr. Nice7', group: 'online' },
  { img: '_profile7.jpg', name: 'Mr. Nice8', group: 'offline' },
  { img: '_profile8.jpg', name: 'Mr. Nice9', group: 'offline' },
  { img: '_profile9.jpg', name: 'Mr. Nice10', group: 'online' },
  { img: '_profile10.jpg', name: 'Mr. Nice11', group: 'offline' },
  { img: '_profile11.jpg', name: 'Mr. Nice12', group: 'offline' }
]

@Component({
  selector: 'steamFriends',
  templateUrl: './steamFriends.html',
})

export class SteamFriends {
  players = PLAYERS;
}
