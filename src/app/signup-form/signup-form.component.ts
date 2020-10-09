import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Router} from '@angular/router';
import { CommonService } from '../common.service';


@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.less']
})
export class SignupFormComponent implements OnInit {
public names:string[] = ['siddhesh', 'rahul','akshay'];
public emailid:any[] = ['siddhesh123@gmail.com','rahul22@gmail.com', 'akshay33@gmail.com'];
public signupForm:any;
public formObj:any
  msg: string;
  constructor(public common:CommonService) { }

  ngOnInit(): void {
    
  }

    addUser(formObj){
        this.common.createUser(formObj.value).subscribe((response)=>{
         // console.log(formObj.value)
         this.msg = "User added";
        })
      }}