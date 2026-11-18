# Graph Report - decorazonjoss  (2026-11-04)

## Corpus Check
- Corpus is ~5,139 words - fits in a single context window. You may not need a graph.

## Summary
- 485 nodes · 647 edges · 81 communities (43 shown, 38 thin omitted)
- Extraction: 84% EXTRACTED · 16% INFERRED · 0% AMBIGUOUS · INFERRED: 106 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Site Components & SEO
- Portfolio Theme Photos
- Project Docs & SEO Audit
- Dev Toolchain Deps
- UI Runtime Deps
- Button & Styling Utils
- package.json Core
- TypeScript Config
- Liam Venue Photo
- Astro Config & Robots
- Western Party (assets/17)
- Garden Backdrop (assets/13)
- Bee 1st Birthday (portfolio/10)
- Pet Shop Arch (assets)
- Aviation Party (LiamAir)
- Lilac Gold Set (portfolio/13)
- Western 70th (portfolio/17)
- Black Gold Birthday (portfolio)
- Christmas Backdrop (assets/12)
- Gold 50th Arch
- Red Gold 50th (assets/9)
- Baby Shower Decor
- Black Gold Birthday (assets)
- Liam Train Welcome (assets)
- Red Gold 50th (portfolio/9)
- Emma Sofi 3rd (assets)
- 89th Birthday (assets)
- Pet Shop Arch (portfolio)
- Liam Venue (portfolio)
- pnpm Scripts
- Gender Reveal (assets)
- Minnie Mouse Party
- Welcome Baby (assets/8)
- Gender Reveal (portfolio)
- Liam Train (portfolio)
- pnpm Workspace
- Neon Birthday Arch
- Welcome Baby (portfolio/8)
- 89th Birthday (portfolio)
- PostCSS Config
- Favicon Brand Mark
- Social Card Image
- Bee Birthday (assets/10)
- Karely KY Brand Event
- Emma Sofi 3rd (portfolio)
- Dep: cmdk
- Dep: date-fns
- Dep: embla-carousel-react
- Dep: gsap
- Dep: @hookform/resolvers
- Dep: @lucide/astro
- Dep: next
- Dep: next-themes
- Dep: @radix-ui/react-accordion
- Dep: @radix-ui/react-alert-dialog
- Dep: @radix-ui/react-aspect-ratio
- Dep: @radix-ui/react-collapsible
- Dep: @radix-ui/react-context-menu
- Dep: @radix-ui/react-dialog
- Dep: @radix-ui/react-dropdown-menu
- Dep: @radix-ui/react-hover-card
- Dep: @radix-ui/react-label
- Dep: @radix-ui/react-navigation-menu
- Dep: @radix-ui/react-popover
- Dep: @radix-ui/react-progress
- Dep: @radix-ui/react-scroll-area
- Dep: @radix-ui/react-separator
- Dep: @radix-ui/react-slider
- Dep: @radix-ui/react-switch
- Dep: @radix-ui/react-toast
- Dep: @radix-ui/react-toggle
- Dep: @radix-ui/react-toggle-group
- Dep: @radix-ui/react-tooltip
- Dep: react-day-picker
- Dep: react-dom
- Dep: react-hook-form
- Dep: recharts
- Dep: sonner
- Dep: tailwindcss-animate
- Dep: vaul
- Dep: @vercel/analytics

## God Nodes (most connected - your core abstractions)
1. `SEO Audit: Decorazon Joss (2026-10-23, score 58/100)` - 11 edges
2. `@phosphor-icons/react` - 10 edges
3. `17.webp Western-themed party photo` - 10 edges
4. `Liam event venue photo` - 10 edges
5. `13.webp decorative backdrop setup` - 8 edges
6. `Minnie Mouse Emma birthday backdrop photo` - 8 edges
7. `Portada (cover photo)` - 8 edges
8. `Portfolio photo 10: bee-themed first birthday balloon setup` - 8 edges
9. `compilerOptions` - 7 edges
10. `Portfolio photo 17 - western themed 70th birthday decor` - 7 edges

## Surprising Connections (you probably didn't know these)
- `Portada (cover photo)` --references--> `Transparent gender reveal letter boxes (B and F) filled with balloons`  [INFERRED]
  src/assets/portada.jpeg → src/assets/portada.webp
- `Portada (cover photo)` --references--> `Two smiling women posing on swings in front of the decor`  [INFERRED]
  src/assets/portada.jpeg → src/assets/portada.webp
