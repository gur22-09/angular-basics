import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  serverId;
  activeStatus = false;
  constructor() { 
    this.serverId = Math.random()*10;
  }

  ngOnInit(): void {
  }
  
  getServerStatus() {
    return this.activeStatus ? 'Active' : 'Offline';
  }
  
  getColor() {
    return this.serverId > 5 ? "blue" : "green";
  }
}
