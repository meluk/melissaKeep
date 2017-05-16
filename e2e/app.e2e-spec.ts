import { MelissaKeepPage } from './app.po';

describe('melissa-keep App', () => {
  let page: MelissaKeepPage;

  beforeEach(() => {
    page = new MelissaKeepPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
