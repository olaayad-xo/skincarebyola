// Mock database for skin conditions, products, and ingredients
// This will be replaced with a real database when you expand the app

export interface SkinCondition {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  symptoms: string[];
  affectedAreas: string[];
  severity: 'mild' | 'moderate' | 'severe';
  imageUrl: string;
  category: string;
  activeIngredients: string[];
  treatmentDuration: string;
  commonAge: string;
}

export interface ActiveIngredient {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  benefits: string[];
  sideEffects: string[];
  concentration: string;
  skinTypes: string[];
  avoidWith: string[];
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  currency: string;
  imageUrl: string;
  activeIngredients: string[];
  effectiveness: number; // 1-5 rating
  origin: 'egyptian' | 'imported';
  country?: string;
  description: string;
  usage: string;
  sideEffects: string[];
  skinTypes: string[];
  conditionIds: string[];
  inStock: boolean;
  featured: boolean;
}

export interface UserRoutine {
  id: string;
  date: string;
  conditionId: string;
  products: string[];
  notes: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  skinType: string;
  concerns: string[];
  routines: UserRoutine[];
}

// Skin Conditions Database
export const skinConditions: SkinCondition[] = [
  {
    id: 'acne-vulgaris',
    name: 'Acne Vulgaris',
    nameAr: 'حب الشباب',
    description: 'A common skin condition that occurs when hair follicles become clogged with oil and dead skin cells. It causes whiteheads, blackheads, or pimples and usually appears on the face, forehead, chest, upper back, and shoulders.',
    symptoms: ['Whiteheads', 'Blackheads', 'Papules', 'Pustules', 'Nodules', 'Cystic lesions'],
    affectedAreas: ['Face', 'Forehead', 'Chest', 'Back', 'Shoulders'],
    severity: 'moderate',
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop',
    category: 'Inflammatory',
    activeIngredients: ['salicylic-acid', 'benzoyl-peroxide', 'retinoid', 'niacinamide'],
    treatmentDuration: '4-8 weeks for initial improvement, 3-6 months for significant results',
    commonAge: '12-25 years'
  },
  {
    id: 'eczema',
    name: 'Eczema (Atopic Dermatitis)',
    nameAr: 'الأكزيما',
    description: 'A condition that makes your skin red and itchy. It\'s common in children but can occur at any age. Atopic dermatitis is long-lasting (chronic) and tends to flare periodically.',
    symptoms: ['Dry skin', 'Itching', 'Red patches', 'Small raised bumps', 'Thickened skin', 'Raw, sensitive skin'],
    affectedAreas: ['Hands', 'Feet', 'Ankles', 'Wrists', 'Neck', 'Upper chest', 'Eyelids', 'Inside elbows and knees'],
    severity: 'moderate',
    imageUrl: 'https://images.unsplash.com/photo-1612776572997-76cc42e058c3?w=400&h=300&fit=crop',
    category: 'Inflammatory',
    activeIngredients: ['ceramides', 'hyaluronic-acid', 'colloidal-oatmeal', 'shea-butter'],
    treatmentDuration: 'Ongoing management, flares improve in 1-2 weeks with treatment',
    commonAge: 'All ages, most common in children'
  },
  {
    id: 'psoriasis',
    name: 'Psoriasis',
    nameAr: 'الصدفية',
    description: 'A skin disease that causes red, itchy scaly patches, most commonly on the knees, elbows, trunk and scalp. It is a chronic disease that tends to go through cycles.',
    symptoms: ['Red patches with silvery scales', 'Dry, cracked skin', 'Itching', 'Burning sensation', 'Thickened nails', 'Swollen joints'],
    affectedAreas: ['Scalp', 'Elbows', 'Knees', 'Lower back', 'Nails'],
    severity: 'severe',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
    category: 'Autoimmune',
    activeIngredients: ['salicylic-acid', 'coal-tar', 'vitamin-d', 'retinoid'],
    treatmentDuration: 'Chronic condition requiring ongoing treatment, improvement in 2-4 weeks',
    commonAge: '15-35 years'
  },
  {
    id: 'rosacea',
    name: 'Rosacea',
    nameAr: 'الوردية',
    description: 'A common skin condition that causes blushing or flushing and visible blood vessels in your face. It may also produce small, red, pus-filled bumps.',
    symptoms: ['Facial redness', 'Visible blood vessels', 'Swollen bumps', 'Eye problems', 'Enlarged nose', 'Burning sensation'],
    affectedAreas: ['Cheeks', 'Nose', 'Forehead', 'Chin', 'Eyes'],
    severity: 'moderate',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=300&fit=crop',
    category: 'Vascular',
    activeIngredients: ['azelaic-acid', 'niacinamide', 'green-tea', 'centella-asiatica'],
    treatmentDuration: '4-8 weeks for visible improvement',
    commonAge: '30-50 years'
  },
  {
    id: 'hyperpigmentation',
    name: 'Hyperpigmentation',
    nameAr: 'فرط التصبغ',
    description: 'A common condition in which patches of skin become darker in color than the normal surrounding skin. This darkening occurs when an excess of melanin forms deposits in the skin.',
    symptoms: ['Dark patches on skin', 'Uneven skin tone', 'Age spots', 'Melasma', 'Post-inflammatory marks'],
    affectedAreas: ['Face', 'Hands', 'Arms', 'Shoulders', 'Décolletage'],
    severity: 'mild',
    imageUrl: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=400&h=300&fit=crop',
    category: 'Pigmentation',
    activeIngredients: ['vitamin-c', 'kojic-acid', 'alpha-arbutin', 'niacinamide', 'retinoid'],
    treatmentDuration: '8-12 weeks for visible improvement, 6+ months for significant fading',
    commonAge: 'All ages, more common 25+'
  },
  {
    id: 'dry-skin',
    name: 'Dry Skin (Xerosis)',
    nameAr: 'جفاف الجلد',
    description: 'A common condition that causes the skin to become rough, tight, flaky, and sometimes itchy. It can affect any part of the body but is most common on hands, arms, and legs.',
    symptoms: ['Rough texture', 'Tightness', 'Flaking', 'Fine lines', 'Itching', 'Redness'],
    affectedAreas: ['Hands', 'Arms', 'Legs', 'Face', 'Lips'],
    severity: 'mild',
    imageUrl: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop',
    category: 'Dehydration',
    activeIngredients: ['hyaluronic-acid', 'ceramides', 'glycerin', 'shea-butter', 'squalane'],
    treatmentDuration: '1-2 weeks for improvement with consistent moisturizing',
    commonAge: 'All ages'
  },
  {
    id: 'dark-circles',
    name: 'Dark Circles',
    nameAr: 'الهالات السوداء',
    description: 'Dark discoloration of the skin under the eye. It is mainly caused by fatigue, aging, eye strain, dehydration, sun overexposure, and genetics.',
    symptoms: ['Dark patches under eyes', 'Hollow appearance', 'Puffiness', 'Fine lines', 'Tired appearance'],
    affectedAreas: ['Under eyes', 'Eye area'],
    severity: 'mild',
    imageUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=400&h=300&fit=crop',
    category: 'Pigmentation',
    activeIngredients: ['vitamin-c', 'caffeine', 'retinoid', 'vitamin-k', 'peptides'],
    treatmentDuration: '4-8 weeks for visible improvement',
    commonAge: 'All ages, more visible 25+'
  },
  {
    id: 'fungal-infection',
    name: 'Fungal Skin Infection',
    nameAr: 'العدوى الفطرية',
    description: 'Infections caused by fungus that can affect the skin, nails, and hair. Common types include athlete\'s foot, ringworm, and yeast infections.',
    symptoms: ['Itching', 'Redness', 'Scaling', 'Ring-shaped rash', 'Cracked skin', 'Blisters'],
    affectedAreas: ['Feet', 'Groin', 'Scalp', 'Nails', 'Body folds'],
    severity: 'moderate',
    imageUrl: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=300&fit=crop',
    category: 'Infectious',
    activeIngredients: ['clotrimazole', 'ketoconazole', 'tea-tree-oil', 'zinc-pyrithione'],
    treatmentDuration: '2-4 weeks for most infections',
    commonAge: 'All ages'
  }
];

