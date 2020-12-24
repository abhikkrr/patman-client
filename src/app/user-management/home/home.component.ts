import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/common/service/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private tokenSer: TokenStorageService,
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.tokenSer.signOut();
    this.router.navigateByUrl('login');
  }

}
