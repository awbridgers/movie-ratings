import React from 'react';
import firebase from 'firebase/app'
import db from '../../firebase/config'


describe('firebase config',()=>{
  it('initializes the app if it has not already',()=>{
    const init = jest.spyOn(firebase, 'initializeApp');
    const test = db;
    expect(init).toHaveBeenCalled();
  })
})