import { useState, useEffect, useCallback, useRef } from 'react'
import {
  Smartphone,
  BatteryCharging,
  CheckCircle2,
  X,
  Globe,
  Plus,
  Minus,
  Trash2,
  CreditCard,
  ArrowDownRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Shield,
} from 'lucide-react'

/* ═══════════════════════════════════════════════════
   PAYMENT REDIRECTION LINK
   ═══════════════════════════════════════════════════ */
const PAYMENT_URL = 'https://d.sadad.qa/zuMOd'

/* ═══════════════════════════════════════════════════
   REAL FLATICON-STYLE ICONS
   ═══════════════════════════════════════════════════ */

/* 1. Real Cart Icon (Flaticon Style) */
function RealCartIcon({ className = 'w-5 h-5', ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      {...props}
    >
      <path
        d="M2.2 3.2H4.8L7.3 15.3C7.45 16 8.05 16.5 8.7 16.5H18.6C19.25 16.5 19.82 16.05 20 15.4L21.8 8.4H5.8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="9" cy="20" r="1.6" fill="currentColor" />
      <circle cx="18" cy="20" r="1.6" fill="currentColor" />
      <path
        d="M9.5 7.8H20.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="1.5 2"
        opacity="0.5"
      />
      <path
        d="M8.5 11.5H19.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeDasharray="1.5 2"
        opacity="0.5"
      />
    </svg>
  )
}

