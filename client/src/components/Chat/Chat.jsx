
export default function Chat() {
  const user = localStorage.getItem('currentUser')
  return (<>
    {user ? <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1> : <h1>Редирект на регистрацию</h1>}
  </>
  )
}
