import { Component, OnInit } from '@angular/core';
    
    @Component({
      selector: 'lib-buttonAlert',
      template: `
        <input type="button" class="button" value="Input Button" (click)="alerta()">
      `,
      styles: [
        `.button {
      background-color: #4CAF50;
      border: none;
      color: white;
      padding: 15px 32px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      border-radius: 25px;
    }`
    
      ]
    })
    export class ButtonAlertComponent {
      alerta(): void {
        alert('Hola soy un alert que viene desde una libreria de node');
      }
    }
    