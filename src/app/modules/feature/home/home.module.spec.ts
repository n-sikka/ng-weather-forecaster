import { HomeModule } from './home.module';

describe('HomeModule', () => {
  let weatherModule: HomeModule;

  beforeEach(() => {
    weatherModule = new HomeModule();
  });

  it('should create an instance', () => {
    expect(weatherModule).toBeTruthy();
  });
});