/* 2. Real Delivery Truck Icon (Flaticon Style) */
function FlaticonDeliveryTruck({ className = 'w-10 h-10' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="truckBody" x1="4" y1="12" x2="48" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#2563EB" />
          <stop offset="1" stopColor="#1E40AF" />
        </linearGradient>
        <linearGradient id="truckCab" x1="44" y1="22" x2="60" y2="44" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="wheelGrad" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#475569" />
          <stop offset="1" stopColor="#0F172A" />
        </linearGradient>
      </defs>
      <path d="M3 20H11M5 26H13M3 32H9" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      <rect x="12" y="14" width="34" height="28" rx="4" fill="url(#truckBody)" stroke="#60A5FA" strokeWidth="1.5" />
      <rect x="23" y="21" width="12" height="12" rx="2" fill="#F59E0B" opacity="0.9" />
      <path d="M23 25L29 28L35 25M29 28V33" stroke="#78350F" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M46 22H54C56.5 22 58.5 24 59.2 26.4L61 33.5C61.6 35.5 62 37 62 39V42H46V22Z" fill="url(#truckCab)" stroke="#60A5FA" strokeWidth="1.5" />
      <path d="M49 25H53.5L56.5 32H49V25Z" fill="#93C5FD" opacity="0.85" />
      <rect x="60" y="36" width="3" height="4" rx="1.5" fill="#FBBF24" />
      <circle cx="23" cy="46" r="7" fill="url(#wheelGrad)" stroke="#94A3B8" strokeWidth="2" />
      <circle cx="23" cy="46" r="3" fill="#E2E8F0" />
      <circle cx="51" cy="46" r="7" fill="url(#wheelGrad)" stroke="#94A3B8" strokeWidth="2" />
      <circle cx="51" cy="46" r="3" fill="#E2E8F0" />
    </svg>
  )
}

/* 3. Real Official Warranty Shield Icon (Flaticon Style) */
function FlaticonWarrantyShield({ className = 'w-10 h-10' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="shieldGrad" x1="12" y1="8" x2="52" y2="56" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E3A8A" />
          <stop offset="0.5" stopColor="#2563EB" />
          <stop offset="1" stopColor="#1D4ED8" />
        </linearGradient>
        <linearGradient id="goldBorder" x1="8" y1="6" x2="56" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FCD34D" />
          <stop offset="0.5" stopColor="#F59E0B" />
          <stop offset="1" stopColor="#B45309" />
        </linearGradient>
      </defs>
      <path d="M32 6L52 13V28C52 42 43.5 53.5 32 58C20.5 53.5 12 42 12 28V13L32 6Z" fill="url(#goldBorder)" />
      <path d="M32 9.5L48.5 15.5V28C48.5 40 41.5 49.5 32 53.5C22.5 49.5 15.5 40 15.5 28V15.5L32 9.5Z" fill="url(#shieldGrad)" />
      <circle cx="32" cy="30" r="12" fill="#F59E0B" opacity="0.25" />
      <path d="M24 30L29.5 35.5L40 25" stroke="#FDE047" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M48 10L49.5 13.5L53 15L49.5 16.5L48 20L46.5 16.5L43 15L46.5 13.5L48 10Z" fill="#FDE047" />
    </svg>
  )
}

/* 4. Real Secure Electronic Payment Card Icon (Flaticon Style) */
function FlaticonSecurePayment({ className = 'w-10 h-10' }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="cardGrad" x1="6" y1="14" x2="54" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1E40AF" />
          <stop offset="0.5" stopColor="#2563EB" />
          <stop offset="1" stopColor="#3B82F6" />
        </linearGradient>
        <linearGradient id="lockGold" x1="36" y1="28" x2="56" y2="54" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FDE047" />
          <stop offset="1" stopColor="#D97706" />
        </linearGradient>
      </defs>
      <rect x="6" y="14" width="46" height="28" rx="5" fill="url(#cardGrad)" stroke="#60A5FA" strokeWidth="1.5" />
      <rect x="6" y="20" width="46" height="6" fill="#0F172A" opacity="0.6" />
      <rect x="12" y="29" width="8" height="6" rx="1.5" fill="#FBBF24" stroke="#D97706" strokeWidth="0.8" />
      <path d="M24 30C25 31.5 25 33.5 24 35M27 28C29 31 29 35 27 37" stroke="#93C5FD" strokeWidth="1.2" strokeLinecap="round" />
      <rect x="36" y="34" width="20" height="16" rx="3.5" fill="url(#lockGold)" stroke="#FFF" strokeWidth="1" />
      <path d="M41 34V29C41 26.2 43.2 24 46 24C48.8 24 51 26.2 51 29V34" stroke="#FBBF24" strokeWidth="2.8" strokeLinecap="round" />
      <circle cx="46" cy="41" r="2" fill="#78350F" />
      <path d="M46 42.5V45.5" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/* ═══════════════════════════════════════════════════
   ANIMATED LASER TRANSITION LINE (Matching Image 4)
   ═══════════════════════════════════════════════════ */
function AnimatedLaserDivider() {
  return (
    <div className="relative w-full py-6 sm:py-8 overflow-hidden pointer-events-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[2px] w-full bg-slate-800/90 rounded-full overflow-hidden">
          {/* Subtle static ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-900/40 to-transparent" />
          {/* Glowing travelling neon laser beam */}
          <div className="laser-beam absolute top-[-1px] h-[4px] w-40 sm:w-64 bg-gradient-to-r from-transparent via-blue-500 to-cyan-400 rounded-full shadow-[0_0_15px_#3B82F6,0_0_30px_#06B6D4]" />
          {/* Leading laser dot */}
          <div className="laser-dot absolute top-[-3px] w-2.5 h-2.5 rounded-full bg-cyan-200 shadow-[0_0_12px_#38BDF8]" />
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   TRANSLATIONS
   ═══════════════════════════════════════════════════ */
const translations = {
  ar: {
    dir: 'rtl',
    lang: 'ar',
    brandSubtitle: 'متجر الأجهزة الإلكترونية',
    nav: {
      home: 'الرئيسية',
      products: 'المنتجات',
      cart: 'السلة',
    },
    langSwitch: 'English',
    hero: {
      pill: 'عروض حصرية 2026 — شحن فوري مجاني',
      title1: 'اعثر على',
      titleHighlight: 'أحدث الأجهزة',
      title2: 'بأفضل الأسعار في السوق',
      subtitle:
        'مجموعتنا المختارة بعناية توفر لك أرقى الهواتف والملحقات التكنولوجية بأداء فائق وضمان رسمي معتمد، لتجربة شراء استثنائية.',
      cta: 'منتجاتنا',
      heroDeviceLabel: 'Samsung S21+ 5G & Xiaomi 20000 mAh',
      findUsIn: 'طرق الدفع والشركاء المعتمدين :',
      partners: ['Sadad QA', 'Visa / Mastercard', 'توصيل سريع'],
    },
    productsSection: {
      tag: 'الأكثر طلباً',
      title: 'منتجاتنا الأفضل لهذا الشهر',
      subtitle:
        'تصاميم ذكية ومواصفات رائدة صُممت خصيصاً لتواكب نمط حياتك المتطور.',
      badgeNew: 'جديد',
      badgePopular: 'الأكثر مبيعاً',
      addToCartBtn: 'أضف إلى السلة',
      added: 'تمت الإضافة بنجاح ✓',
      specsLabel: 'المواصفات الرئيسية :',
    },
    cart: {
      title: 'سلة المشتريات',
      itemsCount: 'منتجات',
      empty: 'سلة المشتريات فارغة حالياً',
      emptyDesc: 'تصفح قائمة منتجاتنا وأضف ما يعجبك إلى السلة بنقرة واحدة!',
      explore: 'تصفح المنتجات الآن',
      unitPrice: 'سعر القطعة :',
      total: 'المجموع الإجمالي',
      shipping: 'الشحن',
      shippingFree: 'مجاني',
      checkout: 'إتمام الشراء والدفع الآن',
      checkoutSub: 'تحويل آمن إلى بوابة الدفع الرسمية Sadad QA',
    },
    toast: {
      addedToCart: '✅ تمت إضافة المنتج إلى السلة بنجاح!',
      paymentSuccess: '🎉 تم شراء المنتج بنجاح! تم إفراغ السلة وتوجيهك لصفحة المنتجات.',
    },
    paymentSuccessModal: {
      title: '🎉 تم شراء المنتج بنجاح وتم تأكيد الطلب !',
      subtitle:
        'لقد تمت عملية الشراء بنجاح واقتطاع المبلغ عبر بوابة Sadad QA المعتمدة. تم إفراغ سلة مشترياتك بالكامل ونحن بصدد تجهيز طلبك للشحن الفوري إلى عنوانك.',
      orderNumber: 'رقم الطلب المؤكد',
      statusLabel: 'حالة الدفع',
      statusValue: 'تم الدفع بنجاح 100%',
      cartStateLabel: 'حالة السلة',
      cartStateValue: 'فارغة تماماً (0 منتجات)',
      gatewayLabel: 'بوابة الدفع',
      gatewayValue: 'Sadad QA (بوابة معتمدة وآمنة)',
      purchasedItemsLabel: 'المنتجات التي تم شراؤها :',
      actionButton: 'العودة لتصفح المنتجات',
      helpText: 'شكراً لشرائكم من JBR Store! تم تسجيل طلبك بنجاح وسيصلك إشعار المتابعة قريباً.',
    },
    features: [
      {
        title: 'شحن سريع ومجاني',
        desc: 'توصيل آمن إلى باب منزلك',
        icon: FlaticonDeliveryTruck,
      },
      {
        title: 'ضمان رسمي شامل',
        desc: 'ضمان لمدة عامين كاملين',
        icon: FlaticonWarrantyShield,
      },
      {
        title: 'دفع إلكتروني آمن',
        desc: 'معتمد عبر بوابة Sadad QA',
        icon: FlaticonSecurePayment,
      },
    ],
    footer: {
      about:
        'JBR Store — وجهتك الأولى لأحدث الإلكترونيات والهواتف الذكية مع ضمان الجودة وسرعة التوصيل.',
      rights: '© {year} JBR Store. جميع الحقوق محفوظة.',
      securePayment: 'دفع آمن 100% مع Sadad',
    },
  },
  fr: {
    dir: 'ltr',
    lang: 'fr',
    brandSubtitle: 'Boutique d\'appareils électroniques',
    nav: {
      home: 'Accueil',
      products: 'Produits',
      cart: 'Panier',
    },
    langSwitch: 'English',
    hero: {
      pill: 'Offres Exclusives 2026 — Livraison Express Gratuite',
      title1: 'Trouvez Vos',
      titleHighlight: 'Meilleurs Appareils',
      title2: 'au meilleur prix du marché',
      subtitle:
        'Notre sélection soignée vous offre des smartphones et accessoires technologiques de pointe avec des performances exceptionnelles et une garantie certifiée.',
      cta: 'Nos Produits',
      heroDeviceLabel: 'Samsung S21+ 5G & Xiaomi 20000 mAh',
      findUsIn: 'Paiement & partenaires certifiés :',
      partners: ['Sadad QA', 'Visa / Mastercard', 'Livraison Rapide'],
    },
    productsSection: {
      tag: 'Le Plus Demandé',
      title: 'Nos meilleurs produits du mois',
      subtitle:
        'Designs intelligents et caractéristiques de pointe pour votre quotidien numérique.',
      badgeNew: 'Nouveau',
      badgePopular: 'Top Vente',
      addToCartBtn: 'Ajouter au Panier',
      added: 'Ajouté au Panier ✓',
      specsLabel: 'Spécifications principales :',
    },
    cart: {
      title: 'Panier d\'achat',
      itemsCount: 'articles',
      empty: 'Votre panier est actuellement vide',
      emptyDesc: 'Parcourez nos produits et ajoutez vos coups de cœur au panier !',
      explore: 'Découvrir les produits',
      unitPrice: 'Prix unitaire :',
      total: 'Total Général',
      shipping: 'Livraison',
      shippingFree: 'GRATUITE',
      checkout: 'Commander et Payer Maintenant',
      checkoutSub: 'Redirection sécurisée vers la passerelle officielle Sadad QA',
    },
    toast: {
      addedToCart: '✅ Produit ajouté au panier avec succès !',
      paymentSuccess: '🎉 Produit acheté avec succès ! Votre commande est validée et le panier a été vidé.',
    },
    paymentSuccessModal: {
      title: '🎉 Produit Acheté Avec Succès !',
      subtitle:
        'Votre achat a été effectué avec succès et le paiement est validé via Sadad QA. Votre panier a été vidé et votre commande est en cours de préparation pour une expédition express.',
      orderNumber: 'Numéro de commande',
      statusLabel: 'État du paiement',
      statusValue: 'Payé et Validé 100%',
      cartStateLabel: 'État du panier',
      cartStateValue: 'Vidé (0 articles)',
      gatewayLabel: 'Passerelle de paiement',
      gatewayValue: 'Sadad QA (Passerelle sécurisée)',
      purchasedItemsLabel: 'Articles achetés :',
      actionButton: 'Retour aux produits',
      helpText: 'Merci pour votre achat chez JBR Store ! Votre commande a été enregistrée avec succès.',
    },
    features: [
      {
        title: 'Livraison Express Gratuite',
        desc: 'Livraison rapide à votre porte',
        icon: FlaticonDeliveryTruck,
      },
      {
        title: 'Garantie Complète 2 Ans',
        desc: 'Couverture constructeur certifiée',
        icon: FlaticonWarrantyShield,
      },
      {
        title: 'Paiement 100% Sécurisé',
        desc: 'Propulsé par Sadad QA',
        icon: FlaticonSecurePayment,
      },
    ],
    footer: {
      about:
        'JBR Store — Votre référence pour les derniers smartphones et accessoires technologiques au meilleur prix.',
      rights: '© {year} JBR Store. Tous droits réservés.',
      securePayment: 'Paiement 100% sécurisé avec Sadad',
    },
  },
  en: {
    dir: 'ltr',
    lang: 'en',
    brandSubtitle: 'Smart Digital Gadgets',
    nav: {
      home: 'Home',
      products: 'Products',
      cart: 'Cart',
    },
    langSwitch: 'العربية',
    hero: {
      pill: 'Exclusive 2026 Deals — Free Express Shipping',
      title1: 'Find Your',
      titleHighlight: 'Gadget',
      title2: 'with worthy price in market',
      subtitle:
        'Our carefully curated collection brings you top-tier electronics and accessories with unbeatable performance and certified warranty.',
      cta: 'Our Products',
      heroDeviceLabel: 'Samsung S21+ 5G & Xiaomi 20000 mAh',
      findUsIn: 'Payment & verified partners :',
      partners: ['Sadad QA', 'Visa / Mastercard', 'Fast Delivery'],
    },
    productsSection: {
      tag: 'Trending Now',
      title: 'Our best product of the month',
      subtitle:
        'Smart designs and breakthrough specs engineered to elevate your daily digital lifestyle.',
      badgeNew: 'New',
      badgePopular: 'Popular',
      addToCartBtn: 'Add to Cart',
      added: 'Added to Cart ✓',
      specsLabel: 'Key Specifications :',
    },
    cart: {
      title: 'Shopping Cart',
      itemsCount: 'items',
      empty: 'Your cart is currently empty',
      emptyDesc: 'Browse our featured items and add your favorites with one click!',
      explore: 'Explore Products',
      unitPrice: 'Unit price :',
      total: 'Grand Total',
      shipping: 'Shipping',
      shippingFree: 'FREE',
      checkout: 'Checkout & Pay Now',
      checkoutSub: 'Secure redirect to official Sadad QA gateway',
    },
    toast: {
      addedToCart: '✅ Product added to cart successfully!',
      paymentSuccess: '🎉 Product purchased successfully! Your order is confirmed and cart emptied.',
    },
    paymentSuccessModal: {
      title: '🎉 Product Purchased Successfully!',
      subtitle:
        'Your purchase has been completed successfully and payment is confirmed via Sadad QA. Your shopping cart has been emptied and your order is now being prepared for express delivery.',
      orderNumber: 'Confirmed Order ID',
      statusLabel: 'Payment Status',
      statusValue: 'Paid & Verified 100%',
      cartStateLabel: 'Cart Status',
      cartStateValue: 'Emptied (0 items)',
      gatewayLabel: 'Payment Gateway',
      gatewayValue: 'Sadad QA (Verified & Secure)',
      purchasedItemsLabel: 'Purchased Items:',
      actionButton: 'Back to Browse Products',
      helpText: 'Thank you for shopping at JBR Store! Your order has been placed successfully.',
    },
    features: [
      {
        title: 'Free Express Shipping',
        desc: 'Fast delivery right to your door',
        icon: FlaticonDeliveryTruck,
      },
      {
        title: '2-Year Full Warranty',
        desc: 'Comprehensive certified coverage',
        icon: FlaticonWarrantyShield,
      },
      {
        title: '100% Secure Payment',
        desc: 'Powered by Sadad QA gateway',
        icon: FlaticonSecurePayment,
      },
    ],
    footer: {
      about:
        'JBR Store — Your ultimate hub for cutting-edge smartphones and tech accessories with guaranteed quality.',
      rights: '© {year} JBR Store. All rights reserved.',
      securePayment: '100% Secure Checkout with Sadad',
    },
  },
}

/* ═══════════════════════════════════════════════════
   PRODUCTS DATA WITH USER-UPLOADED IMAGES FROM PUBLIC/
   ═══════════════════════════════════════════════════ */
const productsData = [
  {
    id: 1,
    name: 'Samsung Galaxy S21+ 5G',
    subtitle: 'Smartphone 256 GB / 12 RAM',
    description:
      'Samsung Galaxy S21+ 5G Smartphone 256 GB / 12 RAM - 6.7" Dynamic AMOLED 2X Full HD Plus 1080 x 2400 - Octa-core - 256 GB / 12 RAM',
    price: 999,
    originalPrice: 1199,
    badgeKey: 'new',
    icon: Smartphone,
    /* Image 3/3 placed first as requested */
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&h=800&fit=crop&q=85',
      '/s21_ultra_phantomblack_colorselection_720x720_img.jpg',
      '/samsung-galaxy-s21-ultra-5g-1.jpg',
    ],
    specs: [
      '6.7" Dynamic AMOLED 2X',
      '256 GB Storage',
      '12 GB RAM',
      'Octa-core 5G',
      '1080 x 2400 FHD+',
    ],
  },
  {
    id: 2,
    name: 'Xiaomi 20000 mAh Power Bank',
    subtitle: 'Dual Port 18W Two-Way Fast Charge',
    description:
      'Xiaomi 20000 mAh Fast Charge Power Bank Dual input ports丨Dual output ports丨74Wh high capacity丨Two-way 18W fast charging',
    price: 49,
    originalPrice: 65,
    badgeKey: 'popular',
    icon: BatteryCharging,
    /* Image 3/3 placed first as requested */
    images: [
      'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=800&h=800&fit=crop&q=85',
      '/xiaomi-powerbank-exploded.jpg',
      '/xiaomi-powerbank-cable.jpg',
    ],
    specs: [
      '20000 mAh Capacity',
      '74Wh High Capacity',
      '18W Fast Charging',
      'Dual Input & Dual Output',
      'USB-C & Micro-USB',
    ],
  },
]

/* ═══════════════════════════════════════════════════
   PRODUCT IMAGE SLIDER (3 Images)
   ═══════════════════════════════════════════════════ */
function ProductImageSlider({ images, altName }) {
  const [index, setIndex] = useState(0)

  const handlePrev = (e) => {
    e.stopPropagation()
    setIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <div className="relative aspect-[4/3] overflow-hidden bg-[#070D1B] group/slider">
      <img
        src={images[index]}
        alt={`${altName} - view ${index + 1}`}
        className="w-full h-full object-cover transition-all duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D172E] via-transparent to-transparent opacity-60" />

      {/* Prev / Next Slider Arrows */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 -translate-y-1/2 start-2 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all cursor-pointer border border-slate-700/60 shadow-lg"
        aria-label="Previous image"
      >
        <ChevronLeft size={16} />
      </button>

      <button
        onClick={handleNext}
        className="absolute top-1/2 -translate-y-1/2 end-2 w-8 h-8 rounded-full bg-slate-900/80 hover:bg-blue-600 text-white backdrop-blur-md flex items-center justify-center opacity-0 group-hover/slider:opacity-100 transition-all cursor-pointer border border-slate-700/60 shadow-lg"
        aria-label="Next image"
      >
        <ChevronRight size={16} />
      </button>

      {/* Slider Pagination Dots */}
      <div className="absolute bottom-3 start-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 px-2.5 py-1 rounded-full bg-black/50 backdrop-blur-sm">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation()
              setIndex(i)
            }}
            className={`transition-all rounded-full cursor-pointer ${
              i === index
                ? 'w-5 h-2 bg-blue-500'
                : 'w-2 h-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>

      {/* Image Counter Badge */}
      <div className="absolute top-3 end-3 px-2 py-0.5 rounded-lg bg-black/60 backdrop-blur-md text-[10px] font-bold text-slate-300 border border-white/10">
        {index + 1} / {images.length}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   TOAST NOTIFICATION
   ═══════════════════════════════════════════════════ */
function Toast({ message, onClose }) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true)
      setTimeout(onClose, 300)
    }, 4000)
    return () => clearTimeout(timer)
  }, [onClose])

  const handleManualClose = () => {
    setExiting(true)
    setTimeout(onClose, 300)
  }

  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 z-[120] w-[calc(100%-2rem)] max-w-lg">
      <div
        className={`${
          exiting ? 'toast-exit' : 'toast-enter'
        } flex items-center gap-3.5 px-5 py-4 rounded-2xl
          bg-emerald-950/90 backdrop-blur-xl
          border border-emerald-500/40
          shadow-[0_12px_40px_rgba(16,185,129,0.3)]`}
      >
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 border border-emerald-400/40">
          <CheckCircle2 size={18} className="text-emerald-400" />
        </div>
        <p className="text-sm font-semibold text-emerald-200 leading-snug flex-1">
          {message}
        </p>
        <button
          onClick={handleManualClose}
          className="text-emerald-400/70 hover:text-emerald-200 p-1.5 rounded-lg hover:bg-emerald-500/15 transition-colors cursor-pointer shrink-0"
          aria-label="Close"
        >
          <X size={16} />
        </button>
      </div>
      <div className="mt-1 mx-4 h-1 rounded-full overflow-hidden bg-emerald-950/40">
        <div className="h-full bg-emerald-400/70 rounded-full progress-bar" />
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   PAYMENT SUCCESS CONFIRMATION MODAL
   - Returns client to products page
   - Empties cart (0 items)
   - Notifies that purchase & payment succeeded
   ═══════════════════════════════════════════════════ */
function PaymentSuccessModal({ isOpen, onClose, t, orderId, purchasedItems = [] }) {
  if (!isOpen) return null

  const handleReturnToProducts = () => {
    onClose()
    setTimeout(() => {
      const prodEl = document.getElementById('products')
      if (prodEl) {
        prodEl.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 150)
  }

  return (
    <div className="fixed inset-0 z-[130] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={handleReturnToProducts}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg rounded-3xl bg-[#0B1428] border-2 border-emerald-500/50 shadow-[0_0_60px_rgba(16,185,129,0.35)] p-6 sm:p-8 text-center space-y-5 overflow-hidden animate-in fade-in zoom-in-95 duration-300 max-h-[92vh] overflow-y-auto">
        {/* Glow ambient background */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button top corner */}
        <button
          onClick={handleReturnToProducts}
          className="absolute top-4 end-4 p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer z-20"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        {/* Top Success Badge with Checkmark & Sparkles */}
        <div className="relative mx-auto w-20 h-20 rounded-full bg-emerald-500/20 border-2 border-emerald-400/50 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.5)]">
          <div className="w-14 h-14 rounded-full bg-emerald-500 flex items-center justify-center text-white shadow-lg">
            <CheckCircle2 size={36} className="text-white" strokeWidth={2.5} />
          </div>
          {/* Subtle pulse ring */}
          <div className="absolute inset-0 rounded-full bg-emerald-400/30 animate-ping pointer-events-none" />
        </div>

        {/* Heading & Subtitle */}
        <div className="space-y-2 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/15 text-emerald-300 border border-emerald-400/30">
            <span>✓ {t.paymentSuccessModal.statusValue}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            {t.paymentSuccessModal.title}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md mx-auto">
            {t.paymentSuccessModal.subtitle}
          </p>
        </div>

        {/* Purchased Items Card - Shows purchased products with photos and prices */}
        {purchasedItems && purchasedItems.length > 0 && (
          <div className="p-4 rounded-2xl bg-[#070D1C] border border-emerald-500/30 text-start space-y-2.5 relative z-10">
            <div className="flex items-center justify-between text-xs text-emerald-400 font-bold border-b border-slate-800 pb-2">
              <span>{t.paymentSuccessModal.purchasedItemsLabel || 'Articles achetés :'}</span>
              <span>{purchasedItems.reduce((s, it) => s + (it.qty || 1), 0)} articles</span>
            </div>
            <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
              {purchasedItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 p-2 rounded-xl bg-slate-900/60 border border-slate-800/80">
                  {item.image && (
                    <img src={item.image} alt={item.name} className="w-11 h-11 rounded-lg object-cover bg-slate-800 border border-slate-700/50 shrink-0" />
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-white truncate">{item.name}</p>
                    <p className="text-[11px] text-slate-400">
                      {item.qty} × <span className="text-blue-400 font-bold">${item.price}</span>
                    </p>
                  </div>
                  <span className="text-xs font-extrabold text-emerald-400 shrink-0">
                    ${(item.price * (item.qty || 1)).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Order Details Card */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#070D1C] border border-blue-900/40 text-start space-y-3 relative z-10">
          <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
            <span className="text-slate-400">{t.paymentSuccessModal.orderNumber}</span>
            <span className="font-mono font-bold text-blue-400 text-sm tracking-wider" dir="ltr">
              #{orderId}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs pb-2 border-b border-slate-800">
            <span className="text-slate-400">{t.paymentSuccessModal.cartStateLabel}</span>
            <span className="font-bold text-emerald-400 flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
              {t.paymentSuccessModal.cartStateValue}
            </span>
          </div>

          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-400">{t.paymentSuccessModal.gatewayLabel}</span>
            <span className="font-bold text-slate-200">
              {t.paymentSuccessModal.gatewayValue}
            </span>
          </div>
        </div>

        {/* Help / Follow-up text */}
        <p className="text-[11px] text-slate-400 relative z-10">
          {t.paymentSuccessModal.helpText}
        </p>

        {/* Action Button: Return to Products with Rotating Conic Border */}
        <div className="relative z-10 pt-1">
          <button
            onClick={handleReturnToProducts}
            className="w-full relative p-[2px] rounded-2xl overflow-hidden group/btn transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.6)] hover:scale-[1.02] active:scale-[0.99]"
          >
            <span className="rotating-conic-border" />
            <span className="relative flex items-center justify-center gap-2 px-6 py-4 rounded-[14px] bg-[#0A1428] group-hover/btn:bg-[#0E1C38] text-white font-black text-sm sm:text-base">
              <span>{t.paymentSuccessModal.actionButton}</span>
              <ArrowDownRight size={18} className="text-emerald-400" />
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   CART MODAL / DRAWER
   ═══════════════════════════════════════════════════ */
function CartModal({ isOpen, onClose, cart, setCart, t }) {
  if (!isOpen) return null

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
  const totalCount = cart.reduce((sum, item) => sum + item.qty, 0)

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty + delta } : item))
        .filter((item) => item.qty > 0)
    )
  }

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const handleCheckout = () => {
    try {
      const orderData = {
        items: [...cart],
        total,
        orderId: `JBR-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`,
        timestamp: Date.now(),
      }
      localStorage.setItem('jbr_pending_order', JSON.stringify(orderData))
      localStorage.setItem('jbr_pending_checkout', 'true')
      sessionStorage.setItem('jbr_pending_checkout', 'true')
    } catch (e) {
      // ignore
    }
    window.location.href = PAYMENT_URL
  }

  return (
    <div className="fixed inset-0 z-[110] flex">
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-md modal-overlay"
        onClick={onClose}
      />

      <div className="modal-panel relative ms-auto w-full max-w-md bg-[#0B1324] border-s border-blue-900/40 shadow-[0_0_60px_rgba(0,0,0,0.8)] flex flex-col h-full">
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-800/80 bg-[#0E172E]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shadow-inner">
              <RealCartIcon className="w-5 h-5 text-blue-400" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white">
                {t.cart.title}
              </h2>
              <span className="text-xs text-blue-400/90 font-medium">
                {totalCount} {t.cart.itemsCount}
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-3.5">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-4 py-16 px-4">
              <div className="w-20 h-20 rounded-2xl bg-slate-900/80 border border-slate-800 flex items-center justify-center text-slate-500">
                <RealCartIcon className="w-10 h-10 text-slate-600" />
              </div>
              <div className="space-y-1">
                <p className="text-white font-bold text-base">{t.cart.empty}</p>
                <p className="text-xs sm:text-sm text-slate-400 max-w-xs">
                  {t.cart.emptyDesc}
                </p>
              </div>
              <button
                onClick={onClose}
                className="mt-2 px-5 py-2.5 rounded-xl bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 border border-blue-500/30 text-xs font-bold transition-all cursor-pointer"
              >
                {t.cart.explore}
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-3.5 p-3.5 rounded-2xl bg-[#111C35] border border-blue-900/30 hover:border-blue-600/40 transition-all shadow-sm"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 rounded-xl object-cover shrink-0 bg-slate-900 border border-slate-800"
                />
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white truncate leading-snug">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      {t.cart.unitPrice}{' '}
                      <span className="text-blue-400 font-bold">${item.price}</span>
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-center gap-1.5 bg-[#090F1E] rounded-xl p-1 border border-slate-800">
                      <button
                        onClick={() => updateQty(item.id, -1)}
                        className="w-7 h-7 rounded-lg bg-slate-800/80 flex items-center justify-center hover:bg-blue-600 hover:text-white text-slate-300 transition-colors cursor-pointer"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={13} />
                      </button>
                      <span className="text-xs font-bold text-white w-6 text-center">
                        {item.qty}
                      </span>
                      <button
                        onClick={() => updateQty(item.id, 1)}
                        className="w-7 h-7 rounded-lg bg-slate-800/80 flex items-center justify-center hover:bg-blue-600 hover:text-white text-slate-300 transition-colors cursor-pointer"
                        aria-label="Increase quantity"
                      >
                        <Plus size={13} />
                      </button>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-sm font-extrabold text-white">
                        ${(item.price * item.qty).toLocaleString()}
                      </span>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-1.5 rounded-lg text-rose-400/80 hover:text-rose-300 hover:bg-rose-500/15 transition-colors cursor-pointer"
                        aria-label="Remove item"
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="px-6 py-5 border-t border-slate-800/80 bg-[#0E172E] space-y-3.5">
            <div className="space-y-2 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>{t.cart.shipping}</span>
                <span className="text-emerald-400 font-bold">
                  {t.cart.shippingFree}
                </span>
              </div>
              <div className="flex justify-between items-baseline pt-1 border-t border-slate-800">
                <span className="text-sm font-semibold text-slate-300">
                  {t.cart.total}
                </span>
                <span className="text-2xl font-extrabold text-white bg-gradient-to-r from-blue-400 to-indigo-300 bg-clip-text text-transparent">
                  ${total.toLocaleString()}
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              className="btn-animated w-full relative flex items-center justify-center gap-2.5 px-6 py-4 rounded-2xl font-bold text-white text-sm sm:text-base
                bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600
                hover:from-blue-500 hover:to-indigo-500
                shadow-[0_8px_25px_rgba(37,99,235,0.4)]
                active:scale-[0.98] transition-all cursor-pointer"
            >
              <CreditCard size={18} />
              <span>{t.cart.checkout}</span>
              <ExternalLink size={16} className="opacity-80" />
            </button>

            <p className="text-[11px] text-center text-slate-500">
              🔒 {t.cart.checkoutSub}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   BACKGROUND ORBITAL ARCS & CIRCLES
   ═══════════════════════════════════════════════════ */
function BackgroundDecorations() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <div className="circle-1 absolute -top-40 start-[-100px] w-[550px] h-[550px] rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="circle-2 absolute top-20 end-[-80px] w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[130px]" />
      <div className="circle-3 absolute top-[45%] start-1/4 w-[450px] h-[450px] rounded-full bg-cyan-500/[0.07] blur-[110px]" />
      <div className="circle-4 absolute bottom-[-100px] end-1/3 w-[600px] h-[600px] rounded-full bg-purple-600/[0.08] blur-[140px]" />

      <svg
        className="absolute top-0 start-1/2 -translate-x-1/2 w-[1400px] h-[950px] opacity-25"
        viewBox="0 0 1400 950"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="700"
          cy="350"
          r="480"
          stroke="url(#ring-grad-1)"
          strokeWidth="1"
          strokeDasharray="4 8"
        />
        <circle
          cx="700"
          cy="350"
          r="680"
          stroke="url(#ring-grad-2)"
          strokeWidth="1.2"
        />
        <circle
          cx="700"
          cy="350"
          r="860"
          stroke="url(#ring-grad-1)"
          strokeWidth="0.8"
          strokeDasharray="8 12"
        />
        <defs>
          <linearGradient id="ring-grad-1" x1="0" y1="0" x2="1400" y2="950">
            <stop stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="0.5" stopColor="#818CF8" stopOpacity="0.1" />
            <stop offset="1" stopColor="#06B6D4" stopOpacity="0.3" />
          </linearGradient>
          <linearGradient id="ring-grad-2" x1="1400" y1="0" x2="0" y2="950">
            <stop stopColor="#6366F1" stopOpacity="0.3" />
            <stop offset="1" stopColor="#3B82F6" stopOpacity="0.05" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   HEADER COMPONENT
   - Green dot removed!
   - Logo 3D is bold, turning slowly (18s).
   - Brand name strictly "JBR Store" with Montserrat font matching Image 3.
   - Cart counter ONLY visible when cartCount > 0!
   ═══════════════════════════════════════════════════ */
function Header({ t, lang, setLang, cartCount, onCartClick, activeSection }) {
  const [scrolled, setScrolled] = useState(false)
  const [wobble, setWobble] = useState(false)
  const prevCount = useRef(cartCount)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (cartCount > prevCount.current) {
      setWobble(true)
      const tId = setTimeout(() => setWobble(false), 700)
      prevCount.current = cartCount
      return () => clearTimeout(tId)
    }
    prevCount.current = cartCount
  }, [cartCount])

  const toggleLanguage = () => {
    const list = ['ar', 'fr', 'en']
    const nextIdx = (list.indexOf(lang) + 1) % list.length
    setLang(list[nextIdx])
  }

  return (
    <header
      className={`fixed top-0 start-0 end-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060B18]/90 backdrop-blur-xl border-b border-blue-900/30 shadow-2xl shadow-black/40 py-3'
          : 'bg-transparent py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo - Green dot REMOVED, Logo bolder, rotation 18s */}
        <a href="#home" className="flex items-center gap-3.5 group">
          <div className="relative">
            <div className="logo-3d-spin">
              <img
                src="/jbr-logo.jpg"
                alt="JBR Store"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl object-cover border-2 border-blue-400/80 shadow-[0_0_30px_rgba(37,99,235,0.6)] ring-1 ring-blue-500/40"
              />
            </div>
          </div>

          {/* Logo font matches Image 3 (Montserrat extra bold) */}
          <div className="flex flex-col text-start">
            <span
              dir="ltr"
              className="font-logo text-2xl sm:text-3xl font-black text-white inline-flex items-baseline"
            >
              JBR<span className="text-blue-500 ms-1.5">Store</span>
            </span>
            <span className="text-[10px] text-slate-400 font-medium tracking-wide">
              {t.brandSubtitle}
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          <a
            href="#home"
            className={`text-sm font-bold tracking-wide transition-all relative py-1 ${
              activeSection === 'home'
                ? 'text-blue-400'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {t.nav.home}
            {activeSection === 'home' && (
              <span className="absolute bottom-0 start-0 end-0 h-0.5 bg-blue-500 rounded-full" />
            )}
          </a>
          <a
            href="#products"
            className={`text-sm font-bold tracking-wide transition-all relative py-1 ${
              activeSection === 'products'
                ? 'text-blue-400'
                : 'text-slate-300 hover:text-white'
            }`}
          >
            {t.nav.products}
            {activeSection === 'products' && (
              <span className="absolute bottom-0 start-0 end-0 h-0.5 bg-blue-500 rounded-full" />
            )}
          </a>
        </nav>

        {/* Right Actions: Language Switcher + Cart */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleLanguage}
            className="btn-animated flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60 transition-all cursor-pointer text-xs font-bold"
            title="Toggle Language"
          >
            <Globe size={15} className="text-blue-400" />
            <span>{t.langSwitch}</span>
          </button>

          {/* Cart Button: Counter ONLY shown when cartCount > 0 */}
          <button
            id="open-cart-btn"
            onClick={onCartClick}
            className={`btn-animated relative flex items-center gap-2.5 px-3.5 sm:px-4 py-2 rounded-xl bg-gradient-to-r from-blue-600/20 to-indigo-600/20 hover:from-blue-600/30 hover:to-indigo-600/30 text-white border border-blue-500/40 hover:border-blue-400 transition-all cursor-pointer shadow-lg shadow-blue-500/10 ${
              wobble ? 'cart-wobble' : ''
            }`}
            aria-label="Open Shopping Cart"
          >
            <RealCartIcon className="w-5 h-5 text-blue-400 shrink-0" />
            <span className="text-xs font-bold hidden sm:inline text-slate-200">
              {t.nav.cart}
            </span>
            {cartCount > 0 && (
              <span
                id="cart-counter-badge"
                className="flex items-center justify-center min-w-[22px] h-[22px] px-1.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-black shadow-md shadow-blue-500/40"
              >
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav sub-bar */}
      <div className="md:hidden flex items-center justify-center gap-8 pt-2.5 pb-1 border-t border-slate-800/40 mt-2">
        <a
          href="#home"
          className={`text-xs font-bold transition-colors ${
            activeSection === 'home' ? 'text-blue-400' : 'text-slate-400'
          }`}
        >
          {t.nav.home}
        </a>
        <a
          href="#products"
          className={`text-xs font-bold transition-colors ${
            activeSection === 'products' ? 'text-blue-400' : 'text-slate-400'
          }`}
        >
          {t.nav.products}
        </a>
      </div>
    </header>
  )
}

/* ═══════════════════════════════════════════════════
   HERO SECTION
   - Floating card moved DOWN so "S21+ 5G" is fully visible!
   - Redmi changed to Xiaomi 20000 mAh.
   ═══════════════════════════════════════════════════ */
function HeroSection({ t }) {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center pt-28 sm:pt-36 pb-20 overflow-hidden hero-gradient"
    >
      <BackgroundDecorations />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-start fade-in-up">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-400 text-xs sm:text-sm font-semibold backdrop-blur-md">
              <span>{t.hero.pill}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              {t.hero.title1}{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                {t.hero.titleHighlight}
              </span>
              <br />
              {t.hero.title2}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#products"
                className="relative p-[2px] rounded-2xl overflow-hidden group/cta inline-flex items-center justify-center cursor-pointer shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:scale-[1.02] transition-all"
              >
                <span className="rotating-conic-border" />
                <span className="relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-[14px] bg-[#0A1428] group-hover/cta:bg-[#0E1C38] text-white font-bold text-sm sm:text-base transition-colors">
                  <span>{t.hero.cta}</span>
                  <ArrowDownRight size={18} className="text-cyan-400 group-hover/cta:translate-x-0.5 group-hover/cta:translate-y-0.5 transition-transform" />
                </span>
              </a>

              <a
                href="#products"
                className="btn-animated inline-flex items-center gap-2 px-6 py-4 rounded-2xl font-semibold text-sm sm:text-base text-slate-200
                  bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-blue-500/50 transition-all cursor-pointer"
              >
                <span>{t.hero.heroDeviceLabel}</span>
              </a>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-slate-400">
              <span className="font-semibold text-slate-300">
                {t.hero.findUsIn}
              </span>
              {t.hero.partners.map((partner) => (
                <div
                  key={partner}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/70 border border-slate-800 text-slate-300 text-xs font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>{partner}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Hero Showcase */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end pb-8 sm:pb-12">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/20 rounded-[2.5rem] blur-3xl" />

              <div className="relative rounded-[2.5rem] bg-gradient-to-b from-[#101B34] to-[#0A1224] p-4 sm:p-5 border border-blue-500/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
                {/* Product Image Frame */}
                <div className="relative rounded-[2rem] overflow-hidden aspect-[4/4.5] bg-[#070D1A]">
                  <img
                    src="https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&h=800&fit=crop&q=85"
                    alt="Samsung Galaxy S21+ 5G"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1224] via-transparent to-transparent opacity-80" />

                  {/* Rating tag top-start */}
                  <div className="absolute top-4 start-4">
                    <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold bg-slate-900/80 backdrop-blur-md text-amber-300 border border-amber-400/30">
                      ★ 5.0
                    </span>
                  </div>

                  {/* S21+ 5G Title (Fully visible!) */}
                  <div className="absolute bottom-6 start-6 end-6 space-y-1">
                    <span className="text-[11px] font-bold text-blue-400 uppercase tracking-widest">
                      SAMSUNG
                    </span>
                    <h3 className="text-2xl font-black text-white tracking-wide">
                      S21+ 5G
                    </h3>
                  </div>
                </div>
              </div>

              {/* Floating Miniature MOVED DOWN so S21+ 5G is 100% visible! */}
              <div className="absolute -bottom-14 sm:-bottom-16 -start-4 sm:-start-8 float-animation z-20">
                <div className="p-3.5 rounded-2xl bg-[#0F1A33]/95 backdrop-blur-xl border border-blue-500/30 shadow-2xl flex items-center gap-3 w-52 sm:w-56">
                  <img
                    src="/xiaomi-powerbank-exploded.jpg"
                    alt="Xiaomi 20000 mAh Power Bank"
                    className="w-12 h-12 rounded-xl object-cover bg-slate-900 border border-slate-700 shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] text-blue-400 font-bold uppercase tracking-wider">
                      Xiaomi 20000 mAh
                    </p>
                    <p className="text-xs font-bold text-white truncate">
                      Power Bank 18W
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Super AMOLED badge top right */}
              <div className="absolute -top-4 -end-4 sm:-end-6 z-20">
                <div className="px-3.5 py-2 rounded-2xl bg-[#0F1A33]/90 backdrop-blur-md border border-cyan-500/30 shadow-xl flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-bold text-cyan-300">
                    Super AMOLED "6.7
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   FEATURES STRIP (Flaticon Real Icons)
   ═══════════════════════════════════════════════════ */
function FeaturesStrip({ t }) {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        {t.features.map(({ title, desc, icon: IconComponent }) => (
          <div
            key={title}
            className="p-5 sm:p-6 rounded-2xl bg-[#0B1428]/85 border border-blue-900/30 hover:border-blue-500/40 backdrop-blur-md transition-all flex items-center gap-4 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#0E1A36] border border-blue-500/30 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform p-2">
              <IconComponent className="w-10 h-10" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white">
                {title}
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   PRODUCT CARD COMPONENT
   - Slider with 3 user-provided images
   - Numbers explicitly wrapped in dir="ltr" text-left
   - -20% in green retained beside price
   - Button text: "أضف إلى السلة" in Arabic, "Add to Cart" in English
   ═══════════════════════════════════════════════════ */
function ProductCard({ product, t, onAddToCart }) {
  const [justAdded, setJustAdded] = useState(false)
  const CategoryIcon = product.icon

  const handleAddClick = () => {
    if (justAdded) return
    onAddToCart(product)
    setJustAdded(true)
    setTimeout(() => setJustAdded(false), 2000)
  }

  return (
    <div className="card-shine glow-hover group rounded-3xl bg-[#0D172E] border border-blue-900/40 hover:border-blue-500/50 transition-all duration-500 flex flex-col overflow-hidden shadow-xl">
      {/* 3-Image Slider using user-uploaded product photos */}
      <ProductImageSlider images={product.images} altName={product.name} />

      {/* Content Section */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
        <div className="space-y-3">
          {/* Subtitle / Category */}
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-blue-400 tracking-wider uppercase">
              {product.subtitle}
            </span>
            <div className="w-8 h-8 rounded-xl bg-[#0B1324] border border-blue-500/30 flex items-center justify-center text-blue-400">
              <CategoryIcon size={16} />
            </div>
          </div>

          {/* Product Title */}
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-xs sm:text-sm text-slate-300/90 leading-relaxed bg-[#080E1D] p-3.5 rounded-2xl border border-slate-800/80">
            {product.description}
          </p>

          {/* Specs Tags strictly formatted in dir="ltr" so numbers stay on the left */}
          <div className="space-y-1.5 text-start">
            <span className="text-[11px] font-bold text-slate-400">
              {t.productsSection.specsLabel}
            </span>
            <div className="flex flex-wrap gap-1.5" dir="ltr">
              {product.specs.map((spec) => (
                <span
                  key={spec}
                  className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-[#13203E] text-slate-200 border border-blue-900/40 text-left"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Price + Original Price + -20% Green Badge + Add to Cart Button */}
        <div className="pt-4 border-t border-slate-800 space-y-3">
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-black text-white">
              ${product.price}
            </span>
            <span className="text-sm font-semibold text-slate-500 line-through">
              ${product.originalPrice}
            </span>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
              -20%
            </span>
          </div>

          {/* ADD TO CART BUTTON with exact same animated border as منتجاتنا */}
          <button
            id={`add-to-cart-btn-${product.id}`}
            onClick={handleAddClick}
            disabled={justAdded}
            className={`w-full relative p-[2px] rounded-2xl overflow-hidden group/btn transition-all duration-300 cursor-pointer shadow-[0_10px_30px_rgba(37,99,235,0.4)] hover:shadow-[0_0_35px_rgba(139,92,246,0.6)] hover:scale-[1.02] active:scale-[0.99] ${
              justAdded ? 'shadow-emerald-500/30' : ''
            }`}
          >
            {/* Exact same rotating multi-color conic border as Hero CTA */}
            {justAdded ? (
              <span className="absolute inset-0 bg-emerald-500 rounded-2xl" />
            ) : (
              <span className="rotating-conic-border" />
            )}

            {/* Inner Button Face */}
            <span
              className={`relative flex items-center justify-center gap-2.5 px-6 py-4 rounded-[14px] text-white font-black text-sm sm:text-base transition-all duration-300 ${
                justAdded
                  ? 'bg-emerald-600'
                  : 'bg-[#0A1428] group-hover/btn:bg-[#0E1C38]'
              }`}
            >
              {justAdded ? (
                <>
                  <CheckCircle2 size={18} className="text-white" />
                  <span className="text-white font-black">{t.productsSection.added}</span>
                </>
              ) : (
                <>
                  <RealCartIcon className="w-5 h-5 text-blue-400 group-hover/btn:scale-110 transition-transform" />
                  <span className="text-white font-black tracking-wide text-base">
                    {t.productsSection.addToCartBtn}
                  </span>
                  <Plus size={16} className="ms-1 text-cyan-400" />
                </>
              )}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════
   PRODUCTS SECTION
   ═══════════════════════════════════════════════════ */
function ProductsSection({ t, onAddToCart }) {
  return (
    <section id="products" className="relative py-16 sm:py-24 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12 sm:mb-16 space-y-3 text-start">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 text-xs font-bold">
            <span>{t.productsSection.tag}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {t.productsSection.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {t.productsSection.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {productsData.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              t={t}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════════
   FOOTER COMPONENT
   ═══════════════════════════════════════════════════ */
function Footer({ t }) {
  return (
    <footer className="relative border-t border-slate-800/80 bg-[#040812] py-12 sm:py-16 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3.5">
            <div className="logo-3d-spin">
              <img
                src="/jbr-logo.jpg"
                alt="JBR Store"
                className="w-11 h-11 rounded-2xl object-cover border-2 border-blue-400/80 shadow-[0_0_20px_rgba(37,99,235,0.4)]"
              />
            </div>
            <div className="flex flex-col text-start">
              <span
                dir="ltr"
                className="font-logo text-xl sm:text-2xl font-black text-white inline-flex items-baseline"
              >
                JBR<span className="text-blue-500 ms-1.5">Store</span>
              </span>
              <p className="text-xs text-slate-400">{t.brandSubtitle}</p>
            </div>
          </div>

          <p className="text-xs text-slate-400 max-w-md text-center md:text-start">
            {t.footer.about}
          </p>

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300">
            <Shield size={14} className="text-emerald-400" />
            <span>{t.footer.securePayment}</span>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>{t.footer.rights.replace('{year}', new Date().getFullYear())}</p>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-blue-400 transition-colors">
              {t.nav.home}
            </a>
            <a href="#products" className="hover:text-blue-400 transition-colors">
              {t.nav.products}
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ═══════════════════════════════════════════════════
   MAIN APP ROOT
   ═══════════════════════════════════════════════════ */
export default function App() {
  const [lang, setLang] = useState('ar')
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('jbr_cart')
      return saved ? JSON.parse(saved) : []
    } catch (e) {
      return []
    }
  })
  const [cartOpen, setCartOpen] = useState(false)
  const [toast, setToast] = useState(null)
  const [activeSection, setActiveSection] = useState('home')
  const [paymentSuccessModalOpen, setPaymentSuccessModalOpen] = useState(false)
  const [confirmedOrderId, setConfirmedOrderId] = useState('JBR-2026-98421')
  const [purchasedItems, setPurchasedItems] = useState([])
  const hasTriggeredSuccess = useRef(false)

  const t = translations[lang] || translations.ar

  /* Sync cart with localStorage */
  useEffect(() => {
    try {
      localStorage.setItem('jbr_cart', JSON.stringify(cart))
    } catch (e) {
      // ignore
    }
  }, [cart])

  useEffect(() => {
    document.documentElement.dir = t.dir
    document.documentElement.lang = t.lang
  }, [t.dir, t.lang])

  /* Complete Post-Payment Success Return Flow */
  const triggerPaymentSuccessFlow = useCallback(
    (customOrderId, orderItems = []) => {
      const generatedId =
        customOrderId || `JBR-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`
      setConfirmedOrderId(generatedId)
      if (orderItems && orderItems.length > 0) {
        setPurchasedItems(orderItems)
      }

      // 1. Empty the cart completely (panier khawya)
      setCart([])
      try {
        localStorage.removeItem('jbr_cart')
      } catch (e) {
        // ignore
      }

      // 2. Close cart drawer
      setCartOpen(false)

      // 3. Open celebratory confirmation modal
      setPaymentSuccessModalOpen(true)

      // 4. Show success toast notification
      setToast(t.toast.paymentSuccess)

      // 5. Scroll viewport smoothly to products section (khaso yraj3o n la page dyal products)
      setTimeout(() => {
        const prodElem = document.getElementById('products')
        if (prodElem) {
          prodElem.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 300)
    },
    [t.toast.paymentSuccess]
  )

  /* Check for payment success return via URL query parameters, Sadad invoice ID, hash, or checkout return flag */
  useEffect(() => {
    if (hasTriggeredSuccess.current) return

    const params = new URLSearchParams(window.location.search)
    const hash = (window.location.hash || '').toLowerCase()

    // 1. Check all status query parameters case-insensitively
    const statusVal = (params.get('status') || '').toLowerCase()
    const paymentStatusVal = (params.get('payment_status') || '').toLowerCase()
    const paymentVal = (params.get('payment') || '').toLowerCase()
    const checkoutVal = (params.get('checkout') || '').toLowerCase()
    const paidVal = (params.get('paid') || '').toLowerCase()
    const resultVal = (params.get('result') || '').toLowerCase()

    const hasSuccessStatus =
      ['success', 'paid', 'completed', 'complete', 'captured', '1', 'true', 'ok'].includes(statusVal) ||
      ['success', 'paid', 'completed', 'complete', 'captured', '1', 'true', 'ok'].includes(paymentStatusVal) ||
      ['success', 'paid', 'true'].includes(paymentVal) ||
      ['success', 'paid', 'true'].includes(checkoutVal) ||
      ['true', '1', 'yes'].includes(paidVal) ||
      ['success', 'captured', 'approved'].includes(resultVal)

    // Sadad QA specific parameters (Sadad returns invoice_id, invoiceId, transaction_id, etc.)
    const sadadInvoiceId =
      params.get('invoice_id') ||
      params.get('invoiceId') ||
      params.get('InvoiceId') ||
      params.get('transaction_id') ||
      params.get('transactionId') ||
      params.get('order_id') ||
      params.get('orderId') ||
      params.get('ref') ||
      params.get('reference')

    const hasSuccessHash =
      hash === '#payment-success' ||
      hash === '#success' ||
      hash === '#paid'

    // 2. Check pending checkout from localStorage/sessionStorage
    let hadPendingCheckout = false
    let pendingOrderData = null
    try {
      const storedFlag =
        localStorage.getItem('jbr_pending_checkout') ||
        sessionStorage.getItem('jbr_pending_checkout')
      const storedOrder = localStorage.getItem('jbr_pending_order')
      if (storedOrder) {
        pendingOrderData = JSON.parse(storedOrder)
      }
      if (
        storedFlag === 'true' &&
        pendingOrderData &&
        Date.now() - (pendingOrderData.timestamp || 0) < 2 * 60 * 60 * 1000
      ) {
        hadPendingCheckout = true
      }
    } catch (e) {
      // ignore
    }

    const isPaymentSuccess =
      hasSuccessStatus ||
      Boolean(sadadInvoiceId) ||
      hasSuccessHash ||
      (hadPendingCheckout &&
        (params.has('status') ||
          params.has('payment') ||
          params.has('invoice_id') ||
          hash.includes('product') ||
          hash.includes('success')))

    if (isPaymentSuccess) {
      hasTriggeredSuccess.current = true

      // Clean storage flags
      try {
        localStorage.removeItem('jbr_pending_checkout')
        localStorage.removeItem('jbr_pending_order')
        sessionStorage.removeItem('jbr_pending_checkout')
      } catch (e) {
        // ignore
      }

      const finalOrderId =
        sadadInvoiceId ||
        pendingOrderData?.orderId ||
        `JBR-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`

      const finalItems = pendingOrderData?.items || []

      triggerPaymentSuccessFlow(finalOrderId, finalItems)

      // Clean query parameters from URL cleanly without page refresh, pointing to #products
      try {
        const cleanUrl = new URL(window.location.href)
        const paramsToRemove = [
          'status',
          'payment',
          'paid',
          'payment_status',
          'checkout',
          'invoice_id',
          'invoiceId',
          'InvoiceId',
          'transaction_id',
          'transactionId',
          'order_id',
          'orderId',
          'ref',
          'reference',
          'result',
        ]
        paramsToRemove.forEach((p) => cleanUrl.searchParams.delete(p))
        cleanUrl.hash = '#products'
        window.history.replaceState(
          {},
          '',
          cleanUrl.pathname + cleanUrl.search + cleanUrl.hash
        )
      } catch (e) {
        // ignore
      }
    }
  }, [triggerPaymentSuccessFlow])

  /* Scrollspy */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.3 }
    )

    const homeElem = document.getElementById('home')
    const prodElem = document.getElementById('products')
    if (homeElem) observer.observe(homeElem)
    if (prodElem) observer.observe(prodElem)

    return () => observer.disconnect()
  }, [])

  /* Add to Cart Handler */
  const handleAddToCart = useCallback(
    (product) => {
      setCart((prev) => {
        const found = prev.find((item) => item.id === product.id)
        if (found) {
          return prev.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          )
        }
        return [
          ...prev,
          {
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.images[0],
            qty: 1,
          },
        ]
      })
      setToast(t.toast.addedToCart)
    },
    [t.toast.addedToCart]
  )

  const totalCartCount = cart.reduce((sum, item) => sum + item.qty, 0)

  return (
    <div className="min-h-screen bg-[#060B18] text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* Toast Notification */}
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}

      {/* Payment Success Confirmation Modal */}
      <PaymentSuccessModal
        isOpen={paymentSuccessModalOpen}
        onClose={() => setPaymentSuccessModalOpen(false)}
        t={t}
        orderId={confirmedOrderId}
        purchasedItems={purchasedItems}
      />

      {/* Cart Modal / Drawer */}
      <CartModal
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        setCart={setCart}
        t={t}
      />

      {/* Header */}
      <Header
        t={t}
        lang={lang}
        setLang={setLang}
        cartCount={totalCartCount}
        onCartClick={() => setCartOpen(true)}
        activeSection={activeSection}
      />

      {/* Hero Section */}
      <HeroSection t={t} />

      {/* Animated Laser Divider Line (Matching Image 4) */}
      <AnimatedLaserDivider />

      {/* Features Strip */}
      <FeaturesStrip t={t} />

      {/* Animated Laser Divider Line before Products */}
      <AnimatedLaserDivider />

      {/* Products Section with User Product Photos & -20% Green Badge */}
      <ProductsSection t={t} onAddToCart={handleAddToCart} />

      {/* Footer */}
      <Footer t={t} />
    </div>
  )
}
