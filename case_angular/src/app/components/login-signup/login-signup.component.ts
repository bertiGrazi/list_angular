import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { signup } from '../itemsmodel';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit{
  isShow = false
  signUpForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }

  signUp() {
    this.isShow = true
  }

  login() {
    this.isShow = false
  }

  submitSignUp() {
    this.http.post<signup>("http://localhost:3000/signup", this.signUpForm.value).subscribe(res => {
      alert("Cadastro concluido com sucesso!!!!")
      this.signUpForm.reset()
    })
  }
}
