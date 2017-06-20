import { TraveliePage } from './app.po';

describe('travelie App', () => {
  let page: TraveliePage;

  beforeEach(() => {
    page = new TraveliePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
