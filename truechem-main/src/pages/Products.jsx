import { useEffect, useState } from 'react';
import { FaFlask, FaIndustry, FaPaintBrush } from 'react-icons/fa';
import { MdArrowForward, MdDownload, MdOpenInNew, MdScience, MdSearch } from 'react-icons/md';
import { Link } from 'react-router-dom';
import '../styles/Products.css';


const constructionProducts = [
  {
    name: 'RDP (Redispersible Polymer Powder)',
    abbr: 'RDP',
    desc: 'RD Powder is a free-flowing powder used as a binder in dry mix construction materials. It improves adhesion, flexibility, and workability while enhancing water retention.',
    img: '/product_images/rdp.jpg',
    indiamart: 'https://www.indiamart.com/true-chem/redispersible-polymer-powder.html#11903628891',
    docs: [
      { company: 'JINJI', type: 'TDS', file: '/RD POWDER TDS (2).pdf' },
      { company: 'JINJI', type: 'SDS', file: '/MSDS RDP (JINJI).pdf' },
      { company: 'HEBEI', type: 'TDS', file: '/RDP HEBEI TDS (1).pdf' },
    ],
  },
  {
    name: 'PVA Powder',
    abbr: 'PVA',
    desc: 'A synthetic water-soluble polymer which is partially hydrolyzed. Enhances the fluidity and cohesion of construction materials, and significantly reduces drying time of concrete surfaces.',
    img: '/product_images/pva.jpg',
    indiamart: 'https://www.indiamart.com/true-chem/polyvinyl-alcohol.html#2856808833973',
    docs: [],
  },
  {
    name: 'SBR Latex',
    abbr: 'SBR',
    desc: 'Used as an admixture in cement mortar and concrete. Enhances the durability and performance of construction materials including waterproofing, bonding and crack-bridging applications.',
    img: '/product_images/sbr.jpg',
    indiamart: 'https://www.indiamart.com/true-chem/search.html?ss=Sbr+Latex+Waterproofing+Chemical',
    docs: [],
  },
  {
    name: 'Starch Ether',
    abbr: 'SE',
    desc: 'Widely used in cement-based products as a rheology modifier. Thickens the mixture and improves workability, anti-slump performance, making it easier to apply and spread in tile adhesives and joint fillers.',
    img: '/product_images/starch_ether.jpg',
    indiamart: 'https://www.indiamart.com/true-chem/starch-ether.html#2858005782962',
    docs: [],
  },
  {
    name: 'Waterproofing Compound',
    abbr: 'WC',
    desc: 'Reduces the amount of water required to achieve the same workability of concrete. Enhances the strength and durability of concrete and masonry structures with integral and surface waterproofing solutions.',
    img: '/product_images/waterproofing.jpg',
    indiamart: 'https://www.indiamart.com/true-chem/search.html?ss=water+proofing',
    docs: [],
  },
  {
    name: 'SNF (Sulphonated Naphthalene Formaldehyde)',
    abbr: 'SNF',
    desc: 'Acts as a powerful high-range water-reducing agent in concrete, enhancing workability without compromising strength. Improves flow and compressive strength in high-performance concrete.',
    img: '/product_images/snf.jpg',
    indiamart: 'https://www.indiamart.com/true-chem/search.html?ss=snf',
    docs: [],
  },
  {
    name: 'Ligno Powders',
    abbr: 'LP',
    desc: 'A cost-effective, eco-friendly additive used across construction, agriculture, ceramics and chemicals. Enhances industrial processes as a dispersing agent, binder and water reducer.',
    img: '/product_images/ligno.jpg',
    indiamart: 'https://www.indiamart.com/true-chem/search.html?ss=ligno',
    docs: [],
  },
  {
    name: 'MHEC / HPMC',
    abbr: 'CE',
    desc: 'A non-ionic cellulose ether widely used in dry mortar as a rheology modifier and water retention agent. Improves workability, consistency, adhesion, open time and stability. Acts as a thickener and binder.',
    img: '/product_images/mhec_hpmc.jpg',
    indiamart: 'https://www.indiamart.com/true-chem/methyl-hydroxyethyl-cellulose.html#2856799874530',
    docs: [
      { company: 'JINJI',  type: 'TDS', file: '/MHEC JINJI TDS.pdf' },
      { company: 'JINJI',  type: 'SDS', file: '/MSDS of MHEC (JINJI).pdf' },
      { company: 'OSHA',   type: 'SDS', file: '/OSHA SDS MHEC-Green.docx.pdf' },
      { company: 'HPMC',   type: 'TDS', file: '/HPMC TDS (2).pdf' },
      { company: 'ME-K300000', type: 'TDS', file: '/TDS of ME-K300000 (1).pdf' },
    ],
  },
  {
    name: 'Defoamers',
    abbr: 'DF',
    desc: 'An anti-foaming chemical additive that reduces and hinders the formation of foam in industrial process liquids. Designed to control or eliminate foam in construction chemical formulations.',
    img: '/product_images/defoamer_con.jpg',
    indiamart: 'https://www.indiamart.com/true-chem/search.html?ss=Powder+Defoamer+chemical',
    docs: [],
  },
  {
    name: 'Calcium Formate',
    abbr: 'CF',
    desc: 'Commonly used as a setting accelerator in cement and concrete formulations, especially in cold weather. Enhances early strength development and reduces the risk of corrosion in construction materials.',
    img: '/product_images/calcium_formate.jpg',
    indiamart: 'https://www.indiamart.com/true-chem/calcium-formate.html#2856852155773',
    docs: [
      { company: 'MSDS', type: 'SDS', file: '/MSDS-Calcium Formate.pdf' },
    ],
  },
  {
    name: 'Sodium Gluconate',
    abbr: 'SG',
    desc: 'Used as a concrete admixture to act as a water reducer and retarder, improving the workability and performance of concrete. Also serves as a chelating agent for ready-mix concrete.',
    img: '/product_images/sodium_gluc.jpg',
    indiamart: 'https://www.indiamart.com/true-chem/sodium-gluconate.html#21520796648',
    docs: [],
  },
  {
    name: 'Cellulose Fibers',
    abbr: 'CBF',
    desc: 'Offer reinforcement, crack resistance, improved workability, better anti-sag characteristics and reduced shrinkage in mortars. Used as thickeners and fibre reinforcement in construction applications.',
    img: '/product_images/cellulose_fib.jpg',
    indiamart: 'https://www.indiamart.com/true-chem/search.html?ss=cellulose+fibre',
    docs: [],
  },
  {
    name: 'Calcium Stearate',
    abbr: 'CaS',
    desc: 'Highly insoluble in water. Improves processing, prevents caking, and enhances product texture and thermal stability. Used as a hydrophobic additive and lubricant in dry-mix mortars and PVC compounds.',
    img: '/product_images/ca_zn_stearate.jpg',
    indiamart: 'https://www.indiamart.com/true-chem/calcium-stearate.html#2856823463548',
    docs: [],
  },
  {
    name: 'Zinc Stearate',
    abbr: 'ZnS',
    desc: 'Highly insoluble in water. Improves processing, prevents caking, and enhances product texture and thermal stability. Used as a release agent and stabilizer in construction chemicals and plastics processing.',
    img: '/product_images/ca_zn_stearate.jpg',
    indiamart: 'https://www.indiamart.com/true-chem/search.html?ss=zinc',
    docs: [],
  },
];

