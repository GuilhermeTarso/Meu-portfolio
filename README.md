# Portfólio Pessoal | Guilherme de Tarso - Versão Candidata 1.1

Este repositório armazena a versão estática e principal do meu portfólio profissional. Estruturado como um hub central, ele documenta e concentra as frentes da minha transição de carreira para as áreas de Suporte a Sistemas, Customer Operations e processos operacionais de plataformas SaaS B2B.

*Nota: O endereço público atual exibe a versão 1.0. A publicação da versão 1.1 substituirá o layout existente após as validações finais.*

## 💻 Demonstração

Acesse o projeto online publicado via GitHub Pages: `https://guilhermetarso.github.io/Meu-portfolio/`

## 📋 Arquitetura do Hub (Versão 1.1)

O site estrutura logicamente meus passos profissionais e acadêmicos nas seguintes categorias:

* **Sobre:** Direcionamento claro do meu perfil e objetivos com base na experiência ativa em resolução de problemas, suporte corporativo e sistemas.
* **Portfólios Profissionais:** Exibição da estrutura planejada para cases práticos (Zendesk, HubSpot, KPIs, Kanban e IA), simulando cenários operacionais da EdificaSaaS.
* **Projetos Acadêmicos:** Relatórios e exercícios realizados na graduação em Análise e Desenvolvimento de Sistemas.
* **Treinamentos:** Trilha visual do mapeamento exclusivo de certificações, estudos de web e APIs.
* **Contato:** Links diretos e integrados de e-mail e acesso às redes (LinkedIn, GitHub e WhatsApp).

## 📁 Arquivos incluídos

* `index.html`: Semântica HTML5. Menu responsivo utilizando *Navbar Toggler* e *ScrollSpy* nativo do Bootstrap (5.3.8). 
* `estilo.css`: Documento voltado ao mapeamento e ajuste de foco de teclado, suporte restrito a *prefers-reduced-motion* e classes auxiliares de hover.
* `script.js`: Arquivo restrito à manipulação DOM estrita. Opera a lógica da *Lista Interativa* (inserir/remover via clique e botão *Enter*) e atribui dinamicamente os atributos de acessibilidade no ScrollSpy.
* `Gemini_Generated_Image_m24j24m24j24m24j.jfif.jfif`: Fotografia base de perfil.
* `README.md`: Este documento central.

## ✨ Recursos de Acessibilidade

- Botões visuais (ícones isolados) possuem propriedades textuais `aria-label`.
- Percurso limpo por `TAB`, onde os *cards de navegação* transferem logicamente seu foco para elementos unificados (a tag âncora delimitadora).
- Suporte a preferência do sistema operacional por redução de movimento, anulando transições e transformações de escala preventivamente.
- Região sensível (`aria-live`) anexada à lista interativa técnica, projetada para anunciar adições e remoções de nós (nodes) a leitores de tela de maneira limpa.
- Hierarquia estrita de *headings* (H1-H6).

## 🚀 Como visualizar e testar localmente

Clone o repositório e abra o índice diretamente em seu navegador web (Google Chrome, Firefox, Edge). 

```bash
git clone [https://github.com/GuilhermeTarso/Meu-portfolio.git](https://github.com/GuilhermeTarso/Meu-portfolio.git)
cd Meu-portfolio
