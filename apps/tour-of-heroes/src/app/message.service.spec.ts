import { TestBed } from '@angular/core/testing';
import { subscribeSpyTo } from '@hirez_io/observer-spy';
import { StoreModule } from '@ngrx/store';
import { heroesReducer } from './+state/heroes/hero.reducer';
import { messagesReducer } from './+state/messages/messages.reducer';
import { MessageService } from './message.service';

describe('MessageService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          heroes: heroesReducer,
          messages: messagesReducer,
        }),
      ],
      providers: [MessageService],
    }).compileComponents()
  );

  it('should have an empty set of messages to read initially', () => {
    const service = TestBed.inject(MessageService);

    const messageSpy = subscribeSpyTo(service.messages$);

    expect(messageSpy.getValues()).toStrictEqual([[]]);
  });

  it('should have a way to add messages', () => {
    const service = TestBed.inject(MessageService);

    service.add('test');

    const messagesSpy = subscribeSpyTo(service.messages$);

    expect(messagesSpy.getLastValue()).toStrictEqual(['test']);
  });

  it('should have a way to clear the messages', () => {
    const service = TestBed.inject(MessageService);

    service.add('test');

    service.clear();

    const messagesSpy = subscribeSpyTo(service.messages$);

    expect(messagesSpy.getLastValue()).toStrictEqual([]);
  });
});
