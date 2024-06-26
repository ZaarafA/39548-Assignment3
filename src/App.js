/*==================================================
src/App.js

This is the top-level component of the app.
It contains the top-level state.
==================================================*/
import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import other components
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
  constructor() {  // Create and initialize state
    super(); 
    this.state = {
      accountBalance: 0.00,
      creditList: [],
      debitList: [],
      currentUser: {
        userName: 'Joe Smith',
        memberSince: '11/22/99',
      }
    };
  }

  // Update state's currentUser (userName) after "Log In" button is clicked
  mockLogIn = (logInInfo) => {  
    const newUser = {...this.state.currentUser};
    newUser.userName = logInInfo.userName;
    this.setState({currentUser: newUser})
  }

  // Add new Credit to list, update account balance
  addCredit = (newCredit) => {
    const updatedCreditList = [...this.state.creditList, newCredit];
    const updatedBalance = this.state.accountBalance + newCredit.amount;

    this.setState({
      creditList: updatedCreditList,
      accountBalance: updatedBalance,
    });
  };
  // Add new Debit to list, update account balance
  addDebit = (newDebit) => {
    const updatedDebitList = [...this.state.debitList, newDebit];
    const updatedBalance = this.state.accountBalance - newDebit.amount;
    
    this.setState({
      debitList: updatedDebitList,
      accountBalance: updatedBalance,
    });
  }

  componentDidMount() {
    // Fetch data from Credits API endpoint
    fetch('https://johnnylaicode.github.io/api/credits.json')
      .then(response => response.json())
      .then(data => {
        // Calculate total credit amount
        const totalCreditAmount = data.reduce((total, credit) => total + parseFloat(credit.amount), 0);
        // Update state with credit list and adjust account balance
        this.setState(prevState => ({
          creditList: data,
          accountBalance: prevState.accountBalance + totalCreditAmount
        }));
      })
      .catch(error => console.error('Error fetching credits:', error));
  
    // Fetch data from Debits API endpoint
    fetch('https://johnnylaicode.github.io/api/debits.json')
      .then(response => response.json())
      .then(data => {
        // Calculate total debit amount
        const totalDebitAmount = data.reduce((total, debit) => total + parseFloat(debit.amount), 0);
        // Update state with debit list and adjust account balance
        this.setState(prevState => ({
          debitList: data,
          accountBalance: prevState.accountBalance - totalDebitAmount
        }));
      })
      .catch(error => console.error('Error fetching debits:', error));
  }


  // Create Routes and React elements to be rendered using React components
  render() {  
    // Create React elements and pass input props to components
    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />)
    const UserProfileComponent = () => (
      <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
    )
    const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />)
    const CreditsComponent = () => (<Credits credits={this.state.creditList} addCredit={this.addCredit} />) 
    const DebitsComponent = () => (<Debits debits={this.state.debitList} addDebit={this.addDebit} accountBalance={this.state.accountBalance}/>) 

    // Important: Include the "basename" in Router, which is needed for deploying the React app to GitHub Pages
    return (
      <Router basename="/39548-Assignment3">
        <div>
          <Route exact path="/" render={HomeComponent}/>
          <Route exact path="/userProfile" render={UserProfileComponent}/>
          <Route exact path="/login" render={LogInComponent}/>
          <Route exact path="/credits" render={CreditsComponent}/>
          <Route exact path="/debits" render={DebitsComponent}/>
        </div>
      </Router>
    );
  };
}

export default App;