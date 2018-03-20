import { Component, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-google-sign-in',
  templateUrl: './google-sign-in.component.html',
  styleUrls: ['./google-sign-in.component.css']
})
export class GoogleSignInComponent implements AfterViewInit {
  @Output() onSuccessfulSignIn = new EventEmitter();
  
  constructor(private element: ElementRef) { }

  ngAfterViewInit() {
    let onSuccessfulSignIn = this.onSuccessfulSignIn;
    gapi.signin2.render('my-signin2', {});

    let button = this.element.nativeElement.firstChild;

    gapi.load('auth2', function() {
      let config: gapi.auth2.ClientConfig = {
        client_id: '491290691838-dv7j2tcpji0llikfe51fj0djcnq6dfe0.apps.googleusercontent.com'
      };
      gapi.auth2.init(config).then(() => {
        gapi.auth2.getAuthInstance().attachClickHandler(button, {}, function () {
          onSuccessfulSignIn.emit();
        }, function () {

        })
      });
    });
  }
}