import { WWCCommunitiesPage } from './app.po';

describe('wwccommunities App', () => {
  let page: WWCCommunitiesPage;

  beforeEach(() => {
    page = new WWCCommunitiesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
