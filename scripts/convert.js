import { markdown } from "markdown"
import { response } from 'syncano-server'

try {
  response(markdown.toHTML(ARGS.content), 200, 'text/html')
} catch(err) {
  response.json({message: 'Conversion failed!'}, 400)
}
