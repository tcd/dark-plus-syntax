import { suite, test } from '@testdeck/mocha';

@suite
class Suite {

  @test('a custom name for the test')
  test() {
  }

  @test 'alternate naming'() { }
}
