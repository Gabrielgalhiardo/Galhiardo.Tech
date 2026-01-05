import { Helmet } from 'react-helmet-async';

/**
 * Componente SEO reutilizável para gerenciar meta tags e Open Graph
 * 
 * @param {string} title - Título da página (aparece na aba do navegador e nos resultados do Google)
 * @param {string} description - Descrição da página (aparece nos resultados de busca e cards de compartilhamento)
 * @param {string} image - URL da imagem para Open Graph (recomendado: 1200x630px)
 * @param {string} url - URL canônica da página (opcional, padrão: window.location.href)
 * @param {string} type - Tipo de conteúdo Open Graph (opcional, padrão: 'website')
 * @param {string} siteName - Nome do site (opcional, padrão: 'Galhiardo.tech')
 */
const SEO = ({
  title,
  description,
  image,
  url,
  type = 'website',
  siteName = 'Galhiardo.tech'
}) => {
  // URL base do site 
  const siteUrl = 'https://galhiardoTech.com.br';
  
  // URL completa da página
  const pageUrl = url || (typeof window !== 'undefined' ? window.location.href : siteUrl);
  
  // URL completa da imagem (se for relativa, adiciona o siteUrl)
  const imageUrl = image 
    ? (image.startsWith('http') ? image : `${siteUrl}${image}`)
    : `${siteUrl}/src/assets/img/logo.svg`; 

  // Título completo para SEO
  const fullTitle = title 
    ? `${title} | ${siteName}`
    : `${siteName} - Consultoria em Tecnologia`;

  return (
    <Helmet>
      {/* Meta Tags Básicas */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={pageUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:title" content={title || fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={title || fullTitle} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="pt_BR" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={pageUrl} />
      <meta name="twitter:title" content={title || fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:image:alt" content={title || fullTitle} />
      
      {/* WhatsApp (usa Open Graph, mas adicionamos tags específicas) */}
      <meta property="og:image:type" content="image/jpeg" />
      
      {/* Meta Tags Adicionais para SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteName} />
      <meta name="language" content="Portuguese" />
      <meta name="revisit-after" content="7 days" />
      
      {/* Schema.org para Rich Snippets */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: siteName,
          description: description,
          url: siteUrl,
          logo: `${siteUrl}/logo.png`,
          image: imageUrl,
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'BR'
          },
          contactPoint: {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            availableLanguage: 'Portuguese'
          },
          sameAs: [
            'https://www.linkedin.com/company/gabrielGalhiardoFarina',
            'https://www.instagram.com/biel_farina'
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;

