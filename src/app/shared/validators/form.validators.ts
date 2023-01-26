import {Injectable} from "@angular/core";
import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";

export type ValidationType = 'EMAIL' | 'PASSWORD' | 'COMPARE_PASSWORDS'

@Injectable({providedIn: 'root'})
export class FormValidators {

  readonly minPasswordLength: number = 8;

  readonly errorMessage = {
    required: 'Please fill in this field',
    minLength: `Must be at least ${this.minPasswordLength} characters`,
    comparePasswords: 'Passwords must match',
  }

  readonly validationMessage = {
    email: 'Should be valid email address',
    password: 'Should contain at least one uppercase letter, one lowercase and one number'
  }

  readonly pattern = {
    email: new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/),
    password: new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/)
  }

  validate(type: ValidationType) {
    switch (type) {
      case 'EMAIL' : {
        return this.checkField(this.pattern.email, this.validationMessage.email)
      }
      case 'PASSWORD' : {
        return this.checkField(this.pattern.password, this.validationMessage.password)
      }
      case 'COMPARE_PASSWORDS' : {
        return this.compareValidator(this.errorMessage.comparePasswords)
      }
      default :
        return (): ValidatorFn => () => null;
    }
  }

  private checkField(pattern: RegExp, message: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null;
      }
      const valid = pattern.test(control.value);
      return valid ? null : { message: message };
    }
  }

  private compareValidator(message: string): ValidatorFn {
    return (form: AbstractControl): ValidationErrors | null => {
      const password = form.get('password');
      const confirmPass = form.get('confirm');
      return password?.value === confirmPass?.value ? null : {message: message}
    };
  }
}
