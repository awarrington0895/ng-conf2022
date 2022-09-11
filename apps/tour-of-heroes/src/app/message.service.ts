import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './+state/app.state';
import { MessageActions } from './+state/messages/messages.actions';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  readonly messages$ = this.store.select('messages');

  constructor(private store: Store<AppState>) {}

  add(message: string) {
    this.store.dispatch(MessageActions.added({ message }));
  }

  clear() {
    this.store.dispatch(MessageActions.cleared());
  }
}
