import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css'

import './global.css';


export default function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Fernanda"
            content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, animi repellat. Ea quibusdam tenetur similique assumenda unde expedita vitae possimus illo, hic laborum quaerat eius dicta sunt dolor magnam qui."
          />
          <Post
            author="Marcos"
            content="Um novo post muito legal"
          />
        </main>
      </div>
    </div>
  )
}