const paintProducts = [
  {
    name: 'CMC (Carboxymethyl Cellulose)',
    abbr: 'CMC',
    desc: 'A high-performance cellulose ether used as a thickener and stabilizer in water-based paints and coatings. Enhances early strength development and reduces the risk of corrosion in construction materials.',
    img: '/product_images/cmc.jpg',
    indiamart: 'https://www.indiamart.com/true-chem/cmc-powder.html#25002146548',
    docs: [],
  },
  {
    name: 'HEC (Hydroxyethyl Cellulose)',
    abbr: 'HEC',
    desc: 'An efficient thickening agent providing excellent viscosity and rheology control in water-based paints, coatings and adhesives. Offers superior water retention and enhances workability in architectural paints.',
    img: '/product_images/hec.jpg',
    indiamart: 'https://www.indiamart.com/true-chem/hydroxyethyl-cellulose.html#25002150248',
    docs: [],
  },
  {
    name: 'TiO2 (Titanium Dioxide)',
    abbr: 'TiO₂',
    desc: 'Offers excellent brightness, high opacity and superior coverage, making it ideal for paints, coatings, plastics and inks. Enhances durability and color retention in outdoor applications.',
    img: '/product_images/ca_zn_stearate.jpg',
    indiamart: 'https://www.indiamart.com/true-chem/search.html?ss=Tio2',
    docs: [],
  },
  {
    name: 'Defoamers',
    abbr: 'DF',
    desc: 'Specially formulated anti-foaming additives for water-based paint systems. Reduces and hinders the formation of foam during production and application, ensuring a smooth, defect-free finish.',
    img: '/product_images/defoamer_paint.jpg',
    indiamart: 'https://www.indiamart.com/true-chem/search.html?ss=Silicone+Defoamer+Liquid',
    docs: [],
  },
];

