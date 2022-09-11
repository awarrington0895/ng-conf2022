import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MessageService } from '../message.service';

@Component({
  selector: 'toh-messages',
  standalone: true,
  styleUrls: ['./messages.component.scss'],
  imports: [CommonModule],
  template: `
    <div *ngIf="messageService.messages$ | async as messages">
      <h2>Messages</h2>
      <button type="button" class="clear" (click)="messageService.clear()">
        Clear messages
      </button>
      <div *ngFor="let message of messages">{{ message }}</div>
    </div>
  `,
})
export class MessagesComponent {
  constructor(public messageService: MessageService) {}
}
