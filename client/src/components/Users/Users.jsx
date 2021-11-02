import { Button, Card, Image } from 'semantic-ui-react'
import { useEffect } from "react";
import { getAllUsersAction } from '../../redux/actions/userAction'
import { useDispatch, useSelector } from "react-redux";

export default function Users() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.users)
  useEffect(() => {
    dispatch(getAllUsersAction())
  }, [])

  return (
    <div>
{ users.map((el)=> <Card.Group>
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src='https://react.semantic-ui.com/images/avatar/large/steve.jpg'
          />
          <Card.Header>{el.email}</Card.Header>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Позвонить
            </Button>
            <Button basic color='red'>
              Decline
            </Button>
          </div>
        </Card.Content>
      </Card>
      </Card.Group> )}
    </div>
    
  )
  
  
}