- `Transparent gender reveal letter boxes (B and F) filled with balloons` --conceptually_related_to--> `Gender reveal party theme (blue and pink palette)`  [INFERRED]
  src/assets/portada.webp → src/assets/portada.jpeg
- `Button()` --calls--> `cn()`  [EXTRACTED]
  src/components/ui/button.tsx → src/lib/utils.ts
- `SEO Audit: Decorazon Joss (2026-10-23, score 58/100)` --references--> `Decorazon Joss (event decoration business website)`  [EXTRACTED]
  SEO-Audit.md → README.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Portfolio page SEO fixes** — seo_audit_unique_page_metadata, seo_audit_portfolio_js_robustness, seo_audit_image_alt_and_loading, seo_audit_lowercase_canonical_route [INFERRED 0.85]
- **Business identity / local entity signals** — seo_audit_real_social_profiles, seo_audit_first_hand_business_info, seo_audit_localbusiness_structured_data, seo_audit_alajuela_location [INFERRED 0.85]
- **Christmas backdrop set piece** — src_assets_12_balloon_garland_arch, src_assets_12_gingerbread_foil_balloon, src_assets_12_candy_cane_foil_balloon, src_assets_12_gold_curtain_backdrop [INFERRED 0.75]
- **Themed photo set elements** — src_assets_13_sun_backdrop, src_assets_13_lilac_drapes, src_assets_13_scroll_bench, src_assets_13_floral_pedestals [INFERRED 0.75]
- **Ocean party decor setup** — src_assets_14_balloon_arch, src_assets_14_ocean_theme, src_assets_14_backdrop_panels [INFERRED 0.75]
- **Minnie Mouse themed Emma backdrop setup** — src_assets_15_balloon_arch, src_assets_15_emma_letters, src_assets_15_minnie_cutouts, src_assets_15_pink_drapery, src_assets_15_mickey_gloves, src_assets_15_pedestals [INFERRED 0.85]
- **Western theme props forming one backdrop setup** — src_assets_17_horseshoe_backdrop, src_assets_17_wagon_wheel, src_assets_17_hay_bales [INFERRED 0.75]
- **50th Birthday Photo Backdrop Setup** — src_assets_50gold_balloon_arch, src_assets_50gold_foil_50_numerals, src_assets_50gold_sunflower_tropical_decor, src_assets_50gold_fairy_light_backdrop [EXTRACTED 1.00]
- **50th birthday balloon arch setup** — src_assets_9_balloon_arch, src_assets_9_gold_foil_50, src_assets_9_happy_birthday_sign, src_assets_9_color_palette [EXTRACTED 1.00]
- **Birthday party decoration setup in photo** — src_assets_birthday1_balloon_garland, src_assets_birthday1_happy_birthday_sign, src_assets_birthday1_black_round_backdrop, src_assets_birthday1_gold_pedestal [INFERRED 0.75]
- **Gender reveal photo setup** — src_assets_genderreavel_balloon_arch, src_assets_genderreavel_its_a_backdrop, src_assets_genderreavel_teddy_bear_prop [INFERRED 0.75]
- **Liam birthday venue decoration set** — src_assets_liam_ceiling_fabric_drapes, src_assets_liam_hot_air_balloon_decor, src_assets_liam_hanging_airplane_decor, src_assets_liam_balloon_garland_backdrop, src_assets_liam_name_banner [INFERRED 0.75]
- **Aviation-themed decoration set** — src_assets_liamair_biplane_prop, src_assets_liamair_balloon_cluster, src_assets_liamair_fabric_draping, src_assets_liamair_hot_air_balloon_decor, src_assets_liamair_cloud_decor [INFERRED 0.75]
- **Liam welcome party decor set** — src_assets_liamt_balloon_garland, src_assets_liamt_cardboard_train, src_assets_liamt_backdrop_theme, src_assets_liamt_bienvenido_banner, src_assets_liamt_teddy_bear_props [EXTRACTED 1.00]
- **Baby Shower Entrance Decor Setup** — src_assets_babyshowerariadna_balloon_arch, src_assets_babyshowerariadna_welcome_sign, src_assets_babyshowerariadna_bunny_standees, src_assets_babyshowerariadna_ultrasound_frame [INFERRED 0.85]
- **Event photo setup (balloon arch, gold backdrop, swings, props)** — src_assets_portada_balloon_arch, src_assets_portada_gold_backdrop, src_assets_portada_swing_seats, src_assets_portada_letter_boxes, src_assets_portada_teddy_bear [EXTRACTED 1.00]
- **Coordinated event decoration setup shown in the cover photo** — src_assets_portada_balloon_arch, src_assets_portada_gold_backdrop, src_assets_portada_gender_reveal_boxes, src_assets_portada_teddy_bear [INFERRED 0.75]
- **Bee-themed first birthday setup** — src_assets_portfolio_10_balloon_arch, src_assets_portfolio_10_bee_theme, src_assets_portfolio_10_honeycomb_backdrop, src_assets_portfolio_10_number_one_sign, src_assets_portfolio_10_lucia_name_sign, src_assets_portfolio_10_purple_pedestal [INFERRED 0.85]
- **Event decoration setup in portfolio photo 11** — src_assets_portfolio_11_balloon_arch, src_assets_portfolio_11_dessert_table, src_assets_portfolio_11_sheer_drape [EXTRACTED 1.00]
- **Photo set piece: backdrop, arch, bench and pillars form one themed installation** — src_assets_portfolio_13_sun_backdrop, src_assets_portfolio_13_flower_garland_arch, src_assets_portfolio_13_wrought_iron_bench, src_assets_portfolio_13_wisteria_pillars [INFERRED 0.75]
- **Minnie Mouse themed party backdrop set** — src_assets_portfolio_15_balloon_arch, src_assets_portfolio_15_minnie_mouse_decor, src_assets_portfolio_15_name_letters_emma, src_assets_portfolio_15_pink_backdrop_drape [INFERRED 0.85]
- **Western ranch theme elements** — src_assets_portfolio_17_horseshoe_horse_backdrop, src_assets_portfolio_17_hay_bales_wagon_wheel, src_assets_portfolio_17_moya_marquee_sign [INFERRED 0.75]
- **Baby-shower style event backdrop setup** — src_assets_portfolio_8_balloon_arch, src_assets_portfolio_8_welcome_baby_banners, src_assets_portfolio_8_cake_display, src_assets_portfolio_8_pink_backdrop [INFERRED 0.75]
- **50th birthday photo-backdrop setup** — src_assets_portfolio_9_balloon_arch, src_assets_portfolio_9_foil_50, src_assets_portfolio_9_neon_sign, src_assets_portfolio_9_backdrop [EXTRACTED 1.00]
- **Birthday backdrop setup: balloon garland, backdrop and gold pedestal** — birthday_balloon_garland, happy_birthday_backdrop, gold_foil_pedestal [INFERRED 0.75]
- **Gender reveal decoration set** — src_assets_portfolio_genderreavel_balloon_garland, src_assets_portfolio_genderreavel_backdrop_sign, src_assets_portfolio_genderreavel_teddy_bear_prop [INFERRED 0.75]
- **Pet-themed decor elements in the welcome arch** — src_assets_portfolio_krissia_paw_print_balloons, src_assets_portfolio_krissia_bone_foil_balloons, src_assets_portfolio_krissia_husky_foil_balloon [INFERRED 0.75]
- **Event decoration elements shown in the Liam portfolio photo** — src_assets_portfolio_liam_draped_ceiling_fabric, src_assets_portfolio_liam_hot_air_balloon_decor, src_assets_portfolio_liam_balloon_arch, src_assets_portfolio_liam_table_setup [EXTRACTED 1.00]
- **Balloon arch backdrop composition** — src_assets_portfolio_bakery_balloon_garland, src_assets_portfolio_bakery_gold_backdrop, src_assets_portfolio_bakery_brand_sign, src_assets_portfolio_bakery_confetti_balloons [INFERRED 0.75]
- **Stitch-themed 3rd birthday decor set** — src_assets_portfolio_bdayemmasofi_balloon_arch, src_assets_portfolio_bdayemmasofi_name_backdrop, src_assets_portfolio_bdayemmasofi_number_3_balloon, src_assets_portfolio_bdayemmasofi_stitch_angel_cutouts [INFERRED 0.75]
- **Birthday 89 backdrop composition** — src_assets_portfolio_birthday89_rose_gold_89_balloons, src_assets_portfolio_birthday89_pastel_balloon_arch, src_assets_portfolio_birthday89_feliz_cumpleanos_script_balloon, src_assets_portfolio_birthday89_butterfly_foil_balloon [INFERRED 0.75]

