# Componente SEO - Guia de Uso

Componente reutilizável para gerenciar meta tags, Open Graph e SEO dinâmico usando `react-helmet-async`.

## 📋 Props

| Prop | Tipo | Obrigatório | Padrão | Descrição |
|------|------|-------------|--------|-----------|
| `title` | string | ✅ | - | Título da página (aparece na aba do navegador) |
| `description` | string | ✅ | - | Descrição da página (aparece nos resultados de busca) |
| `image` | string | ❌ | `/og-image.jpg` | URL da imagem para Open Graph (recomendado: 1200x630px) |
| `url` | string | ❌ | `window.location.href` | URL canônica da página |
| `type` | string | ❌ | `'website'` | Tipo de conteúdo Open Graph |
| `siteName` | string | ❌ | `'Galhiardo.tech'` | Nome do site |

## 🚀 Exemplos de Uso

### Exemplo 1: Página Home (Página Principal)

```jsx
import SEO from './components/SEO/SEO';

function Home() {
  return (
    <>
      <SEO
        title="Criação de Sites e Consultoria Web"
        description="Transforme seu negócio com soluções digitais de alta performance. Consultoria em tecnologia, desenvolvimento web, arquitetura de software e transformação digital. Resultados mensuráveis e ROI comprovado. Solicite seu orçamento grátis!"
        image="/og-image.jpg"
      />
      {/* Resto do conteúdo */}
    </>
  );
}
```

### Exemplo 2: Página de Serviços

```jsx
<SEO
  title="Nossos Serviços - Consultoria em TI"
  description="Oferecemos consultoria em TI, desenvolvimento web, arquitetura de software, transformação digital, análise de dados e segurança da informação. Soluções personalizadas para seu negócio."
  image="/og-servicos.jpg"
/>
```

### Exemplo 3: Página de Contato

```jsx
<SEO
  title="Entre em Contato - Orçamento Grátis"
  description="Solicite seu orçamento grátis para consultoria em tecnologia. Transforme seu negócio com soluções digitais de alta performance. Fale conosco hoje mesmo!"
  image="/og-contato.jpg"
/>
```

### Exemplo 4: Blog Post (Artigo)

```jsx
<SEO
  title="Como Escolher a Melhor Tecnologia para seu Negócio"
  description="Guia completo sobre como escolher as melhores tecnologias para impulsionar seu negócio. Dicas práticas de especialistas em consultoria tecnológica."
  image="/blog/como-escolher-tecnologia.jpg"
  type="article"
/>
```

## 🎨 Dicas para Imagens Open Graph

- **Tamanho recomendado:** 1200x630 pixels
- **Formato:** JPG ou PNG
- **Tamanho do arquivo:** Máximo 1MB (ideal: 200-500KB)
- **Conteúdo:** Inclua texto legível, logo da empresa e cores da marca
- **Localização:** Coloque na pasta `public/` do projeto

## 📱 Testando Compartilhamento

### WhatsApp
1. Use o [WhatsApp Link Preview](https://developers.facebook.com/tools/debug/) ou compartilhe o link em um chat
2. Verifique se a imagem, título e descrição aparecem corretamente

### Facebook
1. Use o [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Cole a URL e clique em "Debug"
3. Verifique o preview do card

### Google
1. Use o [Google Rich Results Test](https://search.google.com/test/rich-results)
2. Verifique se as meta tags estão corretas

## 🔍 Boas Práticas

1. **Títulos:** Máximo 60 caracteres (ideal: 50-55)
2. **Descrições:** Máximo 160 caracteres (ideal: 150-155)
3. **Imagens:** Sempre use URLs absolutas (com https://)
4. **URLs:** Use URLs canônicas para evitar conteúdo duplicado
5. **Unique Content:** Cada página deve ter título e descrição únicos

## 📝 Schema.org

O componente já inclui Schema.org (JSON-LD) para Rich Snippets no Google. Isso ajuda a:
- Aparecer nos resultados de busca com informações extras
- Melhorar o CTR (Click-Through Rate)
- Ganhar mais visibilidade no Google

