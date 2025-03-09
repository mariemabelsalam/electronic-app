import { AuthService } from './../../../core/services/auth/auth.service';
import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IloginSucc } from '../../../shared/interfaces/ILogin/ilogin';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router
  ) { }

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
  })

  submit() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          this.authService.name.next( (res as IloginSucc).name)
          localStorage.setItem('id', (res as IloginSucc)._id)
          this.router.navigate(['/home'])
          console.log(res);
        }
      })
    }
    else {
      this.loginForm.markAllAsTouched()
    }
  }
}
