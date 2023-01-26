import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormValidators} from "../../../../shared/validators/form.validators";
import {Store} from "@ngrx/store";
import {signIn} from "../../../../core/store/user/user.actions";

@Component({
  selector: 'app-sign-in-form',
  templateUrl: './sign-in-form.component.html',
  styleUrls: ['./sign-in-form.component.scss']
})
export class SignInFormComponent implements OnInit{
  form: FormGroup;

  constructor(private formValidator: FormValidators,
              private store: Store) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      'email': new FormControl('', [
        Validators.required,
        this.formValidator.validate('EMAIL')
      ]),
      'password': new FormControl('', [
        Validators.required,
        Validators.minLength(this.formValidator.minPasswordLength),
        this.formValidator.validate('PASSWORD')
      ])
    })
  }

  onSubmit() {
    const { email, password } = this.form.value;
    this.store.dispatch(signIn({ email, password }));
  }
}
