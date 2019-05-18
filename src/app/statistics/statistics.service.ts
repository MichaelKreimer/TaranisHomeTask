import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

import { AuthData } from '../auth/auth-data.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private authData: AuthData;

  constructor(private http: HttpClient, private router: Router) {}
}