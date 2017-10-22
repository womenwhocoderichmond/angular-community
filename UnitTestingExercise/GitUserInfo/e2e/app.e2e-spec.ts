import { GitUserInfoPage } from './app.po';

describe('git-user-info App', () => {
  let page: GitUserInfoPage;

  beforeEach(() => {
    page = new GitUserInfoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
