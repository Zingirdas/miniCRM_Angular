import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NewCompanyComponent } from './components/companies/new-company/new-company.component';
import { NewEmployeeComponent } from './components/employees/new-employee/new-employee.component';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NewCompanyComponent, NewEmployeeComponent, NavigationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'miniCRM_Angular';
}
