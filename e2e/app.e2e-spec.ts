import { SkratchpadV2Page } from './app.po';

describe('skratchpad-v2 App', function() {
  let page: SkratchpadV2Page;

  beforeEach(() => {
    page = new SkratchpadV2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
