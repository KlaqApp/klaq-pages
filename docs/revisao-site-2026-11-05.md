# Revisão do site Klaq: 05/11/2026

Revisão do `klaq-pages` feita contra o estado real do sistema:

- **App** (`KlaqApp/temperatura-maxima`): v1.6.14+28, distribuído só no TestFlight e no track
  interno do Play. Nada está na loja pública.
- **Backend** (`KlaqApp/claquete`): `https://api.klaq.app`, rodando num Mac mini atrás do Cloudflare
  Tunnel, com Postgres e backups cifrados enviados para fora da máquina.
- **Login**: Supabase Auth (e-mail e senha). Avisos push pelo Firebase Cloud Messaging.

Legenda: 🔴 crítico (risco legal ou bloqueia as lojas) · 🟠 informação errada ou desatualizada ·
🟡 melhoria · ⚪ técnico/baixo.

---

## 1. Legal e privacidade

### 🔴 1.1 A Política de Privacidade não descreve o que o app faz

O texto saiu de um gerador (App Privacy Policy Generator) e não corresponde ao app.

| A política diz | O que acontece de verdade |
|---|---|
| Coleta IP, páginas visitadas, tempo de uso e sistema operacional | O app não tem analytics. O servidor registra as requisições nos logs. |
| Pode pedir "e-mail, nome, idade" | Pede e-mail e senha (Supabase) e, no onboarding, nome, @username, bio, cor do avatar e conta privada. **Não pede idade.** |
| Único terceiro: Firebase Crashlytics | **Crashlytics não está no app** (o `pubspec.yaml` só tem `firebase_core` e `firebase_messaging`). |
| "Só dados agregados e anônimos vão para terceiros" | Dados pessoais vão para Supabase (login), Firebase/Google (token de push), Cloudflare (túnel da API e possivelmente o armazenamento dos backups). |
| Nada sobre conteúdo público | Perfil, histórico, listas, estante, reviews e respostas aparecem para outras pessoas, conforme a privacidade da conta. |

**Dados que a política precisa listar:**
- Conta: e-mail, senha (fica no Supabase), id
- Perfil: nome, @username, bio, cor do avatar, conta privada ou pública
- Histórico: filmes, séries e episódios assistidos, datas, notas, reassistidas
- Listas ("Quero assistir") e estante de livros (status, páginas, datas, notas)
- Social: quem você segue, seguidores, pedidos para seguir, bloqueios
- Reviews e respostas públicas, denúncias feitas, registro de publicações (usado no limite de
  envios), banimento, aceite das regras da comunidade
- Token de push por aparelho
- Logs do servidor

**Terceiros reais:**
- Supabase (login)
- Google Firebase Cloud Messaging (push)
- Cloudflare (túnel da API; R2 se for o destino dos backups)
- TMDB, Google Books, Open Library e BrasilAPI. As buscas passam pelo servidor do Klaq, mas as
  imagens são carregadas direto do CDN de cada um (`/images` redireciona para `image.tmdb.org`), então
  esses serviços veem o IP do aparelho.

### 🔴 1.2 LGPD ausente

O controlador está no Brasil e o app só existe em pt-BR. Mesmo assim, a política cita CCPA, GDPR e
SCCs e não menciona a LGPD. Falta:
- bases legais (art. 7º)
- direitos do titular (art. 18)
- contato do encarregado
- direito de reclamar à ANPD
- transferência internacional (art. 33), já que Supabase, Firebase e Cloudflare ficam fora do Brasil

### 🔴 1.3 Retenção diferente da real

| A política diz | Na prática |
|---|---|
| Duração do uso + 12 meses | Os dados ficam até a conta ser excluída |
| Dados automáticos: 24 meses | Itens apagados viram tombstone e somem do banco em 7 dias |
| (nada sobre backups) | Backups cifrados guardam cópias por até cerca de 6 meses (7 diários, 4 semanais, 6 mensais) |

### 🔴 1.4 Exclusão de conta