## Communities (81 total, 38 thin omitted)

### Community 0 - "Site Components & SEO"
Cohesion: 0.06
Nodes (34): @phosphor-icons/react@^2.1.10, @phosphor-icons/react, 11.webp (purple and gold balloon arch dessert table), Purple and gold 15 anos party theme, Ocean-themed balloon arch photo (14.webp), Curved navy and light-blue fabric backdrop panels, Balloon arch (blue, navy, sage green, cream latex balloons), Tall metal stands with glass tops and foil floor mat (+26 more)

### Community 1 - "Portfolio Theme Photos"
Cohesion: 0.06
Nodes (40): Christmas-themed balloon decoration, Portfolio photo 11 - purple balloon arch and dessert table, Purple, lilac and gold balloon arch with organic garland, Dessert table with tiered cake, cake pops and sweets, Lilac sheer fabric drape on metal arch backdrop, Christmas balloon arch portfolio photo (12.webp), Red, green and gold balloon arch with candy cane foil balloon, Gingerbread man foil balloon character (+32 more)

### Community 2 - "Project Docs & SEO Audit"
Cohesion: 0.09
Nodes (15): Astro (site framework), Decoration gallery / portfolio feature, Decorazon Joss (event decoration business website), pnpm scripts (dev, build, preview), Roadmap (hero, gallery, services, about done; contact pending), TypeScript, Alajuela (business location), SEO Audit: Decorazon Joss (2026-10-23, score 58/100) (+7 more)