// Active Ingredients Database
export const activeIngredients: ActiveIngredient[] = [
  {
    id: 'salicylic-acid',
    name: 'Salicylic Acid',
    nameAr: 'حمض الساليسيليك',
    description: 'A beta hydroxy acid (BHA) that exfoliates the skin, unclogs pores, and reduces inflammation.',
    benefits: ['Unclogs pores', 'Reduces acne', 'Exfoliates skin', 'Reduces inflammation', 'Controls oil'],
    sideEffects: ['Dryness', 'Irritation', 'Peeling', 'Sun sensitivity'],
    concentration: '0.5-2%',
    skinTypes: ['Oily', 'Combination', 'Acne-prone'],
    avoidWith: ['Retinoids', 'Other exfoliating acids']
  },
  {
    id: 'benzoyl-peroxide',
    name: 'Benzoyl Peroxide',
    nameAr: 'بنزويل بيروكسيد',
    description: 'An antibacterial agent that kills acne-causing bacteria and helps clear blocked pores.',
    benefits: ['Kills bacteria', 'Reduces inflammation', 'Clears pores', 'Prevents new breakouts'],
    sideEffects: ['Dryness', 'Peeling', 'Redness', 'Bleaching of fabrics'],
    concentration: '2.5-10%',
    skinTypes: ['Oily', 'Acne-prone'],
    avoidWith: ['Vitamin C', 'Retinoids (use at different times)']
  },
  {
    id: 'retinoid',
    name: 'Retinoid (Vitamin A)',
    nameAr: 'الريتينويد (فيتامين أ)',
    description: 'Vitamin A derivatives that increase cell turnover, boost collagen, and treat various skin concerns.',
    benefits: ['Anti-aging', 'Reduces wrinkles', 'Treats acne', 'Improves texture', 'Fades dark spots'],
    sideEffects: ['Dryness', 'Irritation', 'Peeling', 'Sun sensitivity', 'Initial purging'],
    concentration: '0.025-1%',
    skinTypes: ['All types', 'Mature', 'Acne-prone'],
    avoidWith: ['AHAs', 'BHAs', 'Vitamin C', 'Benzoyl Peroxide']
  },
  {
    id: 'niacinamide',
    name: 'Niacinamide (Vitamin B3)',
    nameAr: 'النياسيناميد (فيتامين ب3)',
    description: 'A versatile ingredient that reduces inflammation, controls oil, and improves skin barrier function.',
    benefits: ['Reduces pore size', 'Controls oil', 'Brightens skin', 'Strengthens barrier', 'Anti-inflammatory'],
    sideEffects: ['Rare irritation at high concentrations'],
    concentration: '2-10%',
    skinTypes: ['All types'],
    avoidWith: ['Pure Vitamin C (can reduce efficacy)']
  },
  {
    id: 'vitamin-c',
    name: 'Vitamin C (L-Ascorbic Acid)',
    nameAr: 'فيتامين سي',
    description: 'A powerful antioxidant that brightens skin, reduces dark spots, and protects against sun damage.',
    benefits: ['Brightening', 'Antioxidant protection', 'Collagen boost', 'Fades dark spots', 'Evens skin tone'],
    sideEffects: ['Irritation', 'Oxidation (product turns brown)'],
    concentration: '10-20%',
    skinTypes: ['All types', 'Dull skin', 'Hyperpigmentation'],
    avoidWith: ['Niacinamide (controversial)', 'Retinoids', 'AHAs/BHAs']
  },
  {
    id: 'hyaluronic-acid',
    name: 'Hyaluronic Acid',
    nameAr: 'حمض الهيالورونيك',
    description: 'A powerful humectant that holds up to 1000x its weight in water, providing intense hydration.',
    benefits: ['Deep hydration', 'Plumps skin', 'Reduces fine lines', 'Improves texture', 'Suitable for all skin types'],
    sideEffects: ['Can cause dryness in very dry climates if not sealed with moisturizer'],
    concentration: '0.1-2%',
    skinTypes: ['All types', 'Dry', 'Dehydrated'],
    avoidWith: ['None - works well with most ingredients']
  },
  {
    id: 'ceramides',
    name: 'Ceramides',
    nameAr: 'السيراميدات',
    description: 'Lipids naturally found in skin that help form the skin barrier and retain moisture.',
    benefits: ['Restores skin barrier', 'Locks in moisture', 'Reduces sensitivity', 'Protects against irritants'],
    sideEffects: ['Rare - generally very well tolerated'],
    concentration: '0.5-5%',
    skinTypes: ['All types', 'Dry', 'Sensitive', 'Eczema-prone'],
    avoidWith: ['None - compatible with all ingredients']
  },
  {
    id: 'azelaic-acid',
    name: 'Azelaic Acid',
    nameAr: 'حمض الأزيليك',
    description: 'A dicarboxylic acid that treats acne, rosacea, and hyperpigmentation with anti-inflammatory properties.',
    benefits: ['Reduces redness', 'Treats acne', 'Fades dark spots', 'Gentle exfoliation', 'Safe for pregnancy'],
    sideEffects: ['Mild stinging', 'Itching initially'],
    concentration: '10-20%',
    skinTypes: ['All types', 'Sensitive', 'Rosacea-prone'],
    avoidWith: ['None - very compatible']
  },
  {
    id: 'glycerin',
    name: 'Glycerin',
    nameAr: 'الجلسرين',
    description: 'A humectant that draws moisture into the skin and helps maintain hydration levels.',
    benefits: ['Hydration', 'Softens skin', 'Strengthens barrier', 'Non-comedogenic'],
    sideEffects: ['Very rare - extremely well tolerated'],
    concentration: '1-10%',
    skinTypes: ['All types'],
    avoidWith: ['None']
  },
  {
    id: 'kojic-acid',
    name: 'Kojic Acid',
    nameAr: 'حمض الكوجيك',
    description: 'A natural skin lightening agent derived from fungi that inhibits melanin production.',
    benefits: ['Fades dark spots', 'Evens skin tone', 'Treats melasma', 'Antioxidant properties'],
    sideEffects: ['Contact dermatitis', 'Sun sensitivity', 'Irritation'],
    concentration: '1-4%',
    skinTypes: ['All types', 'Hyperpigmentation concerns'],
    avoidWith: ['Other strong actives initially']
  },
  {
    id: 'alpha-arbutin',
    name: 'Alpha Arbutin',
    nameAr: 'ألفا أربوتين',
    description: 'A gentle skin brightening agent that inhibits tyrosinase to reduce melanin production.',
    benefits: ['Fades dark spots', 'Safe for all skin types', 'Gentle brightening', 'Evens skin tone'],
    sideEffects: ['Very rare - well tolerated'],
    concentration: '1-2%',
    skinTypes: ['All types', 'Sensitive'],
    avoidWith: ['None - very compatible']
  },
  {
    id: 'caffeine',
    name: 'Caffeine',
    nameAr: 'الكافيين',
    description: 'A stimulant that constricts blood vessels and reduces puffiness, especially around the eyes.',
    benefits: ['Reduces puffiness', 'Minimizes dark circles', 'Antioxidant', 'Tightening effect'],
    sideEffects: ['Rare irritation'],
    concentration: '1-5%',
    skinTypes: ['All types'],
    avoidWith: ['None']
  },
  {
    id: 'colloidal-oatmeal',
    name: 'Colloidal Oatmeal',
    nameAr: 'دقيق الشوفان الغروي',
    description: 'Finely ground oatmeal that soothes, protects, and moisturizes sensitive or irritated skin.',
    benefits: ['Soothes irritation', 'Reduces itching', 'Moisturizes', 'Anti-inflammatory', 'Protects skin barrier'],
    sideEffects: ['Very rare allergic reactions'],
    concentration: '1-3%',
    skinTypes: ['Sensitive', 'Dry', 'Eczema-prone'],
    avoidWith: ['None']
  },
  {
    id: 'shea-butter',
    name: 'Shea Butter',
    nameAr: 'زبدة الشيا',
    description: 'A rich emollient extracted from shea nuts that deeply moisturizes and repairs dry skin.',
    benefits: ['Deep moisturizing', 'Repairs skin barrier', 'Anti-inflammatory', 'Rich in vitamins A & E'],
    sideEffects: ['May be comedogenic for some'],
    concentration: '5-20%',
    skinTypes: ['Dry', 'Normal', 'Mature'],
    avoidWith: ['None - avoid on very oily/acne-prone skin']
  },
  {
    id: 'tea-tree-oil',
    name: 'Tea Tree Oil',
    nameAr: 'زيت شجرة الشاي',
    description: 'A natural antimicrobial and anti-inflammatory essential oil used to treat acne and fungal infections.',
    benefits: ['Antibacterial', 'Antifungal', 'Reduces inflammation', 'Treats acne'],
    sideEffects: ['Irritation', 'Allergic reactions', 'Contact dermatitis'],
    concentration: '1-5%',
    skinTypes: ['Oily', 'Acne-prone'],
    avoidWith: ['Use with caution on sensitive skin']
  },
  {
    id: 'squalane',
    name: 'Squalane',
    nameAr: 'السكوالان',
    description: 'A lightweight, non-comedogenic oil that mimics the skin\'s natural sebum for balanced hydration.',
    benefits: ['Lightweight hydration', 'Non-comedogenic', 'Antioxidant', 'Softens skin'],
    sideEffects: ['Extremely rare'],
    concentration: '5-100%',
    skinTypes: ['All types', 'Including oily'],
    avoidWith: ['None']
  },
  {
    id: 'clotrimazole',
    name: 'Clotrimazole',
    nameAr: 'كلوتريمازول',
    description: 'An antifungal medication used to treat various fungal skin infections.',
    benefits: ['Treats fungal infections', 'Relieves itching', 'Kills fungus'],
    sideEffects: ['Burning', 'Stinging', 'Redness', 'Peeling'],
    concentration: '1%',
    skinTypes: ['As directed for fungal infections'],
    avoidWith: ['Check with doctor']
  },
  {
    id: 'ketoconazole',
    name: 'Ketoconazole',
    nameAr: 'كيتوكونازول',
    description: 'A broad-spectrum antifungal agent effective against various fungal and yeast infections.',
    benefits: ['Antifungal', 'Treats dandruff', 'Relieves seborrheic dermatitis'],
    sideEffects: ['Irritation', 'Dryness', 'Burning sensation'],
    concentration: '1-2%',
    skinTypes: ['For fungal/yeast conditions'],
    avoidWith: ['Check with doctor']
  }
];

