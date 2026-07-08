/* ============================================
   McDonalds Group — Design Tokens
============================================ */
:root{
  --green: #0EA968;
  --green-dark: #064E3B;
  --green-darker: #032B20;
  --dark-bg: #071A12;
  --dark-bg-2: #0A2019;
  --near-black: #0A0F0D;
  --gold: #D8A94B;
  --cream: #F4F1EA;
  --ink: #12201A;
  --gray-text: #5B6660;
  --light-bg: #F6F7F5;
  --white: #FFFFFF;
  --radius-lg: 20px;
  --radius-md: 14px;
  --radius-sm: 8px;
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  --container-w: 1240px;
}

*{box-sizing:border-box;}
html{scroll-behavior:smooth;}
body{
  margin:0;
  font-family:var(--font-sans);
  color:var(--ink);
  background:var(--white);
  -webkit-font-smoothing:antialiased;
}
img{max-width:100%;display:block;}
a{text-decoration:none;color:inherit;}
ul{list-style:none;margin:0;padding:0;}
button{font-family:inherit;cursor:pointer;border:none;background:none;}

.container{
  max-width:var(--container-w);
  margin:0 auto;
  padding:0 24px;
}

/* Fallback for missing user images: soft placeholder tint instead of broken icon */
.img-fallback{
  position:relative;
  background:linear-gradient(135deg,#e7ece9,#cfd8d3);
  min-height:120px;
}
.img-fallback img{visibility:hidden;}

/* ============================================
   Buttons
============================================ */
.btn{
  display:inline-flex;
  align-items:center;
  gap:8px;
  padding:13px 26px;
  border-radius:999px;
  font-size:14.5px;
  font-weight:600;
  white-space:nowrap;
  transition:all .2s ease;
  border:1.5px solid transparent;
}
.btn-primary{
  background:var(--green);
  color:#fff;
}
.btn-primary:hover{background:#0c9059;}
.btn-outline-light{
  background:transparent;
  color:#fff;
  border-color:rgba(255,255,255,.55);
}
.btn-outline-light:hover{background:rgba(255,255,255,.12);}
.btn-outline-gold{
  background:transparent;
  color:var(--gold);
  border-color:var(--gold);
  font-size:13.5px;
  padding:11px 20px;
}
.btn-outline-gold:hover{background:rgba(216,169,75,.12);}

.eyebrow{
  font-size:12.5px;
  font-weight:700;
  letter-spacing:1.6px;
  text-transform:uppercase;
  margin:0 0 10px;
}
.eyebrow-gold{color:var(--gold);}
.eyebrow-green{color:var(--green);}

.section-title{
  font-family:var(--font-serif);
  font-weight:700;
  font-size:clamp(28px,4vw,40px);
  margin:0 0 18px;
  color:var(--ink);
}
.section-title.light{color:#fff;}

.body-text{
  color:var(--gray-text);
  line-height:1.75;
  font-size:15.5px;
  margin:0 0 16px;
}

/* ============================================
   Header
============================================ */
.site-header{
  position:sticky;
  top:0;
  z-index:100;
  background:var(--near-black);
  padding:14px 0;
  border-bottom:1px solid rgba(255,255,255,.06);
}
.header-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:24px;
}
.brand{
  display:flex;
  align-items:center;
  gap:10px;
  flex-shrink:0;
}
.brand-logo{
  width:42px;
  height:42px;
  object-fit:contain;
}
.brand-text{display:flex;flex-direction:column;line-height:1.05;}
.brand-title{
  font-family:var(--font-serif);
  font-weight:700;
  font-size:19px;
  color:#fff;
  letter-spacing:.3px;
}
.brand-sub{
  font-size:10px;
  letter-spacing:3px;
  color:var(--gold);
  font-weight:600;
}

.main-nav ul{
  display:flex;
  align-items:center;
  gap:30px;
}
.main-nav a{
  font-size:14.5px;
  font-weight:500;
  color:#EDEFEC;
  display:flex;
  align-items:center;
  gap:6px;
  padding:6px 0;
}
.main-nav a:hover{color:var(--gold);}
.caret{font-size:10px;}

.has-dropdown{position:relative;}
.mega-menu{
  position:absolute;
  top:calc(100% + 18px);
  left:50%;
  transform:translateX(-38%);
  background:#fff;
  border-radius:var(--radius-md);
  box-shadow:0 20px 50px rgba(0,0,0,.18);
  padding:26px 30px;
  display:flex;
  gap:50px;
  min-width:460px;
  opacity:0;
  visibility:hidden;
  transition:all .2s ease;
  z-index:50;
}
.has-dropdown:hover .mega-menu{
  opacity:1;
  visibility:visible;
  top:calc(100% + 10px);
}
.mega-col{display:flex;flex-direction:column;gap:6px;min-width:180px;}
.mega-heading{
  font-weight:700;
  font-size:13.5px;
  color:var(--ink);
  margin:0 0 6px;
  white-space:nowrap;
}
.mega-link{
  font-size:13px;
  color:var(--gray-text);
  padding:2px 0;
}
.mega-link:hover{color:var(--green);}

.header-actions{
  display:flex;
  align-items:center;
  gap:14px;
  flex-shrink:0;
}
.icon-btn{
  color:#EDEFEC;
  font-size:16px;
  width:36px;height:36px;
  display:flex;align-items:center;justify-content:center;
}
.icon-btn:hover{color:var(--gold);}

.hamburger{
  display:none;
  flex-direction:column;
  gap:5px;
  width:26px;
}
.hamburger span{
  height:2px;
  background:#fff;
  border-radius:2px;
}

.mobile-drawer{
  display:none;
  flex-direction:column;
  background:var(--near-black);
  padding:10px 24px 24px;
  position:sticky;
  top:70px;
  z-index:99;
}
.mobile-drawer.open{display:flex;}
.mobile-drawer a{
  color:#EDEFEC;
  padding:12px 0;
  border-bottom:1px solid rgba(255,255,255,.07);
  font-size:15px;
}
.mobile-drawer-actions{
  display:flex;
  gap:12px;
  margin-top:16px;
}
.mobile-drawer-actions .btn{flex:1;justify-content:center;}

/* ============================================
   Hero
============================================ */
.hero{
  position:relative;
  background:linear-gradient(120deg,#0A241B 0%, #0E2E22 45%, #0A1E27 100%);
  min-height:560px;
  overflow:hidden;
  padding:70px 0 110px;
  display:flex;
  align-items:center;
}
.hero-bg{position:absolute;inset:0;z-index:0;}
.hero-bg-img{width:100%;height:100%;object-fit:cover;opacity:.35;}
.hero-overlay{
  position:absolute;inset:0;
  background:linear-gradient(90deg, rgba(5,15,11,.92) 0%, rgba(5,15,11,.72) 40%, rgba(5,15,11,.25) 65%, rgba(5,15,11,.15) 100%);
}
.hero-media{
  position:absolute;
  top:0;bottom:0;
  z-index:1;
  overflow:hidden;
}
.hero-media img{width:100%;height:100%;object-fit:cover;}
.hero-media-left{
  right:34%;
  width:32%;
  clip-path:polygon(15% 0, 100% 0, 100% 100%, 0% 100%);
}
.hero-media-right{
  right:0;
  width:38%;
}
.hero-content{
  position:relative;
  z-index:2;
  max-width:640px;
}
.hero-title{
  font-family:var(--font-serif);
  color:#fff;
  font-weight:700;
  font-size:clamp(32px,4.6vw,52px);
  line-height:1.12;
  margin:0 0 22px;
}
.hero-subtitle{
  color:#E7ECE9;
  font-size:16px;
  line-height:1.6;
  margin:0 0 32px;
  font-weight:400;
}
.hero-btns{display:flex;gap:16px;flex-wrap:wrap;}

/* ============================================
   Stats
============================================ */
.stats-section{
  position:relative;
  z-index:3;
  margin-top:-70px;
}
.stats-card{
  background:#fff;
  border-radius:var(--radius-lg);
  box-shadow:0 20px 50px rgba(10,30,20,.12);
  padding:34px 20px;
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:20px;
}
.stat{
  display:flex;
  align-items:center;
  gap:14px;
  justify-content:center;
}
.stat-icon{
  font-size:26px;
  color:var(--green);
}
.stat-number{
  font-family:var(--font-serif);
  font-weight:700;
  font-size:26px;
  color:var(--ink);
  margin:0;
}
.stat-label{
  font-size:13px;
  color:var(--gray-text);
  margin:2px 0 0;
}

/* ============================================
   Who we are
============================================ */
.who-we-are{
  background:var(--light-bg);
  padding:130px 0 90px;
}
.who-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:60px;
  align-items:center;
}
.who-image{
  border-radius:var(--radius-lg);
  overflow:hidden;
  aspect-ratio:4/3;
  background:#dfe4e0;
}
.who-image img{width:100%;height:100%;object-fit:cover;}

/* ============================================
   Pillars
============================================ */
.pillars{
  background:radial-gradient(ellipse at top, #0C3226 0%, var(--dark-bg) 55%, var(--near-black) 100%);
  padding:90px 0 70px;
}
.section-head-center{
  text-align:center;
  margin-bottom:50px;
}
.section-head-center .eyebrow{
  display:block;
}

.pillars-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:26px;
  margin-bottom:60px;
}
.pillar-card{
  position:relative;
  background:linear-gradient(135deg, rgba(255,255,255,.05), rgba(255,255,255,.02));
  border:1px solid rgba(255,255,255,.08);
  border-radius:var(--radius-lg);
  padding:38px 34px 34px;
  display:flex;
  gap:20px;
  align-items:flex-start;
  overflow:hidden;
  min-height:260px;
}
.pillar-badge{
  position:absolute;
  top:-22px;
  left:28px;
  width:56px;
  height:56px;
  border-radius:50%;
  background:var(--green);
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:22px;
  box-shadow:0 8px 22px rgba(14,169,104,.4);
  border:4px solid var(--dark-bg);
}
.pillar-body{
  flex:1;
  min-width:0;
  padding-top:16px;
}
.pillar-body h3{
  color:#fff;
  font-family:var(--font-serif);
  font-size:19px;
  margin:0 0 12px;
  line-height:1.35;
}
.pillar-body p{
  color:#C7D0CB;
  font-size:14px;
  line-height:1.65;
  margin:0 0 16px;
}
.check-list{margin:0 0 22px;display:flex;flex-direction:column;gap:8px;}
.check-list li{
  font-size:13.5px;
  color:#E5E9E6;
  display:flex;
  align-items:center;
  gap:8px;
}
.check-list i{color:var(--green);font-size:12px;}
.pillar-image{
  width:150px;
  flex-shrink:0;
  align-self:stretch;
  border-radius:50% 50% 8% 50%;
  overflow:hidden;
  background:#123528;
  margin-top:16px;
}
.pillar-image img{width:100%;height:100%;object-fit:cover;}

/* Services row */
.services-row{
  display:flex;
  align-items:center;
  gap:16px;
  background:rgba(255,255,255,.03);
  border:1px solid rgba(255,255,255,.07);
  border-radius:var(--radius-lg);
  padding:22px 22px;
  margin-bottom:60px;
}
.services-scroll{
  display:flex;
  flex:1;
  overflow-x:auto;
  gap:10px;
  scrollbar-width:none;
}
.services-scroll::-webkit-scrollbar{display:none;}
.service-item{
  display:flex;
  flex-direction:column;
  align-items:center;
  gap:10px;
  min-width:112px;
  padding:16px 10px;
  border-radius:var(--radius-md);
  border:1px solid rgba(255,255,255,.08);
  text-align:center;
  flex-shrink:0;
}
.service-item i{
  color:var(--gold);
  font-size:20px;
}
.service-item span{
  color:#E5E9E6;
  font-size:12.5px;
  font-weight:500;
  line-height:1.3;
}
.nav-circle-btn{
  width:40px;height:40px;
  border-radius:50%;
  border:1px solid rgba(255,255,255,.25);
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-shrink:0;
  transition:background .2s;
}
.nav-circle-btn:hover{background:rgba(255,255,255,.1);}

/* Why choose us */
.why-choose{margin-bottom:60px;}
.why-choose > .eyebrow{margin-bottom:24px;}
.why-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:18px;
}
.why-card{
  background:rgba(255,255,255,.03);
  border:1px solid rgba(255,255,255,.07);
  border-radius:var(--radius-md);
  padding:22px;
  display:flex;
  gap:14px;
  align-items:flex-start;
}
.why-icon{
  width:42px;height:42px;
  border-radius:10px;
  background:rgba(14,169,104,.15);
  color:var(--green);
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:18px;
  flex-shrink:0;
}
.why-card h4{
  color:#fff;
  font-size:15px;
  margin:0 0 6px;
  font-family:var(--font-serif);
}
.why-card p{
  color:#B7C1BB;
  font-size:13px;
  line-height:1.5;
  margin:0;
}

/* Testimonials */
.testimonials{margin-bottom:60px;}
.testimonials > .eyebrow{margin-bottom:24px;}
.testimonial-row{
  display:flex;
  align-items:center;
  gap:14px;
}
.testimonial-scroll{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:16px;
  flex:1;
  overflow-x:auto;
  scrollbar-width:none;
}
.testimonial-scroll::-webkit-scrollbar{display:none;}
.testimonial-card{
  background:rgba(255,255,255,.03);
  border:1px solid rgba(255,255,255,.07);
  border-radius:var(--radius-md);
  padding:20px;
  min-width:230px;
}
.testimonial-head{
  display:flex;
  align-items:center;
  gap:12px;
  margin-bottom:14px;
}
.avatar{
  width:44px;height:44px;
  border-radius:50%;
  object-fit:cover;
  background:#1c3b2e;
}
.testimonial-head h5{
  color:#fff;
  font-size:14px;
  margin:0;
}
.testimonial-head span{
  color:var(--gold);
  font-size:12px;
}
.testimonial-card p{
  color:#C7D0CB;
  font-size:13px;
  line-height:1.6;
  margin:0 0 12px;
}
.stars{color:var(--gold);letter-spacing:2px;font-size:14px;}

/* Bottom grid: news / gallery / partners */
.bottom-grid{
  display:grid;
  grid-template-columns:1.2fr 1fr 1fr;
  gap:26px;
  padding-top:40px;
  border-top:1px solid rgba(255,255,255,.08);
}
.bottom-col-head{
  display:flex;
  align-items:center;
  justify-content:space-between;
  margin-bottom:18px;
}
.bottom-col-head .eyebrow{margin:0;}
.view-all{
  font-size:12.5px;
  color:var(--green);
  font-weight:600;
  display:flex;
  align-items:center;
  gap:6px;
}
.news-list{display:flex;flex-direction:column;gap:16px;}
.news-item{
  display:flex;
  gap:12px;
  align-items:flex-start;
}
.news-item img{
  width:64px;height:56px;
  object-fit:cover;
  border-radius:8px;
  flex-shrink:0;
  background:#1c3b2e;
}
.news-title{
  color:#EDEFEC;
  font-size:13px;
  line-height:1.45;
  margin:0 0 6px;
  font-weight:500;
}
.news-date{
  color:#8FA097;
  font-size:11.5px;
}

.gallery-grid{
  display:grid;
  grid-template-columns:1fr 1fr;
  grid-template-rows:repeat(2,80px);
  gap:8px;
}
.gallery-grid img{
  width:100%;height:100%;
  object-fit:cover;
  border-radius:8px;
  background:#1c3b2e;
}
.gallery-1{grid-column:1/2;grid-row:1/3;height:100%;}
.gallery-2{grid-column:2/3;grid-row:1/2;}
.gallery-3{grid-column:2/3;grid-row:2/3;}
.gallery-4{grid-column:1/2;grid-row:3/4;}
.gallery-5{grid-column:2/3;grid-row:3/4;}
.gallery-grid{grid-template-rows:repeat(3,58px);}

.partners-text{
  color:#B7C1BB;
  font-size:13px;
  line-height:1.6;
  margin:0 0 20px;
}
.partners-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:14px;
}
.partners-grid img{
  width:44px;height:44px;
  object-fit:contain;
  border-radius:50%;
  background:#fff;
  padding:6px;
  margin:0 auto;
}

