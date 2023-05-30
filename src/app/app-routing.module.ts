import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DoctorsListComponent } from './components/doctors-list/doctors-list.component';
import { VideoCheckComponent } from './components/video-check/video-check.component';
import { AuthGuardService } from './core/auth-guard.service';
import { VideoCallComponent } from './components/video-call/video-call.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'videocheck', component: VideoCheckComponent },
  { path: 'videocall', component: VideoCallComponent },


  {path:'Doc-list',
  component:DoctorsListComponent,
  canActivate: [AuthGuardService],
  children: [
    { path: 'videocheck', component: VideoCheckComponent },
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
