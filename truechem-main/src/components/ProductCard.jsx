import React from 'react'
import { MdScience } from 'react-icons/md'

export default function ProductCard({ name, tag, icon: Icon }) {
  const CardIcon = Icon || MdScience

  return (
    <div className="product-card">
      <div className="product-card__icon">
        <CardIcon size={20} />
      </div>
      <div>
        <div className="product-card__name">{name}</div>
        {tag && <div className="product-card__tag">{tag}</div>}
      </div>
    </div>
  )
}
