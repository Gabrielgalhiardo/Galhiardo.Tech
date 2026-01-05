# Galhiardo.tech - Site de Consultoria em Tecnologia

Site profissional de consultoria em tecnologia desenvolvido com React, Vite e as melhores práticas de UX/UI Design.

### 1. Azul Royal (Cor Primária)
**Código Hex:** `#2563EB`

**Onde usar:**
- Botões de ação ("Orçamento Grátis", "Ver Projetos")
- Links
- Ícones de destaque
- O "Tech" na logo

**Por que:** O azul é a cor universal da confiança no mundo corporativo (pense em LinkedIn, Facebook, Dell). Esse tom específico é vibrante o suficiente para parecer moderno e digital.

---

### 2. Navy Executive (Cor de Base/Texto Escuro)
**Código Hex:** `#0F172A`

**Onde usar:**
- Cabeçalho (Navbar)
- Rodapé
- Títulos principais (H1, H2)
- Fundo de seções escuras

**Por que:** Substitui o preto puro (#000000). O preto puro cansa a vista e parece "amador" em web design. Esse azul marinho muito profundo passa sofisticação e seriedade.

---

### 3. Branco & Gelo (Fundos)

**Branco Puro:** `#FFFFFF`
- Para o fundo principal do site

**Gelo Suave:** `#F8FAFC`
- Para diferenciar seções (ex: fundo da área de "Serviços")

**Por que:** O espaço em branco ("respiro") é o que faz um site parecer caro. Sites poluídos parecem baratos. Use muito branco para destacar o seu conteúdo.

---

### 4. Cinza Leitura (Texto Corrido)
**Código Hex:** `#334155`

**Onde usar:**
- Parágrafos
- Descrições de serviços
- Textos longos

**Por que:** Um cinza chumbo é mais confortável para ler em telas de celular do que o preto absoluto.

---

### 5. Amber Gold (Detalhe/Acento)
**Código Hex:** `#F59E0B`

**Onde usar:**
- Detalhes mínimos
- Estrelas de avaliação de clientes
- Ícones de "Check"
- Borda fina em um cartão de destaque

**Por que:** Traz um toque de calor para a paleta fria (azuis e cinzas) e remete a "ouro/sucesso".

## 🚀 Tecnologias

- **React 19** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e dev server
- **CSS Variables** - Sistema de design com variáveis CSS
- **Componentização** - Arquitetura modular e reutilizável

---

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Button/          # Botão componentizado
│   ├── Card/            # Card componentizado
│   ├── Navbar/          # Navegação principal
│   ├── Hero/            # Seção hero
│   ├── Servicos/        # Seção de serviços
│   ├── Sobre/           # Seção sobre
│   ├── Depoimentos/     # Seção de depoimentos
│   ├── Contato/         # Seção de contato
│   ├── Footer/          # Rodapé
│   └── Section/         # Wrapper de seção
├── assets/              # Imagens e recursos
│   └── img/             # Logos e imagens
├── App.jsx              # Componente principal
├── App.css              # Estilos globais do App
├── index.css            # Estilos base e variáveis CSS
└── main.jsx             # Entry point
```

---

## 🎯 Componentização

Todos os componentes seguem o padrão de componentização:

- **Componente JSX** - Lógica e estrutura
- **CSS Module** - Estilos específicos do componente
- **Props** - Interface clara e tipada (via props)
- **Reutilização** - Componentes modulares e independentes

### Exemplo de Componente

```jsx
// Button.jsx
const Button = ({ variant = 'primary', size = 'md', children, ...props }) => {
  return (
    <button className={`btn btn--${variant} btn--${size}`} {...props}>
      {children}
    </button>
  );
};
```

---

## 🎨 Sistema de Design

### Variáveis CSS

Todas as cores e espaçamentos são definidos como variáveis CSS em `src/index.css`:

```css
:root {
  --color-primary: #2563EB;
  --color-base-dark: #0F172A;
  --color-white: #FFFFFF;
  --color-ice: #F8FAFC;
  --color-text-gray: #334155;
  --color-accent: #F59E0B;
  /* ... mais variáveis */
}
```

### Responsividade

O site é totalmente responsivo usando:
- **Mobile First** - Design pensado primeiro para mobile
- **Media Queries** - Breakpoints em 768px e 1024px
- **Clamp()** - Tipografia fluida e responsiva

---

## ✨ Recursos de UX/UI

- ✅ **Navegação suave** - Scroll suave entre seções
- ✅ **Animações sutis** - Transições e hover effects
- ✅ **Formulário de contato** - Validação e feedback visual
- ✅ **Design responsivo** - Funciona em todos os dispositivos
- ✅ **Acessibilidade** - ARIA labels e navegação por teclado
- ✅ **Performance** - Código otimizado e carregamento rápido

---

## 📝 Licença

Este projeto é propriedade da Galhiardo.tech.

---

## 📧 Contato

Para mais informações, entre em contato:
- **Email:** contato@galhiardo.tech
- **Telefone:** +55 (11) 95086-9006
