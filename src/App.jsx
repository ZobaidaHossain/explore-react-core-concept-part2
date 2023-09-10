
import './App.css'
import Counter from './count';

import Team from './Team';
import Users from './Users';
import Friends from './Frnd';

function App() {
function handle(){
  alert('button clicked');
}
function handle2(){
  alert('button 2 clicked');
}
const addToFive=(num)=>{
  alert(num+5);
}

  return (
    <>
      <h1>React core concept part 2</h1>   
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <button onClick={handle}>click me</button>
      <button onClick={handle2}>arrow function click</button>
      <button onClick={()=>{alert('third clicked')}}>arrow function 2 click</button>
      {/* when we click this,it take parameter and doing sum +5 */}
      <button onClick={()=>addToFive(3)}>when we click this,it take parameter and doing sum +5</button>
    </>
  )
}

export default App
