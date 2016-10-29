import { IssueregisterPage } from './app.po';

describe('issueregister App', function() {
  let page: IssueregisterPage;

  beforeEach(() => {
    page = new IssueregisterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