// Products Database (Egyptian Market Focus)
export const products: Product[] = [
  {
    id: 'cerave-sa-cleanser',
    name: 'SA Smoothing Cleanser',
    brand: 'CeraVe',
    price: 450,
    currency: 'EGP',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop',
    activeIngredients: ['salicylic-acid', 'ceramides', 'niacinamide'],
    effectiveness: 5,
    origin: 'imported',
    country: 'USA',
    description: 'A gentle, foaming cleanser with salicylic acid that exfoliates and smooths rough, bumpy skin while ceramides help restore the skin barrier.',
    usage: 'Use morning and evening. Massage onto wet skin, then rinse.',
    sideEffects: ['Mild dryness initially', 'Slight tingling'],
    skinTypes: ['Oily', 'Combination', 'Acne-prone'],
    conditionIds: ['acne-vulgaris', 'dry-skin'],
    inStock: true,
    featured: true
  },
  {
    id: 'la-roche-posay-effaclar',
    name: 'Effaclar Duo+ Acne Treatment',
    brand: 'La Roche-Posay',
    price: 650,
    currency: 'EGP',
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop',
    activeIngredients: ['niacinamide', 'salicylic-acid'],
    effectiveness: 5,
    origin: 'imported',
    country: 'France',
    description: 'A multi-action treatment that targets acne, unclogs pores, and helps prevent marks.',
    usage: 'Apply once or twice daily to clean skin.',
    sideEffects: ['Initial dryness', 'Mild peeling'],
    skinTypes: ['Oily', 'Acne-prone'],
    conditionIds: ['acne-vulgaris'],
    inStock: true,
    featured: true
  },
  {
    id: 'egyptian-magic-cream',
    name: 'All Purpose Skin Cream',
    brand: 'Egyptian Magic',
    price: 380,
    currency: 'EGP',
    imageUrl: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&h=300&fit=crop',
    activeIngredients: ['shea-butter', 'glycerin'],
    effectiveness: 4,
    origin: 'egyptian',
    description: 'A legendary all-purpose skin cream made with olive oil, beeswax, and honey that deeply moisturizes and heals.',
    usage: 'Apply to dry areas as needed. Can be used on face and body.',
    sideEffects: ['May be heavy for oily skin'],
    skinTypes: ['Dry', 'Normal', 'Sensitive'],
    conditionIds: ['dry-skin', 'eczema'],
    inStock: true,
    featured: true
  },
  {
    id: 'nefertari-niacinamide',
    name: 'Niacinamide 10% Serum',
    brand: 'Nefertari',
    price: 185,
    currency: 'EGP',
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop',
    activeIngredients: ['niacinamide', 'hyaluronic-acid'],
    effectiveness: 4,
    origin: 'egyptian',
    description: 'Egyptian-made high-concentration niacinamide serum to minimize pores, control oil, and brighten skin.',
    usage: 'Apply 2-3 drops to clean skin morning and evening before moisturizer.',
    sideEffects: ['Rare irritation at first use'],
    skinTypes: ['All types'],
    conditionIds: ['acne-vulgaris', 'hyperpigmentation', 'rosacea'],
    inStock: true,
    featured: false
  },
  {
    id: 'the-ordinary-retinol',
    name: 'Retinol 0.5% in Squalane',
    brand: 'The Ordinary',
    price: 320,
    currency: 'EGP',
    imageUrl: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=300&h=300&fit=crop',
    activeIngredients: ['retinoid', 'squalane'],
    effectiveness: 5,
    origin: 'imported',
    country: 'Canada',
    description: 'A stable retinol solution in squalane for anti-aging benefits with reduced irritation.',
    usage: 'Apply a small amount in the evening. Start 2-3 times per week.',
    sideEffects: ['Dryness', 'Peeling', 'Sun sensitivity', 'Initial purging'],
    skinTypes: ['All types', 'Mature'],
    conditionIds: ['hyperpigmentation', 'acne-vulgaris'],
    inStock: true,
    featured: true
  },
  {
    id: 'avene-cicalfate',
    name: 'Cicalfate+ Restorative Cream',
    brand: 'Avène',
    price: 520,
    currency: 'EGP',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop',
    activeIngredients: ['ceramides', 'glycerin'],
    effectiveness: 5,
    origin: 'imported',
    country: 'France',
    description: 'A restorative cream that repairs and protects irritated, damaged skin.',
    usage: 'Apply to affected areas 1-2 times daily.',
    sideEffects: ['Very rare'],
    skinTypes: ['Sensitive', 'Damaged', 'All types'],
    conditionIds: ['eczema', 'dry-skin'],
    inStock: true,
    featured: false
  },
  {
    id: 'garnier-vitamin-c',
    name: 'Vitamin C Brightening Serum',
    brand: 'Garnier',
    price: 220,
    currency: 'EGP',
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop',
    activeIngredients: ['vitamin-c', 'niacinamide'],
    effectiveness: 3,
    origin: 'imported',
    country: 'France',
    description: 'An affordable vitamin C serum that brightens and evens skin tone.',
    usage: 'Apply in the morning before sunscreen.',
    sideEffects: ['Mild tingling', 'Not suitable for very sensitive skin'],
    skinTypes: ['All types', 'Dull skin'],
    conditionIds: ['hyperpigmentation', 'dark-circles'],
    inStock: true,
    featured: false
  },
  {
    id: 'neutrogena-hydro-boost',
    name: 'Hydro Boost Water Gel',
    brand: 'Neutrogena',
    price: 380,
    currency: 'EGP',
    imageUrl: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&h=300&fit=crop',
    activeIngredients: ['hyaluronic-acid', 'glycerin'],
    effectiveness: 4,
    origin: 'imported',
    country: 'USA',
    description: 'A lightweight gel moisturizer with hyaluronic acid for intense hydration without heaviness.',
    usage: 'Apply morning and evening as the last step of skincare.',
    sideEffects: ['Very rare'],
    skinTypes: ['All types', 'Oily', 'Combination'],
    conditionIds: ['dry-skin'],
    inStock: true,
    featured: true
  },
  {
    id: 'bioderma-sensibio',
    name: 'Sensibio H2O Micellar Water',
    brand: 'Bioderma',
    price: 420,
    currency: 'EGP',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop',
    activeIngredients: ['glycerin', 'ceramides'],
    effectiveness: 5,
    origin: 'imported',
    country: 'France',
    description: 'The original micellar water that gently cleanses and soothes sensitive skin.',
    usage: 'Apply with cotton pad to remove makeup and cleanse.',
    sideEffects: ['None reported'],
    skinTypes: ['Sensitive', 'All types'],
    conditionIds: ['rosacea', 'eczema', 'dry-skin'],
    inStock: true,
    featured: false
  },
  {
    id: 'clarina-antifungal',
    name: 'Clarina Antifungal Cream',
    brand: 'Eva Pharma',
    price: 45,
    currency: 'EGP',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop',
    activeIngredients: ['clotrimazole'],
    effectiveness: 4,
    origin: 'egyptian',
    description: 'Egyptian-made antifungal cream effective against various fungal skin infections.',
    usage: 'Apply to affected area twice daily for 2-4 weeks.',
    sideEffects: ['Mild burning', 'Redness'],
    skinTypes: ['For fungal infections'],
    conditionIds: ['fungal-infection'],
    inStock: true,
    featured: false
  },
  {
    id: 'the-ordinary-alpha-arbutin',
    name: 'Alpha Arbutin 2% + HA',
    brand: 'The Ordinary',
    price: 290,
    currency: 'EGP',
    imageUrl: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=300&h=300&fit=crop',
    activeIngredients: ['alpha-arbutin', 'hyaluronic-acid'],
    effectiveness: 4,
    origin: 'imported',
    country: 'Canada',
    description: 'A concentrated serum that targets dark spots and uneven skin tone.',
    usage: 'Apply a few drops to face morning and evening.',
    sideEffects: ['Very rare'],
    skinTypes: ['All types'],
    conditionIds: ['hyperpigmentation', 'dark-circles'],
    inStock: true,
    featured: false
  },
  {
    id: 'cerave-moisturizing-cream',
    name: 'Moisturizing Cream',
    brand: 'CeraVe',
    price: 490,
    currency: 'EGP',
    imageUrl: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&h=300&fit=crop',
    activeIngredients: ['ceramides', 'hyaluronic-acid', 'glycerin'],
    effectiveness: 5,
    origin: 'imported',
    country: 'USA',
    description: 'A rich, non-greasy moisturizer with essential ceramides for 24-hour hydration.',
    usage: 'Apply liberally as often as needed.',
    sideEffects: ['Very rare'],
    skinTypes: ['Dry', 'Normal', 'Sensitive'],
    conditionIds: ['dry-skin', 'eczema'],
    inStock: true,
    featured: true
  },
  {
    id: 'paula-azelaic-acid',
    name: 'Azelaic Acid Booster',
    brand: "Paula's Choice",
    price: 720,
    currency: 'EGP',
    imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop',
    activeIngredients: ['azelaic-acid', 'salicylic-acid'],
    effectiveness: 5,
    origin: 'imported',
    country: 'USA',
    description: 'A powerful treatment with 10% azelaic acid to fade dark spots and reduce redness.',
    usage: 'Apply 1-2 times daily after cleansing.',
    sideEffects: ['Initial tingling', 'Mild irritation'],
    skinTypes: ['All types', 'Sensitive'],
    conditionIds: ['rosacea', 'hyperpigmentation', 'acne-vulgaris'],
    inStock: true,
    featured: false
  },
  {
    id: 'caffeine-eye-serum',
    name: 'Caffeine Solution 5% + EGCG',
    brand: 'The Ordinary',
    price: 260,
    currency: 'EGP',
    imageUrl: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=300&h=300&fit=crop',
    activeIngredients: ['caffeine', 'green-tea'],
    effectiveness: 4,
    origin: 'imported',
    country: 'Canada',
    description: 'A lightweight serum that reduces the appearance of eye contour puffiness and dark circles.',
    usage: 'Apply a small amount around the eyes morning and evening.',
    sideEffects: ['Rare irritation'],
    skinTypes: ['All types'],
    conditionIds: ['dark-circles'],
    inStock: true,
    featured: false
  },
  {
    id: 'aveeno-eczema-therapy',
    name: 'Eczema Therapy Daily Moisturizing Cream',
    brand: 'Aveeno',
    price: 410,
    currency: 'EGP',
    imageUrl: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=300&h=300&fit=crop',
    activeIngredients: ['colloidal-oatmeal', 'ceramides'],
    effectiveness: 5,
    origin: 'imported',
    country: 'USA',
    description: 'Clinically proven to help relieve dry, itchy, irritated skin due to eczema.',
    usage: 'Apply liberally as needed, especially after bathing.',
    sideEffects: ['Very rare allergic reaction'],
    skinTypes: ['Dry', 'Eczema-prone', 'Sensitive'],
    conditionIds: ['eczema', 'dry-skin'],
    inStock: true,
    featured: false
  }
];

