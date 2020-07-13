import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import {UserComponent} from './users/user/user.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { ServersService } from './servers/servers.service';

const routes: Routes = [
  {path: '' ,component: HomeComponent},
  {path: 'users/:id/:name' ,component: UserComponent},
  {path: 'users' ,component: UsersComponent},
  {path: 'servers' ,component: ServersComponent},
  {path: 'servers/:id' ,component: ServerComponent},
  {path: 'servers/:id/edit', component: EditServerComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UsersComponent,
    UserComponent,
    EditServerComponent,
    ServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: [ServersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
