import React from 'react';
import { login } from '../components/Utils/auth';

export default function HiddenPage() {
  login();

  return (
    <>
      <h1>This page is hidden for normal users</h1>
      <p>Hidden</p>
    </>
  );
}
