import {Component, inject, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-friends',
  imports: [RouterLink],
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.css'
})
export class FriendsComponent implements OnInit {
  friends:any[]=[]
  http=inject(HttpClient)
  createName:string = '';

  ngOnInit(): void {
  this.listUsers();
  }

   listUsers() {
    this.http.get<any[]>('http://localhost:3000/api/friends').subscribe((friends: any[]): void => {
      this.friends = friends
    })
  }

  deleteFriend(i: number) {
    this.http.delete('http://localhost:3000/api/friends/'+i).subscribe((  )=> {
      this.listUsers()
    })
  }

  createFriend() {
    this.http.post('http://localhost:3000/api/friends', { name: this.createName}).subscribe((  )=> {
      this.listUsers()
    })
  }

  changeCreateName(event: any) {
     this.createName = event.target.value;
  }

  updateFriend(i: number, friend: any) {
    this.http.put('http://localhost:3000/api/friends/'+i, friend).subscribe((  )=> {
      this.listUsers()
    })
  }

  changeUpdateName(event: any, i: number) {
    this.friends[i].name = event.target.value;
  }
}
