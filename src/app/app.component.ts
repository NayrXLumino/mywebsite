import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import policiesData from './policies.json'; 
import usersData from './userslist.json'; 

interface Policies {
  policy_number: Number;
  user_id: Number;
  insurance_type: String;
  policy_start_date: String;
  policy_end_date: String;
  product_name: String;
  insured_age: Number;
  insured_gender: String;
  insured_address: String;
  insured_city: String;
}

interface Users {
  user_id: Number;
  client_id: Number;
  first_name: String;
  last_name: String;
  age: Number;
  email: String;
  country: String;
  postal_code: String;
  favorite_color: String;
  registration_date: String;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'My website123';

  policies:Policies[]=policiesData;
  users:Users[]=usersData;

  
}