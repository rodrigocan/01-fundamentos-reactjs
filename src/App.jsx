import { Header } from "./components/Header"
import { Post } from "./Post"

import "./styles.css"

export function App() {
  return (
    <div>
      <Header />

      <Post
        author="Diego Fernandes"
        content="Ut enim sint aliquip ea consequat cupidatat qui excepteur dolor aliquip id magna sint deserunt. Reprehenderit pariatur sunt do consectetur id excepteur. Officia amet reprehenderit consequat ea eiusmod reprehenderit culpa do."
      />
      <Post
        author="Gabriel Buzzi"
        content="Ut cillum incididunt reprehenderit quis ex quis do sit. Sint commodo cupidatat nostrud do reprehenderit aliqua ipsum amet consectetur enim laborum. Ut fugiat nisi ad consequat do in enim ut."
      />
    </div>
  )
}
