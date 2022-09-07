import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  });

  it('should have an empty set of messages to read initially', () => {
    expect(service.messages).toStrictEqual([]);
  });

  it('should have a way to add messages', () => {
    service.add('test');

    expect(service.messages).toStrictEqual(['test']);
  });

  it('should have a way to clear the messages', () => {
    service.add('test');

    service.clear();

    expect(service.messages).toStrictEqual([]);
  });
});
