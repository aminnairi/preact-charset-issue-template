import { render } from "preact-render-to-string"

const Main = () => {
  return (
    <meta charSet="UTF-8" />
  )
}

const result = render(
  <Main />
)

const expectation = '<meta charset="UTF-8" />'

console.assert(result === expectation, `expected ${expectation}, received ${result}`)