### Community 3 - "Dev Toolchain Deps"
Cohesion: 0.10
Nodes (20): @types/react@^19.2.7, @types/react-dom@^19.2.3, typescript@^5.9.3, devDependencies, postcss@^8.5, tailwindcss@^4.1.9, @tailwindcss/postcss@^4.1.9, tw-animate-css@1.3.3 (+12 more)

### Community 4 - "UI Runtime Deps"
Cohesion: 0.13
Nodes (15): dependencies, @astrojs/check@^0.9.9, lucide-react@^0.454.0, @radix-ui/react-avatar@1.1.2, @radix-ui/react-radio-group@1.2.2, react-resizable-panels@^2.1.7, sharp-cli@^5.2.0, zod@3.25.76 (+7 more)

### Community 5 - "Button & Styling Utils"
Cohesion: 0.16
Nodes (13): class-variance-authority@^0.7.1, clsx@^2.1.1, @radix-ui/react-slot@1.1.1, react@19.2.0, tailwind-merge@^3.4.0, class-variance-authority, clsx, @radix-ui/react-slot (+5 more)

### Community 6 - "package.json Core"
Cohesion: 0.14
Nodes (13): input-otp@1.4.1, @radix-ui/react-checkbox@1.1.3, @radix-ui/react-menubar@1.1.4, @radix-ui/react-select@2.1.4, @radix-ui/react-tabs@1.1.2, name, type, version (+5 more)

### Community 7 - "TypeScript Config"
Cohesion: 0.17
Nodes (11): astro/tsconfigs/strict, compilerOptions, allowSyntheticDefaultImports, baseUrl, esModuleInterop, jsx, jsxImportSource, paths (+3 more)

### Community 8 - "Liam Venue Photo"
Cohesion: 0.25
Nodes (11): Liam event venue photo, Airplane and hot-air balloon boy birthday theme, Arched white colonnade venue space with open garden view, Balloon garland backdrop with gold, blue and cream balloons, Draped white, blue and gold ceiling fabric, White cloud-shaped balloon clusters, Grey folding chairs seating, Hanging propeller airplane decoration (+3 more)

### Community 9 - "Astro Config & Robots"
Cohesion: 0.20
Nodes (7): astro@^7.1.3, @astrojs/react@^6.0.1, @astrojs/sitemap@^3.7.4, astro, @astrojs/react, @astrojs/sitemap, prerender

### Community 10 - "Western Party (assets/17)"
Cohesion: 0.27
Nodes (10): 17.webp Western-themed party photo, Clear acrylic pedestal with gold balloons, Balloon garland arch (burgundy, cream, gold chrome, black, orange), Gold foil number balloons showing age 71, Hay bales as staging and seating props, Gold glitter horseshoe and rearing horses backdrop cutouts, Light-up MOYA marquee letters (personalized name sign), Red rose petals scattered on floor (+2 more)

