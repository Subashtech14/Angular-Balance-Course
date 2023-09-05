import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';

@Directive({
  selector: '[hinvEmailvalidtor]',
  providers: [
    {
      provide:NG_VALIDATORS,
      useExisting:EmailvalidaotrDirective,
      multi:true
    }
  ]

})
export class EmailvalidaotrDirective implements Validators{

  constructor() { }
  validate(control:AbstractControl): ValidationErrors | null{
    const value= control.value as string;
    if(value.includes('admin')){
      return {
        invalidEmail:true
      }
    }
    return null
  }
}
