import React from 'react'
import { Link } from 'react-router-dom'
import { FiArrowRight, FiPackage } from 'react-icons/fi'
import { MdVerified } from 'react-icons/md'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg-pattern" />
      <div className="hero__bg-glow" />
      <div className="hero__bg-glow-2" />

      <div className="container">
        <div className="hero__content">

          <div className="hero__badge">
            <MdVerified size={14} />
            Trusted Importer &amp; Stockist — Across India
          </div>

          <h1 className="hero__title">
            Innovative <em>Construction</em><br />Chemical Solutions
          </h1>

          <p className="hero__subtitle">
            Trusted importer and supplier of specialty chemicals across India.
            Quality-driven, technically backed, and reliably delivered.
          </p>

          <div className="hero__actions">
            <Link to="/products" className="btn btn-gold">
              <FiPackage size={16} />
              Explore Products
              <FiArrowRight size={15} />
            </Link>
            <Link to="/contact" className="btn btn-white">
              Get In Touch
            </Link>
          </div>

          <div className="hero__stats">
            <div>
              <div className="hero__stat-value">18+</div>
              <div className="hero__stat-label">Specialty Chemicals</div>
            </div>
            <div>
              <div className="hero__stat-value">PAN</div>
              <div className="hero__stat-label">India Presence</div>
            </div>
            <div>
              <div className="hero__stat-value">2</div>
              <div className="hero__stat-label">Industry Segments</div>
            </div>
            <div>
              <div className="hero__stat-value">100%</div>
              <div className="hero__stat-label">Quality Assured</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__scroll">
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
