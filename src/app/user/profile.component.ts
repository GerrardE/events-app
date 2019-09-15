import { Router } from '@angular/router';
import { AuthService } from "./auth.service";
import { OnInit, Component } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  templateUrl: "./profile.component.html",
  styles: [`
    em { float: right, color: #EO5C65, padding-left: 10px  }
    .error input { background-color: #E3C3C5 }
    .error ::webkit-input-placeholder {color: #999}
  `]
})
export class ProfileComponent implements OnInit {
  profileForm: FormGroup;
  private firstname: FormControl;
  private lastname: FormControl;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.firstname = new FormControl(this.authService.currentUser.firstname, 
      [Validators.required, Validators.pattern('[a-zA-Z].*')]);
    this.lastname = new FormControl(this.authService.currentUser.lastname, Validators.required);

    this.profileForm = new FormGroup({
      firstname: this.firstname,
      lastname: this.lastname
    });
  }

  cancel() {
    this.router.navigate(['events']);
  }

  saveProfile(formValues) {
    if (this.profileForm.valid) {
      this.authService.updateCurrentUser(formValues.firstname, formValues.lastname)
      this.router.navigate(['events']);
    }
  }

  validateLastname(){
    return this.lastname.valid || this.lastname.untouched
  }

  validateFirstname(){
    return this.firstname.valid || this.firstname.untouched
  }
}
