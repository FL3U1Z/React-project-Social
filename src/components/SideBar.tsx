import { Avatar } from './Avatar';
import styles from './SideBar.module.css';
import {PencilLine} from 'phosphor-react';


export function SideBar(){
    return(
        <aside className={styles.sidebar}>
            <img 
            className={styles.cover}
            src="https://images.unsplash.com/photo-1524721696987-b9527df9e512?q=70&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>    
            <div className={styles.profile}>
                <Avatar src="https://github.com/FL3U1Z.png" />
                <strong>Flávio Barbosa</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href='#'>
                    <PencilLine
                    size={20}
                    />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}