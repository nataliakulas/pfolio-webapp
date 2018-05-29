import React from 'react';

export default () =>
  <form method="POST">
    <label htmlFor="name">Name</label>
    <input type="text" name="name"/>

    <label htmlFor="email">Email</label>
    <input type="email" name="email"/>

    <label htmlFor="message">Message</label>
    <textarea name="message" rows="3"/>

    <input type="submit"/>
  </form>