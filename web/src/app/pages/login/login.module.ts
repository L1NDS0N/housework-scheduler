
import { RouterModule } from '@angular/router';
import { LoginRoutes } from './login.routes';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(LoginRoutes)],
  providers: [],
})
export class LoginModule {}
