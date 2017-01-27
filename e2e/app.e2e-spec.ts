import { Ng2MbwitwPage } from './app.po';

describe('ng2-mbwitw App', function() {
  let page: Ng2MbwitwPage;

  beforeEach(() => {
    page = new Ng2MbwitwPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
