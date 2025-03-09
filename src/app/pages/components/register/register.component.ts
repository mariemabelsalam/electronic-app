import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from './../../../core/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { IRegisterSucc } from '../../../shared/interfaces/IRegister/iregister';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly router: Router,
    private readonly toastrService: ToastrService
  ) { }


  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required , Validators.minLength(3) , Validators.maxLength(8)]),
    rePassword: new FormControl(null, [Validators.required]),
  }, { validators: this.confrimPass })

  confrimPass(group: AbstractControl) {
    const pass = group.get('password')?.value;
    const rePass = group.get('rePassword')?.value;
    if (pass == rePass) {
      return null;
    }
    else {
      return { notMatched: 'true' }
    }
  }

  submit() {
    if (this.registerForm.valid) {
      this.authService.register(this.registerForm.value).subscribe({
        next: (res) => {
          this.authService.name.next( (res as IRegisterSucc).name )
          this.toastrService.success('success')
          this.router.navigate(['/login'])
          // console.log(res);
        }
      })
    }
    else {
      this.registerForm.markAllAsTouched()
    }
  }
}
