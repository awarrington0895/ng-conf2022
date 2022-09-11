import { MockBuilder, MockRender } from 'ng-mocks';
import { of } from 'rxjs';
import { MessageService } from '../message.service';

import { MessagesComponent } from './messages.component';

describe('MessagesComponent', () => {
  beforeEach(() =>
    MockBuilder(MessagesComponent).mock(MessageService, { messages$: of([]) })
  );

  it('should create', () => {
    expect(MockRender(MessagesComponent)).toBeTruthy();
  });
});
