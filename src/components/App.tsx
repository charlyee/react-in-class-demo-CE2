import * as React from 'react';
import '../styles/App.css';
import { IMenuItem } from '../models/menuItem';
import NavBar from './Navbar';
import { Fragment } from 'react';
import MainSection from './MainSection';
import SectionWithLoopRendering from './SectionWithLoopRendering';
import SpecialButtonTwo from './SpecialButtonTwo';
import NewerComponent from './NewerComponent';

export interface IAppProps {
}

interface IState {
  menuItems: IMenuItem[];
  isButtonPressed: boolean;
  userName: string;
  password: string | number;
}

export default class App extends React.Component<IAppProps, IState> {
  constructor(props: IAppProps) {
    super(props);

    this.state = {
      menuItems: [
        {
          id: 1,
          key: "1",
          name: "Home Page"
        },
        {
          id: 2,
          key: "2",
          name: "Profile"
        },
        {
          id: 3,
          key: "3",
          name: "Other Page"
        },
        {
          id: 4,
          key: "4",
          name: "Other Page"
        }
      ],
      isButtonPressed: false,
      userName: "default",
      password: "dasdasda"
    }
  }

  //Remember the importance of fat arrow functions?
  //Try using this callback method without the fat arrow syntax.
  //As I stressed earlier, having the ability to keep the context of "THIS" is 
  //the PRIMARY difference between fat arrow functions and functions that are not fat arrow functions.
  //It's NOT just syntax.
  //
  //Try removing the fat arrow and making it a normal function, you'll get something like this.state does
  //not exist. That is because without a fat arrow function it will try and look at the context of the
  //child component. We don't care about the state in the child component "SpecialButton". Not at all.
  //
  //But the state we DO care about is here in App.tsx. The state in this component that this comment is in,
  //is the state we are trying to modify and pass down. So we need to maintain the "this" context of this
  //component. Where this "this" component has the state we want to modify. 
  public onClickButton = () => {
    this.setState({ isButtonPressed: true })
  }

  public onClickButtonToGoBack = () => {
    this.setState({ isButtonPressed: false })
  }

  public addAnotherMenuItem = () => {
    let { menuItems } = this.state;

    menuItems.push({
      id: 5,
      key: "5",
      name: "Added A New Menu Item"
    })

    this.setState({ menuItems });
  }

  //Try on your own: Using "normal" function syntax rather than fat arrow syntax.
  //Notice that the error says "setState" doesn't exist.
  public onClickUserNameSetButton = (newUserName: string) => {
    console.log(this.state)
    this.setState({ userName: newUserName });
  }


  public render() {
    let { menuItems, isButtonPressed, userName } = this.state;
    return (
      <Fragment>
        <NewerComponent/>
        <div className="App">


          <NavBar
            appName="Sample App"
            isUserLoggedIn={false}
            menuOptions={menuItems} />


          <MainSection
            isButtonPressed={isButtonPressed}
            callbackMethod={this.onClickButton}
            callbackMethodToGoBack={this.onClickButtonToGoBack}
            userName={userName}
            onClickUserNameSetButton={this.onClickUserNameSetButton} />


          <SectionWithLoopRendering />
          <SpecialButtonTwo callBack={this.addAnotherMenuItem} />
        </div>
      </Fragment>
    );
  }
}
