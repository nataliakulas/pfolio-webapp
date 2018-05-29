import React from 'react';

export default () =>
  <form method="POST" action="http://localhost:3000/contact">
    <label htmlFor="name">Name</label>
    <input type="text" name="name"/>

    <label htmlFor="email">Email</label>
    <input type="email" name="email"/>

    <label htmlFor="message">Message</label>
    <textarea name="message" rows="3"/>

    <button type="submit">Send</button>
    <div>
      {window.location.hash === '#success' &&
      <div id="success">
        <p>Your message has been sent!</p>
      </div>
      }
      {window.location.hash === '#error' &&
      <div id="error">
        <p>An error occured while submitting the form.</p>
      </div>
      }
    </div>
  </form>