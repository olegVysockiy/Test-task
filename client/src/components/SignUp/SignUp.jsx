import { Button, Form, Grid, Header, Segment } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addNewUserAction } from '../../redux/actions/userAction'

export default function SignUp() {
  const dispatch = useDispatch()
  const history = useHistory()
  const addHandler = (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    dispatch(addNewUserAction(data))
    localStorage.clear()
    localStorage.setItem('currentUser', data.email)
    history.push('/')
  }
  return (<Grid textAlign='center' style={{ height: '0vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      <Header as='h2' color='teal' textAlign='center'>
        Регистрация
      </Header>
      <Form onSubmit={addHandler} size='large'>
        <Segment stacked>
          <Form.Input
            type='text'
            name='email'
            fluid icon=''
            iconPosition='left'
            placeholder='email'
          />
          <Form.Input
            type='password'
            name='password'
            fluid icon='email'
            iconPosition='left'
            placeholder='password'
          />
          <Button color='teal' fluid size='large'>
            Зарегистрироваться
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
  )
}