// Body areas for filtering
export const bodyAreas = [
  { id: 'face', name: 'Face', nameAr: 'الوجه' },
  { id: 'forehead', name: 'Forehead', nameAr: 'الجبهة' },
  { id: 'cheeks', name: 'Cheeks', nameAr: 'الخدين' },
  { id: 'nose', name: 'Nose', nameAr: 'الأنف' },
  { id: 'chin', name: 'Chin', nameAr: 'الذقن' },
  { id: 'eyes', name: 'Eye Area', nameAr: 'منطقة العين' },
  { id: 'neck', name: 'Neck', nameAr: 'الرقبة' },
  { id: 'chest', name: 'Chest', nameAr: 'الصدر' },
  { id: 'back', name: 'Back', nameAr: 'الظهر' },
  { id: 'shoulders', name: 'Shoulders', nameAr: 'الكتفين' },
  { id: 'arms', name: 'Arms', nameAr: 'الذراعين' },
  { id: 'hands', name: 'Hands', nameAr: 'اليدين' },
  { id: 'legs', name: 'Legs', nameAr: 'الساقين' },
  { id: 'feet', name: 'Feet', nameAr: 'القدمين' },
  { id: 'scalp', name: 'Scalp', nameAr: 'فروة الرأس' },
];

// Categories
export const categories = [
  { id: 'inflammatory', name: 'Inflammatory', nameAr: 'التهابي', icon: '🔥' },
  { id: 'autoimmune', name: 'Autoimmune', nameAr: 'مناعي ذاتي', icon: '🛡️' },
  { id: 'vascular', name: 'Vascular', nameAr: 'وعائي', icon: '💗' },
  { id: 'pigmentation', name: 'Pigmentation', nameAr: 'تصبغ', icon: '🎨' },
  { id: 'dehydration', name: 'Dehydration', nameAr: 'جفاف', icon: '💧' },
  { id: 'infectious', name: 'Infectious', nameAr: 'معدي', icon: '🦠' },
];

