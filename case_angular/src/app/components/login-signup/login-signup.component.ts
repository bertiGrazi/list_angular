import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { signup, login } from '../itemsmodel';

@Component({
  selector: 'app-login-signup',
  templateUrl: './login-signup.component.html',
  styleUrls: ['./login-signup.component.css']
})
export class LoginSignupComponent implements OnInit{
  isShow = false
  signUpForm!: FormGroup
  loginForm!: FormGroup

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })

    this.loginForm = this.formBuilder.group({
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

  loginUser() {
    this.http.get<login[]>("http://localhost:3000/signup").subscribe(res => {
      const user = res.find((person: any) => {
        return person.email === this.loginForm.value.email && person.password === this.loginForm.value.password
      })
      if (user) {
        alert("Pronto para logar!!!!")
        this.loginForm.reset()
      } else {
        alert("Ops!!!!!! Usuário não encontrado com essas informações! Verifique se estão corretas!")
        this.loginForm.reset()
      }
    }, err => {
      alert("Ihhh! Alguma coisa está errada! Tente mais tarde!")
      this.loginForm.reset()
    })
  }
}
