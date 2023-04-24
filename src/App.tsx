import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { MutableRef } from './components/ref/MutableRef';
// import { Counter } from './components/state/Counter';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';
import { Counter } from './components/class/Counter'
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateliterals/Toast';
import { CustomButton } from './components/html/Button';
import { CustomComponent } from './components/html/CustomComponent';
import { Text } from './components/polymorphic/Text';

function App() {

  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div className="App">
      <Greet name="Ma'mun" messageCount={15} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Status status='loading' />
      <Heading>Place Holder Text Header</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
      </Oscar>
      <Greet name="Ma'mun Ramdhan" isLoggedIn={false} />
      <Button handleClick={(event, id) => {
        console.log('Button clicked', event, id);
      }
      } />
      <Input value='' handleChange={(event) => console.log(event)} />
      <Container styles={{ fontSize: "20px", margin: "30px", color: 'blue' }} />
      <LoggedIn />
      <User />
      {/* <Counter /> */}
      <MutableRef />
      <Counter message='Nilai Counter adalah' />
      <Private isLoggedIn={true} component={Profile} />
      {/* <List items={['Batman', 'Superman', 'Wonder Woman']} onClick={item => console.log(item)} />
      <List items={[1, 2, 3]} onClick={item => console.log(item)} /> */}
      <List items={[
        {
          id: 1,
          first: 'Bruce',
          last: 'Wayne'
        },
        {
          id: 2,
          first: 'Clark',
          last: 'Kent'
        },
        {
          id: 3,
          first: 'Princess',
          last: 'Diana'
        }
      ]} onClick={item => console.log(item)} />
      <RandomNumber value={10} isPositive={true} />
      <Toast position='center' />
      <CustomButton variant='primary' onClick={() => console.log('click')}>
        Primary Button
      </CustomButton>
      <CustomComponent name='Qmun' isLoggedIn={false} />
      <Text as='h1' size='lg'>Heading</Text>
      <Text as='p' size='md'>Paragraph</Text>
      <Text as='label' htmlFor='someId' size='sm' color='secondary'>Label</Text>
    </div>
  );
}

export default App;