- **Site:** `/delete-account/` só redireciona para um Google Form. A página está só em inglês e não diz
  o que é apagado, o que fica nem em quanto tempo. O Google Play exige essas informações na página
  cadastrada.
- **App e backend (fora do site, mas bloqueia a App Store):** não existe exclusão dentro do app nem
  endpoint no claquete. A Apple exige exclusão de conta dentro do app para apps com cadastro
  (guideline 5.1.1(v)). O banco já tem `ON DELETE CASCADE`, então falta um `DELETE /me` que apague o
  usuário no claquete e no Supabase Auth, mais o botão em Configurações → Conta.

### 🔴 1.5 Termos com afirmações falsas ou que não se aplicam

- DSA: "um representante legal na UE foi designado" e "publica relatórios periódicos de transparência".
  Pelo que se vê no código, nenhum dos dois existe. Remover ou reescrever.
- "Silenciar notificações" de usuários: não existe. Denunciar e bloquear existem. Desbloquear existe só
  no backend; o app ainda não chama.
- Crashlytics aparece como serviço de terceiros e não é usado.
- A moderação real não aparece:
  - 3 denúncias de pessoas diferentes escondem o conteúdo
  - filtro automático de palavras
  - limite de 5 publicações por minuto e 100 por dia
  - banimento
  - regras da comunidade aceitas no app (o texto está em `review_flows.dart`)
- Idade: termos e política dizem 16+, mas o app não pergunta idade. Decida entre manter só a
  declaração (alinhada à classificação nas lojas) ou criar uma verificação de idade.
- Foro: "jurisdição onde o Prestador está estabelecido" não diz qual é. Dizer Brasil e considerar o CDC.
- "Em caso de divergência, prevalece a versão em inglês": para quem usa no Brasil, o ideal é o
  português ser a versão de referência.
- Remover o rodapé "gerada pelo App Privacy Policy Generator".
- A data de vigência (19/09/2026) é anterior a social, reviews, moderação, livros, push e backend
  próprio. Atualizar quando os textos forem reescritos.

### 🔴 1.6 Print com dado pessoal

`public/screens/profile.jpg` mostra o seu e-mail pessoal e o @username. Trocar por uma conta de teste.

---

## 2. Conteúdo da home

### 🟠 2.1 Roadmap anuncia como "em breve" coisas que já existem

| Item no site | Estado real | Ação |
|---|---|---|
| Livros e jogos também | **Livros prontos**: estante, diário de leitura, busca por título e ISBN, nota, review. Jogos: tela "Jogos estão chegando". | Livros vão para Recursos. No roadmap fica só "Jogos". |
| Do seu jeito (perfil e tema) | **Pronto**: perfil com bio, cor do avatar e conta privada; tema Automático, Claro ou Escuro; 4 cores de destaque + "Sua cor"; 3 ícones do app (Fórmula, Clássico, Editorial). | Tirar do roadmap e enriquecer o card "Do seu jeito". |
| Notificações inteligentes | **Em parte**: já há push de novo seguidor, pedido para seguir, pedido aceito, resposta à sua review e avisos do Klaq. Lembrete de episódio novo ainda não existe. | Reescrever como "Lembretes de novos episódios e lançamentos" e citar os avisos sociais em Recursos. |
| Listas personalizadas / compartilhadas | Correto: só existe "Quero assistir" (`watchlist`). | Manter. |

### 🟠 2.2 Recursos que existem e não aparecem no site

- Reviews públicas, respostas e feed de atividade de quem você segue
- Denunciar e bloquear (convém citar por segurança e para as lojas)
- Buscar pessoas e ver perfil, histórico e estante dos outros, respeitando conta privada
- Estante de livros e diário de leitura
- Compartilhar a nota como imagem (com trecho da review)
- Escolher o ícone do app e uma cor livre

### 🟠 2.3 Cor de destaque desatualizada

- O site usa "Mint/Menta" (`#6fe3d4`) como padrão. O app trocou por **Ciano** (`#64D2FF` no escuro,
  `#32ADE6` no claro) e acrescentou "Sua cor" (ver `_legacyHighlightStyles` em `feature_flags.dart`).