const tabs = [
  { id: 'all',          label: 'All Products',          icon: <MdScience /> },
  { id: 'construction', label: 'Construction Industry', icon: <FaIndustry /> },
  { id: 'paint',        label: 'Paint Industry',        icon: <FaPaintBrush /> },
];

function useScrollReveal() {
  useEffect(() => {
    const run = () => {
      const els = document.querySelectorAll('.reveal');
      const obs = new IntersectionObserver(
        entries => entries.forEach(e => {
          if (e.isIntersecting) { e.target.classList.add('in-view'); obs.unobserve(e.target); }
        }),
        { threshold: 0.08 }
      );
      els.forEach(el => obs.observe(el));
      return () => obs.disconnect();
    };
    const cleanup = run();
    return cleanup;
  });
}

// ── Doc Badge ─────────────────────────────────────────────────────────────────
function DocBadge({ label, url, colorClass }) {
  if (!url) return null;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      download
      className={`product-doc-badge ${colorClass}`}
      title={`Download ${label} (PDF)`}
    >
      <MdDownload style={{ fontSize: '14px' }} />
      {label}
    </a>
  );
}

// ── Product Card ──────────────────────────────────────────────────────────────
function ProductCard({ name, abbr, desc, img, index, indiamart, docs }) {
  const [open, setOpen] = useState(false);

  const hasDocs = Array.isArray(docs) ? docs.length > 0 : false;

  return (
    <div className="reveal reveal-up">
      <div className={`product-card${open ? ' expanded' : ''}`}>

        <div className="product-image">
          <img
            src={img}
            alt={name}
            loading="lazy"
            onError={e => {
              e.target.onerror = null;
              e.target.src = `https://placehold.co/400x300/e8f4f8/1a6b8a?text=${encodeURIComponent(abbr)}`;
            }}
          />
          <div className="product-image-overlay" />
          <div className="product-abbr-overlay">{abbr}</div>
        </div>

        <div className="product-content">

          <div className="product-name-row" onClick={() => setOpen(o => !o)}>
            <h3 className="product-name">{name}</h3>
            <span className="product-toggle-btn">{open ? '−' : '+'}</span>
          </div>

          {open && (
            <>
              <p className="product-desc">{desc}</p>

              {/* ── Doc Badges ── */}
              {hasDocs && (
                <div className="product-doc-badges">
                  {docs.map((doc, i) => (
                    <DocBadge
                      key={i}
                      label={`${doc.company} – ${doc.type}`}
                      url={doc.file}
                      colorClass={doc.type === 'TDS' ? 'badge-tds' : 'badge-sds'}
                    />
                  ))}
                </div>
              )}
            </>
          )}

          <div className="product-actions">
            <Link to="/contact" className="product-enquire">
              Enquire <MdArrowForward />
            </Link>

            {indiamart && (
              <a
                href={indiamart}
                target="_blank"
                rel="noopener noreferrer"
                className="product-indiamart-btn"
              >
                IndiaMART <MdOpenInNew />
              </a>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export default function Products() {
  useScrollReveal();

  const [activeTab, setActiveTab] = useState('all');
  const [search, setSearch]       = useState('');

  const filterProducts = list =>
    list.filter(p =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.abbr.toLowerCase().includes(search.toLowerCase())
    );

  const showConstruction = activeTab === 'all' || activeTab === 'construction';
  const showPaint        = activeTab === 'all' || activeTab === 'paint';

  return (
    <div className="products-page">

      {/* ── Hero ── */}
      <section className="page-hero products-hero">
        <div className="page-hero-bg" />
        <img
          className="page-hero-img"
          src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1400&q=80"
          alt="Chemical products"
          loading="eager"
        />
        <div className="container page-hero-inner">
          <span className="section-label animate-fade-down">Product Catalogue</span>
          <h1 className="animate-fade-up">Our Specialty<br />Chemical Range</h1>
          <p className="animate-fade-up anim-delay-1">
            18+ specialty chemicals across construction and paint industries —
            sourced globally, delivered across India.
          </p>
          <div className="hero-cat-pills animate-fade-up anim-delay-2">
            <span className="cat-pill cat-pill-blue"><FaIndustry /> Construction</span>
            <span className="cat-pill cat-pill-orange"><FaPaintBrush /> Paint &amp; Coatings</span>
            <span className="cat-pill cat-pill-teal"><FaFlask /> Specialty Chemicals</span>
          </div>
        </div>
      </section>

      {/* ── Controls ── */}
      <div className="products-controls">
        <div className="container products-controls-inner">
          <div className="tab-bar">
            {tabs.map(({ id, label, icon }) => (
              <button
                key={id}
                className={`tab-btn${activeTab === id ? ' active' : ''}`}
                onClick={() => setActiveTab(id)}
              >
                {icon} {label}
              </button>
            ))}
          </div>
          <div className="search-box">
            <MdSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* ── Product Sections ── */}
      <div className="products-body">
        <div className="container">

          {/* Construction */}
          {showConstruction && (
            <section className="product-section">
              <div className="product-section-header reveal reveal-left">
                <div className="psh-icon"><FaIndustry /></div>
                <div>
                  <span className="section-label">Construction Industry</span>
                  <h2>Construction Chemical Products</h2>
                  <div className="divider" />
                  <p className="section-subtitle">
                    High-performance additives for dry-mix mortars, concrete,
                    waterproofing and tile adhesive applications.
                  </p>
                </div>
              </div>
              <div className="products-grid">
                {filterProducts(constructionProducts).map((p, i) => (
                  <ProductCard key={p.abbr + p.name} {...p} index={i} />
                ))}
              </div>
              {filterProducts(constructionProducts).length === 0 && (
                <p className="no-results">No products match your search.</p>
              )}
            </section>
          )}

          {/* Paint */}
          {showPaint && (
            <section className="product-section">
              <div className="product-section-header reveal reveal-left">
                <div className="psh-icon paint"><FaPaintBrush /></div>
                <div>
                  <span className="section-label">Paint Industry</span>
                  <h2>Paint Industry Products</h2>
                  <div className="divider" />
                  <p className="section-subtitle">
                    Premium rheology modifiers, pigments and additives for
                    water-based paint and coating formulations.
                  </p>
                </div>
              </div>
              <div className="products-grid">
                {filterProducts(paintProducts).map((p, i) => (
                  <ProductCard key={p.abbr + p.name} {...p} index={i} />
                ))}
              </div>
              {filterProducts(paintProducts).length === 0 && (
                <p className="no-results">No products match your search.</p>
              )}
            </section>
          )}

        </div>
      </div>

      {/* ── CTA ── */}
      <section className="products-cta reveal reveal-up">
        <div className="container">
          <div className="pcta-inner">
            <div className="pcta-icon-wrap"><FaFlask /></div>
            <h2>Need a product not listed here?</h2>
            <p>Our team can source specialty chemicals to meet your specific requirements.</p>
            <Link to="/contact" className="btn btn-white" style={{ marginTop: '8px' }}>
              Contact Us <MdArrowForward />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
