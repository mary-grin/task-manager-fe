import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {FormValidators} from "../../../../shared/validators/form.validators";
import {AuthService} from "../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
  styleUrls: ['./sign-up-form.component.scss']
})
export class SignUpFormComponent implements OnInit{
  form: FormGroup;

  constructor(private formValidator: FormValidators,
              private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute) {
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
      ]),
      'confirm': new FormControl('', [
        Validators.required
      ])
    }, this.formValidator.validate('COMPARE_PASSWORDS'))
  }

  onSubmit() {
    const { email, password } = this.form.value;
    this.authService.signUp({email, password})
    this.form.reset()
    this.router.navigate(['../sign-in'], {relativeTo: this.route})
  }
}