// Helper functions
export const getConditionById = (id: string): SkinCondition | undefined => {
  return skinConditions.find(c => c.id === id);
};

export const getIngredientById = (id: string): ActiveIngredient | undefined => {
  return activeIngredients.find(i => i.id === id);
};

export const getProductById = (id: string): Product | undefined => {
  return products.find(p => p.id === id);
};

export const getProductsForCondition = (conditionId: string): Product[] => {
  return products.filter(p => p.conditionIds.includes(conditionId));
};

export const getIngredientsForCondition = (conditionId: string): ActiveIngredient[] => {
  const condition = getConditionById(conditionId);
  if (!condition) return [];
  return condition.activeIngredients
    .map(id => getIngredientById(id))
    .filter((i): i is ActiveIngredient => i !== undefined);
};

// Mock user for demo
export const mockUser: User = {
  id: 'user-1',
  name: 'Sarah Ahmed',
  email: 'sarah.ahmed@email.com',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
  skinType: 'Combination',
  concerns: ['acne-vulgaris', 'hyperpigmentation'],
  routines: [
    {
      id: 'routine-1',
      date: '2024-01-15',
      conditionId: 'acne-vulgaris',
      products: ['cerave-sa-cleanser', 'nefertari-niacinamide', 'neutrogena-hydro-boost'],
      notes: 'Started new routine for acne treatment'
    },
    {
      id: 'routine-2',
      date: '2024-01-20',
      conditionId: 'hyperpigmentation',
      products: ['garnier-vitamin-c', 'the-ordinary-alpha-arbutin'],
      notes: 'Added brightening products to evening routine'
    }
  ]
};
