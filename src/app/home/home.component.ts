import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router, private activeRoute: ActivatedRoute,
    private authServ: AuthService) { }

  ngOnInit() {
  }

  onClick(){
    //complicated code
    this.route.navigate(['/servers','5','edit'], {queryParams: {homeToservers: 77}, fragment: 'whocares'});
  }

  onLogin(){
    this.authServ.logIn();
  }
  onLogout(){
    this.authServ.logOut();
  }

}
