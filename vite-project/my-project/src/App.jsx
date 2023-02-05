import { useState } from 'react'
import Card from "./components/Card"
import reactLogo from './assets/react.svg'
import Head from "./components/Head";
import data from "./components/data";
import './App.css'

export default function App() {
  const cards = data.map(i => {
    return (
      <Card
        img = {i.theimg}
        title = {i.title}
        para = {i.phrase}
      />
    )
  })
  return (
    <div className="font-serif">
      <Head />
      <a href="https://thediplomat.com/">
        <div className="flex flex-wrap gap-8 mt-20 align-middle self-center justify-center">
          {cards}
        </div>
      </a>
    </div>
  )
}