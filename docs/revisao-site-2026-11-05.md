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

## 5. Status das correções (mesma data)

### Corrigido no site

- **Legal:** Política de Privacidade, Termos e a página de exclusão de conta reescritos em pt-BR e
  inglês, com base no que o app e o claquete fazem (dados, visibilidade, terceiros, retenção real,
  moderação, regras da comunidade, LGPD, foro no Brasil). Saíram o Crashlytics, a "idade", o
  representante na UE, os relatórios de transparência e o rodapé do gerador. Vigência:
  5/11/2026, num lugar só (`legal.effective`).
- **`/delete-account/`:** virou uma página de verdade (EN e `/pt-br/delete-account/`) com o botão do
  formulário, o pedido por e-mail, o que é apagado e o que fica. Entrou no sitemap e o rodapé aponta
  para a versão do idioma.
- **Print do perfil:** o e-mail pessoal foi apagado da imagem.
- **Roadmap:** livros e personalização saíram (já existem). Ficaram jogos, diário de leitura, listas
  personalizadas, listas compartilhadas e lembretes de episódios.
- **Recursos:** card de livros no lugar do social; textos de nota (meia estrela, review, compartilhar
  como imagem), estatísticas e "Do seu jeito" (tema automático/claro/escuro, sua cor, ícones).
- **Comunidade (seção nova, `#community`, no menu e no rodapé):** reviews e respostas, feed de
  atividade, conta privada com pedido para seguir, avisos push, denunciar/bloquear e regras.
- **Hero, meta e chips:** incluem livros e amigos.
- **Cor:** `tokens.json` passou de mint para o ciano do app (destaque, texto, `on-accent`, brilho do
  fundo); o seletor mostra "Ciano" e quem tinha `mint` salvo cai no padrão.
- **Disponibilidade:** "Em breve na App Store e no Google Play" e menção ao beta fechado. O botão do
  beta abre um e-mail enquanto `betaFormUrl` estiver vazio; ícones de redes sociais ficam escondidos
  enquanto as URLs estiverem vazias.
- **Tour:** as animações usam a faixa `contain`. Antes, a tela "Início" quase não aparecia no desktop
  (o celular já fixava mostrando a Gaveta) e as legendas se sobrepunham na troca. Agora a primeira
  tela aparece ao entrar, a última fica ao sair e as legendas trocam sem sobreposição.
- **README:** página de exclusão, links vazios e a cor ciano.

Validado com `npm run typecheck`, `npm run build` (14 páginas) e prints em 1440 px e 390 px, nos temas
claro e escuro, sem rolagem horizontal nem erros no console.

### Depende de você

- **Decisões jurídicas:** revisar os textos (de preferência com um advogado), principalmente
  idade mínima (16+), prazo de 30 dias para exclusão, foro e qual idioma prevalece (o aviso ainda diz
  inglês; para o público brasileiro, o português faz mais sentido).
- **Infraestrutura:** confirmar o destino dos backups (o runbook cita R2 ou B2 só como exemplo) e a
  região do Supabase. Os textos ficaram genéricos nesses pontos.
- **Links:** preencher `betaFormUrl` (TestFlight público ou formulário), as redes sociais e, quando
  houver, `supportUrl` e as URLs das lojas em `src/config/site.ts`.
- **Prints novos:** os 6 prints do tour são de 28/09 (destaque verde antigo, sem livros nem reviews).
  Precisa tirar no simulador; vale incluir livros, reviews e perfil público.
- **Histórico do git:** o e-mail pessoal continua nos commits antigos de `public/screens/profile.jpg`
  (o repositório é público). Só some reescrevendo o histórico.
- **Design system:** levar a troca mint → ciano para o artefato "Klaq" (Design System).

### Fora do site

- **App + backend:** exclusão de conta dentro do app e `DELETE /me` no claquete (exigência da
  App Store).
- **App:** sair da conta não apaga a cópia local (Isar). Num aparelho compartilhado, a próxima pessoa
  pode ver a biblioteca anterior.
- **App:** chamar `DELETE /users/:id/block` (desbloquear).
- **claquete:** remover `GET /greet`.
