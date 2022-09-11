import { MockBuilder, MockRender } from 'ng-mocks';
import { MessageService } from '../message.service';

import { MessagesComponent } from './messages.component';

describe('MessagesComponent', () => {
  beforeEach(() =>
    MockBuilder(MessagesComponent).mock(MessageService, { messages: [] })
  );

  it('should create', () => {
    expect(MockRender(MessagesComponent)).toBeTruthy();
  });
});
