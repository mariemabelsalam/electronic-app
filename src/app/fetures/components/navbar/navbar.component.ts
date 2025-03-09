import { Component, Input } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from './../../../core/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(
    private readonly authService: AuthService,
    private readonly toastrService: ToastrService,
    private readonly router: Router,
  ) { }
  @Input() inMian: boolean = false;
  userName: string = '';
  
  ngOnInit(): void {
    this.getUserName()
  }




  getUserName() {
    this.authService.name.subscribe({
      next: (value) => {
        this.userName = value
      }
    })
  }


  logout() {
    this.authService.logout().subscribe({
      next: (res) => {
        console.log(res);
        localStorage.removeItem('id');
        this.toastrService.success(res.message)
        this.router.navigate(['/login'])
      }
    })
  }
}
