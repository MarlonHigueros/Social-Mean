import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router, ActivatedRoute, Params} from '@angular/router'
import { User } from 'src/app/models/user';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers: [UserService]
  
})
export class RegistroComponent implements OnInit {

  public title: string;
  
  user: User = {
    _id:  '',
    name:  '',
    surname: '',
    nick: '',
    email: '',
    password: '', 
    role: '',
    image: '',
 };

  

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    
   
  ) {
    this.title = 'registrate';
     
   }

   

  ngOnInit(): void {
  }

  onSubmit(){      
    this._userService.register(this.user).subscribe(
      response => {
        if (response.user && response.user._id){
          console.log(response.user);
          
        }
      },
      error => {
        console.log(<any>error);
      },
    );
  } 
  
}
