
import { Component } from '@angular/core';
import { CarsoulComponent } from "../../../fetures/components/carsoul/carsoul.component";
import { HeroSectionComponent } from "../../../fetures/components/hero-section/hero-section.component";
import { WhychooseussectionComponent } from "../../../fetures/components/whychooseussection/whychooseussection.component";
import { DisplayProductComponent } from "../../../fetures/display-product/display-product.component";

@Component({
  selector: 'app-home',
  imports: [DisplayProductComponent, WhychooseussectionComponent, HeroSectionComponent, CarsoulComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 

}