- `src/dsm/tokens.json` está defasado em relação ao Dart, ao contrário do que diz o README. Copiar o
  `tokens.json` atual do design system, regenerar o `tokens.css`, renomear `mint` para `cyan` no
  `AccentPicker` e nos dicionários ("Ciano"/"Cyan") e migrar o valor `mint` salvo no `localStorage`.

### 🟠 2.4 Prints do tour são de 28/09

Foram tirados antes de livros, reviews, seletor de modo (filmes, livros, jogos) e da cor ciano, e
mostram o destaque verde antigo. Refazer os 6 prints e considerar novas telas: livros, reviews e perfil
público. Ver também o item 1.6.

### 🟠 2.5 Mensagens de disponibilidade contraditórias

- "Disponível para iOS e Android" aparece junto dos selos "Em breve", e o app só está em teste. Trocar
  por "Em breve para iOS e Android".
- **O botão "Pedir acesso ao beta" aponta para `#`.** É a principal ação do site hoje. Usar o link
  público do TestFlight e, no Android, um formulário (o track interno precisa da lista de e-mails) ou
  migrar para um teste fechado ou aberto.
- Instagram, X e TikTok apontam para `#` e abrem uma aba nova da mesma página. Esconder até as contas
  existirem.

### 🟡 2.6 Textos gerais

- Meta description, OG, hero e chips citam só filmes e séries. Incluir livros (o chip "Livros" falta).
- Tagline "Seu diário audiovisual": decidir se continua com livros e jogos no app. O "Sobre" do app usa
  "Seu diário audiovisual pessoal... filmes e séries", então alinhar os dois.
- O card "Dê sua nota" fala em "estrelas e comentários". Hoje são estrelas de 0,5 a 5 e reviews
  públicas.

---

## 3. Técnico e consistência do site

- ⚪ O README diz que `/delete-account/` é um redirect estático em `public/`. Na verdade é uma página
  Next (`src/app/(en)/delete-account/page.tsx`).
- 🟡 `/delete-account/` não tem versão pt-BR e o rodapé em português aponta para a página em inglês.
  Junto com o item 1.4, transformar numa página de verdade nas duas línguas.
- 🟡 Falta uma página de suporte ou FAQ. A App Store pede uma Support URL; hoje só existe o e-mail.
  Sugestão: `/support/` com contato, perguntas frequentes e exclusão de conta.
- 🟡 Falta uma página de regras da comunidade, citada pelos termos e pelo app.
- ⚪ A data de vigência está em dois lugares (`legal.effective` nos dicionários e no fim de cada `.md`).
  Centralizar.
- ⚪ O idioma padrão do site é inglês, com redirecionamento automático. O app só existe em pt-BR. As URLs
  em inglês precisam continuar (estão cadastradas nas lojas), mas vale rever qual idioma é a
  referência (ver 1.5).
- ⚪ O sitemap não tem `lastModified`. O ano do copyright é fixado no build.
- ✅ `npm run build` passa (13 páginas estáticas, TypeScript ok).

---

## 4. Outros repositórios (vistos de passagem)

- **claquete:** `GET /greet` está aberto e devolve o registro inteiro de um usuário de UUID fixo
  (e-mail, papel e a coluna `password`). Remover a rota.
- **temperatura-maxima:** o README ainda diz que "as listas e os avisos push ainda usam o Supabase".
  O `AGENTS.md` e os ADRs 0016/0018 dizem que já migraram para o claquete.

---

## 5. Ordem sugerida

1. **Legal (bloqueia as lojas):** reescrever política e termos em pt-BR com LGPD (1.1–1.5), página de
   exclusão de conta de verdade (1.4) e trocar o print com e-mail (1.6). Em paralelo, exclusão de conta
   no app e no backend.
2. **Conversão:** link real do beta e remover links `#` (2.5).
3. **Conteúdo:** roadmap e Recursos (2.1, 2.2), textos (2.6).
4. **Visual:** tokens e cor ciano (2.3) e prints novos (2.4).
5. **Páginas novas:** suporte/FAQ e regras da comunidade (3).
