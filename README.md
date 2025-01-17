# NextAuth Session undefined in Client-Side Component

This repository demonstrates a bug where the NextAuth session object is undefined in a client-side component, even after successful login.

## Bug Description
The `session` object is not properly passing from the `getServerSideProps` function to the client-side component `About`.  This results in the About page always displaying the "You are not logged in" message, even after a successful login.

## Steps to Reproduce
1. Clone the repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Log in using NextAuth.
5. Navigate to the About page.
6. Observe that the session object is undefined.

## Expected Behavior
After a successful login, the About page should display the user's email address indicating that the session was passed correctly.

## Actual Behavior
The About page always displays the "You are not logged in" message.

## Solution
The solution involves using `useSession` hook from NextAuth.
