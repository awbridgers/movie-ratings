import React from 'react';
import {render, screen} from '@testing-library/react'
import Footer from '../../components/footer'


describe('footer component',()=>{
  beforeEach(()=>{
    render(<Footer/>)
  })
  it('renders without crashing',()=>{
    expect(screen.getByText('Movie images and info powered by:')).toBeDefined();
  })
})