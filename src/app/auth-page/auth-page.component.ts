import { Component, OnInit, ElementRef, ViewChild, Renderer2, AfterViewInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { RegisterUser } from '../objects/registerUser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from '../objects/loginUser';
declare var $:  any;
@Component({
  selector: 'app-auth-page',
  templateUrl: './auth-page.component.html',
  styleUrls: ['./auth-page.component.scss']
})

export class AuthPageComponent implements OnInit {
  @ViewChild('titleBar') titleBar;
  @ViewChild('loginPiky') loginPiky;
  @ViewChild('loginFb') loginFb;
  @ViewChild('loginEth') loginEth;
  @ViewChild('fromContainer') formContainer;
  @ViewChild('tab1') tab1;
  @ViewChild('tab2') tab2;
  @ViewChild('activeRegister') activeRegister;
  @ViewChild('activeLogin') activeLogin;
  showLogin = true;
  myEmailValidator = '';
  myPasswordValidator = '';
  myUserValidation = '';
  myBloodTypeValidation = '';
  myHospitalValidation = '';
  errMsg = '';
  loginLogo = '../../assets/img/PikyLogoCerc.png';
  loginUser: LoginUser;
  registerUser: RegisterUser;
  loginForm: FormGroup;
  registerForm: FormGroup;
  show = false;
  doctor = false;
  showDoctorRegister = false;
  registerText = 'Register';
  constructor(private auth: AuthService, private render: Renderer2, private router: Router) { }


  ngOnInit() {
    $('.tabs').tabs();
    this.loginForm = new FormGroup({
      'password' : new FormControl(null, Validators.required),
      'username' : new FormControl(null, Validators.required)
    });
    this.registerForm =  new FormGroup({
      'password' : new FormControl(null, Validators.required),
      'email' : new FormControl(null, [Validators.email, Validators.required]),
      'username' : new FormControl(null, Validators.required),
      'bloodType': new FormControl(null, Validators.required),
      'hospital': new FormControl(null),
    });
  }

  showDoctorRegisterFrom() {
    this.showDoctorRegister = !this.showDoctorRegister;
    if (this.showDoctorRegister)  {
      this.registerText = 'Register as Doctor';
      this.registerForm.get('hospital').setValidators(Validators.required);
      this.registerForm.get('bloodType').clearValidators();
      this.registerForm.get('bloodType').updateValueAndValidity();
      this.registerForm.get('hospital').updateValueAndValidity();

    } else {
      this.registerText = 'Register';
      this.registerForm.get('bloodType').setValidators(Validators.required);
      this.registerForm.get('hospital').clearValidators();
      this.registerForm.get('bloodType').updateValueAndValidity();
      this.registerForm.get('hospital').updateValueAndValidity();
    }
  }

 shakeFrom() {
    this.render.addClass(this.formContainer.nativeElement, 'shake');
    setTimeout(() => {
      this.render.removeClass(this.formContainer.nativeElement, 'shake');
    }, 1000);
  }

  moveTitleBar(button: ElementRef) {
    this.render.addClass(this.titleBar.nativeElement, 'bounce');
    this.render.addClass(button.nativeElement, 'disabled');
    setTimeout(() => {
      this.render.removeClass(this.titleBar.nativeElement, 'bounce');
      this.render.removeClass(button.nativeElement, 'disabled');
    }, 1000);
  }

  login() {
    this.show = false;
    this.loginUser = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };
    if (!this.loginForm.get('username').valid) {
      this.errMsg = 'Invalid username!';
      this.show = true;
      this.myUserValidation = 'invalid';
      this.shakeFrom();
    } else if (!this.loginForm.get('password').valid ) {
      this.myUserValidation = 'valid';
      this.errMsg = 'Invaild password';
      this.show = true;
      this.myPasswordValidator = 'invalid';
      this.shakeFrom();
    } else if (this.loginForm.valid) {
      this.moveTitleBar(this.loginPiky);
      this.myUserValidation = 'valid';
      this.myPasswordValidator = 'valid';
      this.errMsg = '';
      this.auth.login(this.loginUser).subscribe(
        resp => {

          console.log(this.auth.getUserType(resp.user_type));

          if (this.auth.getUserType(resp.user_type) === 'donor') {
            this.router.navigate(['/user-profile']);
          } else if (this.auth.getUserType(resp.user_type) === 'admin') {
            this.router.navigate(['/admin-profile']);
          } else if (this.auth.getUserType(resp.user_type) === 'doctor') {
            if (!resp.is_valid) {
              this.errMsg = "Admin's approval is required";
              this.show = true;
            } else {
            this.router.navigate(['/doctor-profile']);
            }
          }
        },
        err => {
          this.errMsg = err.error;
          this.show = true;
          if (this.errMsg.charAt(0) === 'N') {
            this.loginForm.controls['email'].setErrors({'incorrect': true});
            this.myEmailValidator = 'invalid';
            this.render.removeClass(this.titleBar.nativeElement, 'bounce');

            this.shakeFrom();
          } else {
            this.loginForm.controls['password'].setErrors({'incorrect': true});
            this.myPasswordValidator = 'invalid';
            this.render.removeClass(this.titleBar.nativeElement, 'bounce');

            this.shakeFrom();
          }
        }
      );
    }

  }

  register() {

    this.show = false;
    this.moveTitleBar(this.loginPiky);
    let userType = 'donor';
    if (this.showDoctorRegister === true) {
      userType = 'doctor';
    }
    this.registerUser = {
      username: this.registerForm.value.username,
      email: this.registerForm.value.email,
      password: this.registerForm.value.password,
      type: userType,
      blood_type: this.registerForm.value.bloodType,
      hospital: this.registerForm.value.hospital
    };

    if (!this.registerForm.get('username').valid) {
      this.myUserValidation = 'invalid';
      this.errMsg = 'No  username';
      this.show = true;
      this.shakeFrom();
    } else if (!this.registerForm.get('bloodType').valid) {
      this.myUserValidation = 'valid';
      this.myBloodTypeValidation = 'invalid';
      this.errMsg = 'No  bloodType';
      this.show = true;
      this.shakeFrom();
    } else if (!this.registerForm.get('hospital').valid) {
      this.myBloodTypeValidation = 'valid';
      this.myHospitalValidation = 'invalid';
      this.errMsg = 'No  Hospital';
      this.show = true;
      this.shakeFrom();
    } else if (!this.registerForm.get('email').valid) {
      this.myBloodTypeValidation = 'valid';
      this.myHospitalValidation = 'valid';
      this.errMsg = 'Invalid email!';
      this.show = true;
      this.myEmailValidator = 'invalid';
      this.shakeFrom();
    } else if (!this.registerForm.get('password').valid ) {
      this.myEmailValidator = 'valid';
      this.errMsg = 'Invaild password';
      this.show = true;
      this.myPasswordValidator = 'invalid';
      this.shakeFrom();
    } else if (this.registerForm.valid) {
      this.moveTitleBar(this.loginPiky);
      this.myEmailValidator = 'valid';
      this.myPasswordValidator = 'valid';
      this.myUserValidation = 'valid';
      this.myBloodTypeValidation = 'valid';
      this.myHospitalValidation = 'valid';
      this.errMsg = '';

      console.log(this.registerUser);

      this.auth.register(this.registerUser).subscribe(
        (resp) => {
          console.log(resp);
          this.cleanForms('register');
          this.render.removeClass(this.activeRegister.nativeElement,'active');
          this.render.addClass(this.activeLogin.nativeElement,'active');
          this.activeLogin.nativeElement.click();
        },
        err => {
          this.errMsg = err.error;
          this.show = true;
          if (this.errMsg.charAt(0) === 'N') {
            this.loginForm.controls['email'].setErrors({'incorrect': true});
            this.myEmailValidator = 'invalid';
            this.render.removeClass(this.titleBar.nativeElement, 'bounce');

            this.shakeFrom();
          } else {
            this.loginForm.controls['password'].setErrors({'incorrect': true});
            this.myPasswordValidator = 'invalid';
            this.render.removeClass(this.titleBar.nativeElement, 'bounce');

            this.shakeFrom();
          }
        }
      );
    }
  }

  cleanForms(form: string) {

    if (form === 'login') {
      this.loginForm.reset();
      this.myEmailValidator = '';
      this.myPasswordValidator = '';
      this.show = false;
      this.errMsg = '';
      this.showLogin = false;

    } else {
      this.registerForm.reset();
      this.myEmailValidator = '';
      this.myPasswordValidator = '';
      this.myUserValidation = '';
      this.show = false;
      this.errMsg = '';

      this.showLogin = true;

    }
  }

  fbLogin() {
    this.moveTitleBar(this.loginFb);
  }

  ethLogin() {
    this.moveTitleBar(this.loginEth);
  }

  onHo(target: string, hovering: boolean) {

    if (hovering) {

      switch (target) {
        case 'piky':
          this.loginLogo = '../../assets/img/PikyLogoCerc.png';
        break;

        case 'eth':
          this.loginLogo = '../../assets/img/ethLogo.png';
        break;

        case 'fb':
          this.loginLogo = '../../assets/img/fb.png';
        break;
      }

    } else {
      this.loginLogo = '../../assets/img/PikyLogoCerc.png';
    }
  }
}
