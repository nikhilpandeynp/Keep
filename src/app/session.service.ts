import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {
  constructor() { }

  isLoggedIn(): Promise<boolean> {
    return new Promise((resolve, reject) => gapi.load('auth2', function() {
        let config: gapi.auth2.ClientConfig = {
          client_id: '491290691838-dv7j2tcpji0llikfe51fj0djcnq6dfe0.apps.googleusercontent.com'
        };
        gapi.auth2.init(config).then(() => {
          resolve(gapi.auth2.getAuthInstance().isSignedIn.get());
        });
      })
    );
  }
}