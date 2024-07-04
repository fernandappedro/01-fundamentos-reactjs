import { Header } from './components/Header';
import { Post } from './Post';

import './global.css';

export default function App() {
  return (
    <div>
      <Header/>

      <Post 
        author="Fernanda" 
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, animi repellat. Ea quibusdam tenetur similique assumenda unde expedita vitae possimus illo, hic laborum quaerat eius dicta sunt dolor magnam qui." 
        />
        <Post 
        author="Marcos" 
        content="Um novo post muito legal"
        />
      </div>
  )
}



 