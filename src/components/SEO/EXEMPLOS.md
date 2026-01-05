# Exemplos Práticos de Uso do Componente SEO

## 🏠 Página Home (Já implementado)

```jsx
// src/App.jsx
import SEO from './components/SEO/SEO';

function App() {
  return (
    <div className="app">
      <SEO
        title="Criação de Sites e Consultoria Web"
        description="Transforme seu negócio com soluções digitais de alta performance. Consultoria em tecnologia, desenvolvimento web, arquitetura de software e transformação digital. Resultados mensuráveis e ROI comprovado. Solicite seu orçamento grátis!"
        image="/og-image.jpg"
      />
      {/* Resto do conteúdo */}
    </div>
  );
}
```

## 📄 Exemplo: Página de Serviços (Se usar React Router)

```jsx
// src/pages/Servicos.jsx
import SEO from '../components/SEO/SEO';

function ServicosPage() {
  return (
    <>
      <SEO
        title="Nossos Serviços - Consultoria em TI"
        description="Consultoria em TI, desenvolvimento web, arquitetura de software, transformação digital, análise de dados e segurança da informação. Soluções personalizadas para impulsionar seu negócio."
        image="/og-servicos.jpg"
        url="https://galhiardo.tech/servicos"
      />
      {/* Conteúdo da página */}
    </>
  );
}
```

## 📞 Exemplo: Página de Contato

```jsx
<SEO
  title="Entre em Contato - Orçamento Grátis"
  description="Solicite seu orçamento grátis para consultoria em tecnologia. Transforme seu negócio com soluções digitais de alta performance. Fale conosco hoje mesmo!"
  image="/og-contato.jpg"
  url="https://galhiardo.tech/contato"
/>
```

## 📝 Exemplo: Artigo de Blog

```jsx
<SEO
  title="Como Escolher a Melhor Tecnologia para seu Negócio"
  description="Guia completo sobre como escolher as melhores tecnologias para impulsionar seu negócio. Dicas práticas de especialistas em consultoria tecnológica."
  image="/blog/como-escolher-tecnologia.jpg"
  type="article"
  url="https://galhiardo.tech/blog/como-escolher-tecnologia"
/>
```

## 🎯 Dicas para Descrições Persuasivas

### ✅ Boas Descrições (Focadas em Vendas)

- **Incluem benefícios:** "Transforme seu negócio", "Aumente suas vendas"
- **Têm números:** "50+ projetos entregues", "30+ clientes satisfeitos"
- **Incluem CTA:** "Solicite seu orçamento grátis", "Fale conosco hoje"
- **São específicas:** Mencionam serviços concretos
- **Têm palavras-chave:** "consultoria", "desenvolvimento web", "tecnologia"

### ❌ Descrições Ruins

- Muito genéricas: "Somos uma empresa de tecnologia"
- Sem benefícios: "Fazemos sites"
- Sem CTA: Não convidam à ação
- Muito longas: Acima de 160 caracteres

## 🖼️ Criando a Imagem Open Graph

### Ferramentas Recomendadas:

1. **Canva** (gratuito): https://www.canva.com
   - Template: "Facebook Post" (1200x630px)
   - Adicione logo, título e cores da marca

2. **Figma** (gratuito): https://www.figma.com
   - Crie um frame de 1200x630px
   - Exporte como JPG

3. **Photoshop** (pago)
   - Crie documento 1200x630px
   - Exporte otimizado para web

### Elementos da Imagem OG:

- ✅ Logo da empresa
- ✅ Título principal (grande e legível)
- ✅ Subtítulo ou descrição curta
- ✅ Cores da marca (Azul Royal #2563EB, Navy #0F172A)
- ✅ Elementos visuais (ícones, formas geométricas)

### Onde Colocar:

Coloque a imagem na pasta `public/` do projeto:
```
public/
  └── og-image.jpg
```

Então use no componente:
```jsx
<SEO image="/og-image.jpg" />
```

## 🧪 Testando

### 1. Teste Local (Desenvolvimento)

```bash
npm run build
npm run preview
```

Depois acesse: `http://localhost:4173`

### 2. Teste de Compartilhamento

**WhatsApp:**
- Compartilhe o link em um chat
- Verifique se aparece imagem, título e descrição

**Facebook:**
- Use: https://developers.facebook.com/tools/debug/
- Cole a URL e clique em "Debug"

**LinkedIn:**
- Use: https://www.linkedin.com/post-inspector/
- Cole a URL e clique em "Inspect"

### 3. Verificar Meta Tags

Abra o DevTools (F12) e vá em:
- **Elements** → `<head>` → Procure por `<meta property="og:...">`

Ou use:
```javascript
// No console do navegador
document.querySelector('meta[property="og:title"]')?.content
document.querySelector('meta[property="og:description"]')?.content
document.querySelector('meta[property="og:image"]')?.content
```

