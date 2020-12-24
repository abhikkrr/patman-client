import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/common/service/token-storage.service';

@Component({
  selector: 'app-navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.css']
})
export class NavigationMenuComponent implements OnInit {
  isLoggedIn: boolean = false;
  
  constructor(
    private router: Router,
    private tokenSer: TokenStorageService,
  ) { }

  ngOnInit(): void {
    if (this.tokenSer.getToken()) {
      this.isLoggedIn = true;
    }
  }

  logout(){
    this.tokenSer.signOut();
    this.router.navigateByUrl('login');
  }

  profile(){
    this.router.navigateByUrl('profile');
  }

  login(){
    this.router.navigateByUrl('login');
  }

}
