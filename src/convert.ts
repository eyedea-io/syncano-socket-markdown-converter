import * as S from '@eyedea/syncano'
import { markdown } from 'markdown'

interface Args {
  content: string
}

class Endpoint extends S.Endpoint {
  async run(
    {response}: S.Core,
    {args}: S.Context<Args>
  ) {
    try {
      response(markdown.toHTML(args.content), 200, 'text/html')
     } catch(err) {
      response.json({message: 'Conversion failed!'}, 400)
     }
  }
}

export default ctx => new Endpoint(ctx)