### Community 11 - "Garden Backdrop (assets/13)"
Cohesion: 0.29
Nodes (8): 13.webp decorative backdrop setup, Themed event photo backdrop concept, Green and rose floral garland arch, White wisteria floral pedestal arrangements, Green artificial turf mat, Lilac and white sheer drapes, Ornate gold scrolled metal bench, Gold sun cutout backdrop

### Community 12 - "Bee 1st Birthday (portfolio/10)"
Cohesion: 0.32
Nodes (8): Portfolio photo 10: bee-themed first birthday balloon setup, Pastel balloon arch (yellow, cream, pink, lilac) with daisy accents, Bee theme (cartoon bee characters and honeycomb motifs), Decorazon Joss event decoration service (balloons and party setups), Dusty-pink arched backdrop with yellow honeycomb cutouts, Pink personalized 1 Lucia name sign (child name customization), Large purple hexagonal number 1 sign (first birthday), Purple cylindrical pedestal

### Community 13 - "Pet Shop Arch (assets)"
Cohesion: 0.33
Nodes (6): Balloon arch installation at pet shop entrance, BIENVENIDOS pennant banner, White bone-shaped foil balloons, Husky foil character balloon, Paw-print latex balloons, Pets Lovers Grooming and Petshop storefront

### Community 14 - "Aviation Party (LiamAir)"
Cohesion: 0.29
Nodes (7): LiamAir.webp (aviation-themed party decor photo), Aviation party theme (Liam birthday), White balloon clusters hanging from ceiling, Blue biplane prop with LIAM name and star decals, White balloon cloud wall decorations, Draped white, blue and gold fabric ceiling canopy, Blue striped hot air balloon decorations

### Community 15 - "Lilac Gold Set (portfolio/13)"
Cohesion: 0.33
Nodes (7): Portfolio photo 13: lilac and gold themed event set, White and green flower garland over drapes, Green turf mat under the set, Gold sun cutout backdrop on lilac drape, Fairytale tower theme (sun motif, lilac drapes), White wisteria floral pillars with lanterns, Gold wrought-iron scroll bench

### Community 16 - "Western 70th (portfolio/17)"
Cohesion: 0.38
Nodes (7): Portfolio photo 17 - western themed 70th birthday decor, Balloon garland arch (terracotta, black, white, gold, orange), Gold foil number 70 balloon, Hay bales and wagon wheel props, Gold horseshoe and rearing horse cutouts on wooden backdrop, Lit marquee letters spelling MOYA, Red rose petals scattered on floor

### Community 17 - "Black Gold Birthday (portfolio)"
Cohesion: 0.47
Nodes (5): Black, gold and marble balloon garland, Decorazon Joss event decoration portfolio, Gold foil cylindrical pedestal, Round black backdrop with gold Happy Birthday script, Birthday1 portfolio image

### Community 18 - "Christmas Backdrop (assets/12)"
Cohesion: 0.47
Nodes (4): Christmas balloon backdrop photo (12.webp), Candy cane foil balloon, Gingerbread man foil balloon with Santa hat, Gold sequin curtain backdrop

### Community 19 - "Gold 50th Arch"
Cohesion: 0.40
Nodes (6): Gold and White Balloon Arch, Decorazon Joss Event Decoration Portfolio, Fairy Light Curtain Backdrop, Gold Foil 50 Numeral Balloons, 50th Birthday Balloon Arch Photo, Sunflower and Monstera Leaf Decor

### Community 20 - "Red Gold 50th (assets/9)"
Cohesion: 0.47
Nodes (5): Balloon arch 50th birthday photo (9.webp), Organic balloon arch, Event balloon decoration service, Gold foil number 50 balloons, Happy Birthday neon sign backdrop

### Community 21 - "Baby Shower Decor"
Cohesion: 0.40
Nodes (6): Baby Shower Decor Photo, Pink and Gold Balloon Arch, Bunny Standee Decorations, Pink and Gold Color Palette, Ultrasound Photo Frame Display, Baby Shower Welcome Sign

### Community 22 - "Black Gold Birthday (assets)"
Cohesion: 0.40
Nodes (6): Birthday1 balloon arch photo, Black, white and gold balloon garland arch, Black and gold party color theme, Round black fabric backdrop, Gold foil-wrapped cylindrical pedestal, Lit gold 'Happy Birthday' sign on black backdrop

