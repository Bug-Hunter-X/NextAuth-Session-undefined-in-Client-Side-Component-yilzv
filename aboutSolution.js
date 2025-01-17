```javascript
// pages/about.js
import { useSession } from 'next-auth/react';

export default function About() {
  const { data: session } = useSession();

  return (
    <div>
      <h1>About Page</h1>
      {session ? (
        <p>You are logged in as {session.user.email}</p>
      ) : (
        <p>You are not logged in</p>
      )}
    </div>
  );
}
```