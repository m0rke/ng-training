import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.scss']
})
export class LoginpageComponent implements OnInit {

    codeWord = [
        'ABC',
        '42',
        'hallo'
    ]

    loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        code: new FormControl('', [Validators.required, this.codeWordValidator(this.codeWord)])
    });

    isSubmitted: boolean = false;

    constructor(private router: Router) { }

    ngOnInit(): void {
    }

    codeWordValidator(codes: string[]): ValidatorFn {
        return (control: AbstractControl): ValidationErrors | null => {
            const val = control.value;
            if(codes.indexOf(val) < 0) {
                return {
                    codeWordNotFound: true
                }
            }
            return null;
        }
    }

    onSubmit(): void {
        this.isSubmitted = true;
        if(this.loginForm.invalid) {
            return;
        }
        this.router.navigate(['dashboard']);
    }

    get email(): AbstractControl | null {
        return this.loginForm.get('email');
    }

    get code(): AbstractControl | null {
        return this.loginForm.get('code');
    }

}
