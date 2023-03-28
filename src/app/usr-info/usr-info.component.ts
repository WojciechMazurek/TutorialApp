import { HttpClient } from '@angular/common/http';
import { Component, Injectable, OnInit } from '@angular/core';
import { UserInfo } from './usr-info.model';


@Injectable()
@Component({
  selector: 'app-usr-info',
  templateUrl: './usr-info.component.html',
  styleUrls: ['./usr-info.component.css']
})
export class UsrInfoComponent implements OnInit {
  myInfo: UserInfo | undefined;
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    console.log("send get request to server")
    this.getUserInfo();
    console.log("Register as subscriber")
    this.showUserInfo();
  }
  getUserInfo(){
    return this.http.get<UserInfo>('https://tutorial-db3ee-default-rtdb.firebaseio.com/my-info.json')
  }
  showUserInfo(){
    this.getUserInfo().subscribe((data: UserInfo)=>{
      console.log(data);
      this.myInfo = data;
    })
  }


}
