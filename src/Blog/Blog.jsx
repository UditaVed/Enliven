import { useState } from 'react'
import Card from "./components/Card";
import Head from "./components/Head";
import data from "./components/data";

export default function Blog() {
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
    <div className="bg-white">
    
      <Head />
        <div className="flex flex-wrap gap-8 mt-20 align-middle self-center justify-center text-black">
          {cards}
        </div>
    </div>
  )
}