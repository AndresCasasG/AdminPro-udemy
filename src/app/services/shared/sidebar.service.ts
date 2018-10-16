import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any = [
    {
      titulo: "Principla",
      icono: "mdi mdi-gauge",
      submenu:[
        { titulo: "Dashboard", url: "/dashboard" },
        { titulo: "Progress Bar", url: "/progress" },
        { titulo: "Gráficas", url: "/graficas1" }
      ]
    }
  ];

  constructor() { }
}