### Community 23 - "Liam Train Welcome (assets)"
Cohesion: 0.47
Nodes (6): LiamT.webp (Liam welcome party decoration photo), Airplane and sky themed backdrop (blue arch, hot-air balloon, clouds, planes), Balloon garland arch (sage, cream, gold, light blue latex balloons), BIENVENIDO LIAM letter banner, Handmade cardboard blue train with LIAM name wagon, Teddy bear and plush props with bear foil balloon

### Community 24 - "Red Gold 50th (portfolio/9)"
Cohesion: 0.47
Nodes (6): Portfolio photo 9: 50th birthday balloon arch, White drape photo backdrop, Red, gold and white balloon arch, 50th birthday party decoration theme, Gold foil number 50 balloons, Happy Birthday neon sign

### Community 25 - "Emma Sofi 3rd (assets)"
Cohesion: 0.47
Nodes (5): Emma Sofi 3rd Birthday Balloon Backdrop Photo, Organic Pastel Balloon Garland Arch, Personalized Name Backdrop Emma Sofi, Hot Pink Foil Number 3 Balloon, Stitch and Angel Character Standee Cutouts

### Community 26 - "89th Birthday (assets)"
Cohesion: 0.40
Nodes (6): Birthday 89 Balloon Backdrop Photo, Silver Butterfly Foil Balloon, Rose Gold Feliz Cumpleanos Script Balloon Sign, Pastel Balloon Arch with Daisy Accents, Pedestal Cake Display with Pastel Topper, Rose Gold Number 89 Foil Balloons

### Community 27 - "Pet Shop Arch (portfolio)"
Cohesion: 0.33
Nodes (6): Krissia balloon welcome arch photo, BIENVENIDOS banner, White bone-shaped foil balloons, Husky dog foil balloon, Paw-print latex balloons, Pet-themed balloon decor

### Community 28 - "Liam Venue (portfolio)"
Cohesion: 0.47
Nodes (5): Liam portfolio photo (hot-air-balloon event venue), Balloon garland and arch backdrop (white, blue, gold), Draped white, blue and gold fabric ceiling, Striped hot-air balloon table and ceiling decorations, Round tables with white cloths, gold and blue runners, folding chairs

### Community 29 - "pnpm Scripts"
Cohesion: 0.40
Nodes (5): scripts, astro, build, dev, preview

### Community 30 - "Gender Reveal (assets)"
Cohesion: 0.50
Nodes (3): Pastel balloon arch (pink, mint green, cream), Its a... gender reveal backdrop panel, Brown teddy bear prop on balloon cluster

### Community 31 - "Minnie Mouse Party"
Cohesion: 0.60
Nodes (5): Portfolio photo 15 - Emma pink Minnie Mouse party setup, Pink, red and gold balloon arch backdrop, Baby Minnie Mouse cutouts and pink dais, Pink oversized 'Emma' name letters on floor, Pink fabric drape backdrop with white glove decals

### Community 32 - "Welcome Baby (assets/8)"
Cohesion: 0.60
Nodes (4): Portfolio photo 8 (balloon welcome-baby setup), Orange, blue and cream balloon garland arch, Cake on wooden pedestal table, Burlap WELCOME and BABY banners

### Community 33 - "Gender Reveal (portfolio)"
Cohesion: 0.70
Nodes (5): GenderReavel portfolio image, White fabric backdrop with It's a... gold lettering, Pastel balloon garland arch (pink, mint, cream), Gender reveal party decoration theme, Brown teddy bear prop at balloon base

### Community 34 - "Liam Train (portfolio)"
Cohesion: 0.50
Nodes (5): LiamT portfolio photo (train-themed baby boy balloon decor), Balloon garland (mint, blue, cream, gold latex balloons), BIENVENIDO LIAM letter banner, Teddy bear and foil balloon character decorations, Blue cardboard train with LIAM lettering

### Community 35 - "pnpm Workspace"
Cohesion: 0.50
Nodes (3): allowBuilds, esbuild, sharp

### Community 36 - "Neon Birthday Arch"
Cohesion: 0.83
Nodes (4): Balloon arch birthday backdrop photo (16.webp), Balloon garland arch, Happy Birthday neon sign on lilac backdrop, Hot pink, orange, gold and cream balloon palette

### Community 37 - "Welcome Baby (portfolio/8)"
Cohesion: 0.50
Nodes (4): Balloon Arch Welcome Baby Shower Setup, Orange Blue and Cream Balloon Arch, Cake on Wooden Side Table, Burlap WELCOME and BABY Banners

