import { Component } from '@angular/core';
import {  FormControl, FormGroup, ReactiveFormsModule ,Validators} from '@angular/forms';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  jwt:string = ''

  userForm: FormGroup<{
    username:FormControl<string|null>;
    password:FormControl<string|null>
  }> = new FormGroup({
    username: new FormControl<string|null>("foo",[Validators.required]),
    password: new FormControl<string|null>("foo",[Validators.required])
  })

  constructor(private authService:AuthService){}

  loginUser(){
    const user: User = this.userForm.value as User;
    this.authService.getToken(user).subscribe({
      next:(data)=>{
        this.authService.loginUser(data.jwt).subscribe({
          next:(data)=>console.log(data),
          error:(err)=>console.log(err)
        })
      },
      error:(err)=>console.log(err)
    })
  }










}
