import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowServerAdd = false;
  serverCreationStatus = '';
  serverName = '';
  userName = '';
  serverCreated = false;
  hideSecret = true;
  buttonLogs = [];
  constructor() { 
    setTimeout(() => this.allowServerAdd = true, 4000);
  }

  ngOnInit(): void {
  }
  
  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = `server created server name is ${this.serverName}`;
  }
  toggleSecret() {
    this.hideSecret = !this.hideSecret;
    this.buttonLogs.push(1);
  }
  onChangeServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  
  onChangeUser() {
    this.userName = '';
  }
}
