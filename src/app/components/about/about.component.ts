import { Component, OnInit } from '@angular/core';
import { Auth } from '../../services/auth.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private auth: Auth) {
  }


  ngOnInit() {
  }

}