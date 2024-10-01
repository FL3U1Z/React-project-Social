import { ThumbsUp, Trash } from "phosphor-react"
import styles from "./Comment.module.css"
import { Avatar } from "./Avatar"
import { useState } from "react"

interface commentProps {
    content: string;
    deleteComment: (comment: string) => void;
}

export function Comment({ content, deleteComment }:commentProps) {
    const [likeCount, setLikeCount] = useState(0);

    function handleLikeComment() {
        setLikeCount(likeCount + 1)
    }

    function handleDeleteComment() {
        deleteComment(content)
    }

    return (
        <div className={styles.comment} >
            <Avatar hasBorder={false} src="https://github.com/diego1.png" />
            <div className={styles.boxComment}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Flávio Barbosa</strong>
                            <time title="30 de Setembro ás 16:25" dateTime="2024-09-30 16:25:30">Cerca de 1h</time>
                        </div>
                        <button onClick={handleDeleteComment} title="Deletar Comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>

                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}