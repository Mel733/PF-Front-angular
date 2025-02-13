import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-friend',
  imports: [],
  templateUrl: './friend.component.html',
  styleUrl: './friend.component.css'
})
export class FriendComponent implements OnInit{
  friend: any;
  router: ActivatedRoute = inject(ActivatedRoute);
  http: HttpClient = inject(HttpClient);
  ngOnInit(): void {
    this.router.params.subscribe(params => {
      const id = params['id'];
      this.http.get<any>('http://localhost:3000/api/friends/'+id).subscribe(( friend:any )=> {
        this.friend = friend;
      })
    })
  }

}
