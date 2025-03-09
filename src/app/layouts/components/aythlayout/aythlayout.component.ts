import { Component } from '@angular/core';
import { NavbarComponent } from "../../../fetures/components/navbar/navbar.component";
import { FooterComponent } from "../../../fetures/components/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-aythlayout',
  imports: [NavbarComponent, FooterComponent , RouterOutlet],
  templateUrl: './aythlayout.component.html',
  styleUrl: './aythlayout.component.scss'
})
export class AythlayoutComponent {

}
