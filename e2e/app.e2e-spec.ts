import { ErrorTrackerPage } from './app.po';

describe('error-tracker App', () => {
  let page: ErrorTrackerPage;

  beforeEach(() => {
    page = new ErrorTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
