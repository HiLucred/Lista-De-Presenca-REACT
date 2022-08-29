import React from 'react'
import './styles.css'

export type CardsProps = {
  name: string
  time: string
}

export function Card(props: CardsProps) {
  return(
    <div className="card">
      <strong>{props.name}</strong>
      <small>{props.time}</small>
    </div>
  )
}