/* ============================================
   CTA banner
============================================ */
.cta-banner{
  background:linear-gradient(120deg, var(--green-dark), var(--green-darker));
  padding:50px 0;
}
.cta-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  gap:30px;
  flex-wrap:wrap;
}
.cta-inner h2{
  font-family:var(--font-serif);
  color:#fff;
  font-size:clamp(22px,3vw,30px);
  margin:0 0 8px;
}
.cta-inner p{
  color:#DCEAE3;
  font-size:14.5px;
  max-width:520px;
  margin:0;
  line-height:1.6;
}

/* ============================================
   Footer
============================================ */
.site-footer{
  background:var(--near-black);
  padding:60px 0 0;
}
.footer-grid{
  display:grid;
  grid-template-columns:1.3fr 0.8fr 1fr 1fr 1.2fr;
  gap:30px;
  padding-bottom:40px;
  border-bottom:1px solid rgba(255,255,255,.08);
}
.footer-brand p{
  color:#96A39C;
  font-size:13px;
  line-height:1.6;
  margin-top:14px;
}
.brand-title.light{color:#fff;}
.footer-col h5{
  color:#fff;
  font-size:14px;
  margin:0 0 16px;
  font-weight:700;
}
.footer-col a{
  display:block;
  color:#9DAAA3;
  font-size:13px;
  margin-bottom:12px;
}
.footer-col a:hover{color:var(--gold);}
.footer-col p{
  color:#9DAAA3;
  font-size:13px;
  margin:0 0 12px;
  display:flex;
  align-items:center;
  gap:8px;
}
.footer-col p i{color:var(--green);width:14px;}
.footer-social{
  display:flex;
  gap:10px;
  margin-top:16px;
}
.footer-social a{
  width:32px;height:32px;
  border-radius:50%;
  border:1px solid rgba(255,255,255,.15);
  display:flex;
  align-items:center;
  justify-content:center;
  color:#fff;
  font-size:13px;
  margin:0;
}
.footer-social a:hover{background:var(--green);border-color:var(--green);}

.newsletter-form{
  display:flex;
  gap:8px;
  margin-top:16px;
}
.newsletter-form input{
  flex:1;
  padding:11px 14px;
  border-radius:8px;
  border:1px solid rgba(255,255,255,.15);
  background:rgba(255,255,255,.04);
  color:#fff;
  font-size:13px;
}
.newsletter-form input::placeholder{color:#7D8B84;}
.newsletter-form button{
  width:42px;
  border-radius:8px;
  background:var(--green);
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
}

.footer-bottom{padding:20px 0;}
.footer-bottom-inner{
  display:flex;
  align-items:center;
  justify-content:space-between;
  flex-wrap:wrap;
  gap:10px;
}
.footer-bottom-inner p{
  color:#7D8B84;
  font-size:12.5px;
  margin:0;
}
.footer-legal{display:flex;gap:20px;}
.footer-legal a{
  color:#7D8B84;
  font-size:12.5px;
}
.footer-legal a:hover{color:var(--gold);}

/* ============================================
   Scroll to top
============================================ */
.scroll-top{
  position:fixed;
  bottom:24px;
  right:24px;
  width:44px;height:44px;
  border-radius:50%;
  background:var(--ink);
  color:#fff;
  display:flex;
  align-items:center;
  justify-content:center;
  box-shadow:0 10px 25px rgba(0,0,0,.25);
  opacity:0;
  visibility:hidden;
  transition:all .25s ease;
  z-index:90;
}
.scroll-top.visible{opacity:1;visibility:visible;}

/* ============================================
   Responsive
============================================ */
@media (max-width: 1024px){
  .who-grid{gap:40px;}
  .footer-grid{grid-template-columns:1fr 1fr 1fr;}
  .footer-newsletter{grid-column:1/3;}
}

@media (max-width: 900px){
  .main-nav, .hide-mobile{display:none;}
  .hamburger{display:flex;}
  .stats-card{grid-template-columns:repeat(2,1fr);}
  .who-grid{grid-template-columns:1fr;}
  .pillars-grid{grid-template-columns:1fr;}
  .why-grid{grid-template-columns:1fr 1fr;}
  .testimonial-scroll{grid-auto-flow:column;grid-auto-columns:75%;grid-template-columns:none;}
  .bottom-grid{grid-template-columns:1fr;gap:36px;}
  .footer-grid{grid-template-columns:1fr 1fr;}
  .footer-brand{grid-column:1/3;}
  .footer-newsletter{grid-column:1/3;}
  .hero-media-left{width:38%;right:38%;}
  .hero-media-right{width:42%;}
}

@media (max-width: 640px){
  .container{padding:0 18px;}
  .hero{padding:44px 0 90px;text-align:left;}
  .hero-media{position:static;display:none;}
  .hero-bg-img{opacity:.5;}
  .hero-content{max-width:100%;}
  .hero-btns .btn{flex:1;justify-content:center;}
  .stats-section{margin-top:-50px;}
  .stats-card{grid-template-columns:1fr 1fr;padding:24px 16px;gap:18px;}
  .stat{gap:10px;}
  .who-we-are{padding:90px 0 60px;}
  .pillars{padding:60px 0 50px;}
  .pillar-card{flex-direction:column;padding:34px 22px 26px;}
  .pillar-image{width:100%;height:160px;border-radius:16px;margin-top:10px;}
  .why-grid{grid-template-columns:1fr;}
  .testimonial-scroll{grid-auto-columns:88%;}
  .services-row{padding:16px;}
  .footer-grid{grid-template-columns:1fr;}
  .footer-brand, .footer-newsletter{grid-column:1/2;}
  .cta-inner{flex-direction:column;align-items:flex-start;text-align:left;}
  .mega-menu{
    position:static;
    transform:none;
    min-width:0;
    flex-direction:column;
    gap:20px;
    box-shadow:none;
    opacity:1;
    visibility:visible;
    display:none;
  }
}