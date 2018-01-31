import { sleep } from './util'

class Init {
  private foo: string = 'world'
  async run () {
    console.log('hello')
    debugger
    await sleep(1)
    console.log(this.foo)
  }
}

new Init().run()
