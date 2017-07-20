import { ConferenceCallBingoPage } from './app.po';

describe('conference-call-bingo App', () => {
  let page: ConferenceCallBingoPage;

  beforeEach(() => {
    page = new ConferenceCallBingoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
