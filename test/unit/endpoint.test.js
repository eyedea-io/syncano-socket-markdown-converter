/* global describe it */
import {run} from '@syncano/test'

describe('generate', function () {
  it('simple test', async () => {
    const args = {
      content: 'Hello *World*!'
    }

    const result = await run('convert', {args})
    console.log(result)
    expect(result).toHaveProperty('code', 200)
    expect(result).toHaveProperty('data', '<p>Hello <em>World</em>!</p>')
  })
})
