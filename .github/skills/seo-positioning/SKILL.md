# SEO & Posicionamiento — Skill de Optimización

## Descripción
Skill especializado en SEO técnico, on-page y posicionamiento orgánico para micra.com.co. Orientado a dominar las búsquedas de metrología, calibración y laboratorios acreditados en Colombia.

---

## Palabras Clave Objetivo (Target Keywords)

### Primarias (Head Keywords)
| Keyword | Volumen Est. | Intención |
|---------|-------------|-----------|
| metrología | Alto | Informacional/Comercial |
| calibración de equipos | Alto | Comercial |
| laboratorios acreditados | Alto | Comercial |
| gestión metrológica | Medio | Comercial |
| calibración acreditada Colombia | Medio | Transaccional |

### Secundarias (Body Keywords)
| Keyword | Intención |
|---------|-----------|
| software de metrología | Comercial |
| plataforma de calibración | Comercial |
| sistema de gestión metrológica | Comercial |
| aseguramiento metrológico | Informacional |
| trazabilidad metrológica | Informacional |
| auditoría metrológica | Comercial |
| metrología industrial Colombia | Comercial |
| laboratorios ONAC | Comercial |
| calibración instrumentos de medición | Comercial |
| servicio de calibración Colombia | Transaccional |

### Long Tail (Variaciones)
- calibración de equipos industriales en Colombia
- empresa de metrología en Colombia
- gestión de calibración para industria
- plataforma digital de metrología
- certificados de calibración en línea
- calibración acreditada ONAC Colombia
- ISO 10012 gestión de medidas Colombia
- outsourcing metrológico Colombia
- programa de aseguramiento metrológico
- control de equipos de medición

---

## Estrategia On-Page

### 1. Title Tags
- **Fórmula**: `Keyword Primaria — Marca | Keyword Secundaria`
- **Home**: `MICRA — Gestión Metrológica y Calibración Acreditada en Colombia`
- **Max 60 caracteres** para no ser truncado en SERP

### 2. Meta Description
- **Fórmula**: Acción + beneficio + keywords + CTA
- **Max 155 caracteres**
- Incluir: metrología, calibración, laboratorios acreditados, Colombia
- Usar verbos de acción: Gestione, Automatice, Optimice

### 3. Heading Hierarchy (H1-H6)
```
H1: Solo 1 por página — keyword principal
  H2: Secciones principales — keywords secundarias
    H3: Sub-items — variaciones long-tail
```

### 4. Keyword Density por Sección
- Hero (H1): metrología, gestión metrológica, calibración
- Products (H2): servicios de calibración, laboratorios acreditados, ONAC
- HowItWorks (H2): proceso de calibración, implementación metrológica
- ValueSection (H2): software de metrología, plataforma digital
- FAQ (H2): FAQSchema markup, preguntas con keywords naturales
- Footer: datos de contacto estructurados

### 5. Internal Linking
- Cada sección debe linkear a la sección relevante siguiente
- CTAs deben usar anchor text con keywords

---

## SEO Técnico

### Schema.org Structured Data (JSON-LD)
Implementar estos schemas:
1. **Organization** — datos de empresa, logo, contacto
2. **SoftwareApplication** — la plataforma MICRA
3. **FAQPage** — preguntas frecuentes (rich snippets en SERP)
4. **WebSite** — search action para sitelinks
5. **Service** — cada servicio ofrecido
6. **BreadcrumbList** — navegación estructurada

### Core Web Vitals
- **LCP < 2.5s**: Optimizar carga de WebGL, lazy load imágenes
- **CLS < 0.1**: Reservar espacio para elementos dinámicos
- **FID < 100ms**: Defer scripts no críticos

### Sitemap XML
- Incluir todas las rutas: /, /privacidad, /terminos
- Frecuencia: weekly para home, monthly para legales
- Prioridad: 1.0 home, 0.3 legales

### Robots.txt
- Allow todo excepto assets internos
- Referenciar sitemap

### Canonical URLs
- Cada página debe tener `<link rel="canonical">`
- Evitar contenido duplicado entre www y non-www

### Hreflang
- `es-CO` para Colombia como mercado principal
- Potencial `es` genérico para expansión LATAM

---

## Open Graph & Social

### Open Graph Tags
```html
og:type = website
og:title = Keyword + Marca
og:description = Resumen con keywords
og:image = 1200x630px con logo y tagline
og:locale = es_CO
og:site_name = MICRA
```

### Twitter Cards
```html
twitter:card = summary_large_image
twitter:site = @micra_co (si existe)
twitter:title = Keyword + Marca
twitter:description = Resumen con keywords
```

---

## Checklist de Implementación

- [x] Meta title optimizado con keywords
- [x] Meta description con CTA y keywords
- [x] Canonical URL en cada página
- [x] Open Graph completo
- [x] Twitter Card completo
- [x] H1 único con keyword principal
- [x] H2 por sección con keywords
- [x] H3 para sub-items
- [x] Schema Organization
- [x] Schema SoftwareApplication  
- [x] Schema FAQPage
- [x] Schema WebSite
- [x] Schema Service (múltiple)
- [x] Sitemap.xml completo
- [x] Robots.txt optimizado
- [x] Geo tags Colombia
- [x] Lang es-CO
- [x] Alt texts en imágenes/iconos
- [x] Aria labels en interactivos

---

## Monitoreo Post-Launch

### Herramientas
- Google Search Console (indexación, keywords, CTR)
- Google Analytics 4 (tráfico orgánico)
- Ahrefs / SEMrush (posicionamiento keywords)

### KPIs
- Posición top 3 para "metrología Colombia"
- Posición top 5 para "calibración de equipos Colombia"
- CTR > 5% en search console
- Rich snippets activos para FAQ
