import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import App from './App';

test('receives a user input and show it in a list', async () => {
  render(<App />);

  // Find the two inputs
  const nameInput = screen.getByRole("textbox", {
    name: /name/i
});

const emailInput = screen.getByRole("textbox", {
    name: /email/i
});

// Simulate typing in a name
await user.click(nameInput);
await user.keyboard("jane");

// Simulate typing in an email
await user.click(emailInput);
await user.keyboard("jane@jane.com");

// Find the button
const button = screen.getByRole('button')

// Simulate clicking the button
await user.click(button);
// Assertion to make sure 'onUserAdd' gets called with email/name


const name = screen.getByRole('cell', {name:'jane'});
const email = screen.getByRole('cell', {name:'jane@jane.com'});

expect(name).toBeInTheDocument();
expect(email).toBeInTheDocument();
});
