import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormsModule, NgForm, PatternValidator, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-employee',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent {
  public employeeForm:FormGroup;

  constructor(){
    this.employeeForm=new FormGroup({
      'name':new FormControl(null, [Validators.required, Validators.minLength(3,), Validators.maxLength(15)]),
      'surrname':new FormControl(null, [Validators.required, Validators.minLength(3,), Validators.maxLength(20)]),
      'position':new FormControl(null, [Validators.required, Validators.minLength(3,), Validators.maxLength(20)]),
      'company':new FormControl(),
      'phone':new FormArray([
        new FormControl(null, [Validators.required, Validators.minLength(10), Validators.maxLength(12)])
      ]),

    })
  }

onSubmit(){
  console.log(this.employeeForm.value);
    
}

get phone(){
  return (this.employeeForm.get('phone') as FormArray).controls;
}

public addPhoneField(){
  const field=new FormControl(null, Validators.required);
  (this.employeeForm.get('phone') as FormArray).push(field);
}

public removePhoneField(){
  (this.employeeForm.get('phone') as FormArray).removeAt(-1);
}


}