### Community 38 - "89th Birthday (portfolio)"
Cohesion: 0.67
Nodes (4): 89th Birthday Balloon Arch Photo, Felix Cumpleanos Foil Banner, Pastel Balloon Arch Decoration, Rose-Gold Foil Number 89 Balloons

### Community 40 - "Favicon Brand Mark"
Cohesion: 0.67
Nodes (3): Decorazon Joss favicon, Brand color #D7897F, Heart-shaped brand mark path

### Community 41 - "Social Card Image"
Cohesion: 1.00
Nodes (3): Social card image (public/social-card.jpg), Balloon garland and gold curtain backdrop, Pink and blue gender reveal party theme

### Community 43 - "Karely KY Brand Event"
Cohesion: 0.67
Nodes (3): Balloon arch on gold circular backdrop (KARELY KY event photo), Black and gold balloon color palette with gold confetti balloons, KARELY KY brand sign (bisuteria hecha a mano, phone 6141-4847)

### Community 44 - "Emma Sofi 3rd (portfolio)"
Cohesion: 0.67
Nodes (3): Emma Sofi 3rd birthday balloon backdrop photo, Pink, blue and lilac balloon arch backdrop, Stitch and Angel character standee cutouts

## Knowledge Gaps
- **93 isolated node(s):** `astro/tsconfigs/strict`, `TypeScript`, `pnpm scripts (dev, build, preview)`, `Checks not completed (live crawl, CWV, GSC, backlinks, GBP)`, `Suggested SEO order of work` (+88 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 137 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **38 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `react` connect `Button & Styling Utils` to `Portfolio Theme Photos`, `package.json Core`?**
  _High betweenness centrality (0.240) - this node is a cross-community bridge._
- **What connects `astro/tsconfigs/strict`, `TypeScript`, `pnpm scripts (dev, build, preview)` to the rest of the system?**
  _93 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Site Components & SEO` be split into smaller, more focused modules?**
  _Cohesion score 0.061224489795918366 - nodes in this community are weakly interconnected._
- **Why does `@phosphor-icons/react` connect `Site Components & SEO` to `Project Docs & SEO Audit`, `package.json Core`?**
  _High betweenness centrality (0.195) - this node is a cross-community bridge._
- **Should `Portfolio Theme Photos` be split into smaller, more focused modules?**
  _Cohesion score 0.05507246376811594 - nodes in this community are weakly interconnected._
- **Why does `dependencies` connect `UI Runtime Deps` to `Site Components & SEO`, `Dev Toolchain Deps`, `Button & Styling Utils`, `package.json Core`, `Astro Config & Robots`, `PostCSS Config`, `Dep: cmdk`, `Dep: date-fns`, `Dep: embla-carousel-react`, `Dep: gsap`, `Dep: @hookform/resolvers`, `Dep: @lucide/astro`, `Dep: next`, `Dep: next-themes`, `Dep: @radix-ui/react-accordion`, `Dep: @radix-ui/react-alert-dialog`, `Dep: @radix-ui/react-aspect-ratio`, `Dep: @radix-ui/react-collapsible`, `Dep: @radix-ui/react-context-menu`, `Dep: @radix-ui/react-dialog`, `Dep: @radix-ui/react-dropdown-menu`, `Dep: @radix-ui/react-hover-card`, `Dep: @radix-ui/react-label`, `Dep: @radix-ui/react-navigation-menu`, `Dep: @radix-ui/react-popover`, `Dep: @radix-ui/react-progress`, `Dep: @radix-ui/react-scroll-area`, `Dep: @radix-ui/react-separator`, `Dep: @radix-ui/react-slider`, `Dep: @radix-ui/react-switch`, `Dep: @radix-ui/react-toast`, `Dep: @radix-ui/react-toggle`, `Dep: @radix-ui/react-toggle-group`, `Dep: @radix-ui/react-tooltip`, `Dep: react-day-picker`, `Dep: react-dom`, `Dep: react-hook-form`, `Dep: recharts`, `Dep: sonner`, `Dep: tailwindcss-animate`, `Dep: vaul`, `Dep: @vercel/analytics`?**
  _High betweenness centrality (0.122) - this node is a cross-community bridge._
- **Should `Project Docs & SEO Audit` be split into smaller, more focused modules?**
  _Cohesion score 0.0896551724137931 - nodes in this community are weakly interconnected._