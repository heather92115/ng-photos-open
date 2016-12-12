import { NgPhotosPage } from './app.po';

describe('ng-photos App', function() {
  let page: NgPhotosPage;

  beforeEach(() => {
    page = new NgPhotosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
