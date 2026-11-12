# Currículo — ATS, PDF e dados estruturados (nov/2026)

## Conclusão

O **site não substitui o currículo PDF** nas candidaturas: sistemas de triagem (ATS) leem mal páginas web (taxa de parse citada ≈ 12% vs ≈ 93% para PDF de coluna única). O caminho certo é **uma fonte de dados → duas saídas**: o site (vitrine) e um PDF ATS-friendly (candidatura), ambos gerados dos mesmos dados.

## Regras de ATS que são consenso

**Fazer:**

- PDF com **texto real** (selecionável), coluna única, ordem de leitura linear.
- Seções com nomes padrão: *Experiência*, *Formação*, *Habilidades*, *Projetos* (em inglês: *Experience, Education, Skills, Projects*).
- Datas consistentes ao lado de cada item (`MM/AAAA – MM/AAAA` ou `Mês AAAA – Atual`), mais recente primeiro.
- Contato **no corpo** do documento, não em cabeçalho/rodapé.
- Escrever termo completo + sigla: "Model Context Protocol (MCP)", "Machine Learning (ML)".
- Usar as palavras da vaga quando forem verdade para você.
- Testar: copiar o PDF e colar como texto puro — a ordem tem que fazer sentido.

**Evitar:**

- Duas colunas, sidebars, tabelas, caixas de texto.
- Ícones no lugar de palavras (ícone de telefone em vez de "Telefone").
- Texto importante dentro de imagem.
- Foto, data de nascimento, endereço completo (padrão internacional; no Brasil é aceitável omitir).

## Estrutura de bullet: PRTO

**P**roblema → **R**ole (o que você fez) → **T**ools → **O**utcome (resultado mensurável).

> Ex.: "Projetei um harness de agentes com MCP e specs versionadas para o time de software, reduzindo o retrabalho em revisões de código em X%."

Verbos fortes no passado: Projetei, Implementei, Automatizei, Reduzi, Liderei, Migrei.

## Seções para o perfil do Pedro (estudante de 4º ano com experiência)

1. **Contato**: nome, cidade, e-mail, telefone (opcional), GitHub, LinkedIn, site, itch.io.
2. **Resumo** (2 linhas): papel + diferencial ("Engenheiro de computação em formação, CR 9,2, que projeta arquiteturas de IA com agentes, MCP e spec-driven development...").
3. **Experiência**: Analista de Projetos de Software (PRTO, 4–6 bullets).
4. **Formação**: Eng. de Computação (FURG, previsão de conclusão), Técnico em Automação Industrial. **CR 9,2 deve aparecer** — o equivalente a GPA alto é recomendado listar.
5. **Projetos**: 2–3 com stack, uma linha e link.
6. **Habilidades**: agrupadas (Linguagens, IA/Agentes, Web, Embarcados, Dados/ML, Game Dev). Só o que aguenta 30 min de entrevista técnica.
7. **Extra** (opcional): Mestre de RPG por 7+ anos → liderança, facilitação, narrativa, design de sistemas.

## JSON Resume (padrão aberto)

- Schema JSON aberto desde 2014: `basics`, `work`, `education`, `skills`, `projects`, `languages`, `interests`, `awards`.
- CLI: `resume validate`, `resume export resume.pdf`; 227 temas.
- **Uso neste projeto:** o conteúdo do currículo segue o shape do JSON Resume (validado por Zod). Isso permite: renderizar o site, gerar o PDF, gerar JSON-LD e `llms.txt`, e publicar `/resume.json` para quem quiser consumir.

## Formatos recomendados

| Formato | Uso |
| --- | --- |
| PDF coluna única (gerado do site via Playwright + CSS de impressão) | Candidaturas — padrão |
| DOCX (opcional) | Formulários que exigem Word |
| Site | Vitrine, link no LinkedIn/assinatura |
| `/resume.json` | Consumo por máquinas/agentes |

Versões PT-BR e EN do PDF são recomendadas (vagas internacionais/remotas).
