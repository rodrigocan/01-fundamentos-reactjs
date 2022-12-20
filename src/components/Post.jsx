import { Avatar } from "./Avatar"
import { Comment } from "./Comment"
import styles from "./Post.module.css"

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar
            className={styles.avatar}
            src="https://github.com/rodrigocan.png"
          />
          <div className={styles.authorInfo}>
            <strong>Rodrigo Cândido</strong>
            <span>Software Engineer</span>
          </div>
        </div>

        <time title="3 de Agosto às 09:52h" dateTime="2022-08-03 09:52:31">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Irure voluptate sit magna ullamco 👋</p>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem iste
          provident autem in qui modi fuga id perferendis, ad alias eos at
          voluptates ratione esse enim corporis quo deserunt facere.
        </p>

        <p>
          <a href="">https://www.github.com/rodrigocan</a>
        </p>

        <p>
          <a href="">#project</a> <a href="">#react</a>{" "}
          <a href="">#javascript</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Deixe um comentário" />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article>
  )
}
