# uninter-social/web
> Projeto para a aplicação web e api da rede social

## Stack
Este projeto está utilizando a seguinte stack:

- React como biblioteca de componentes
- Next como framework react para facilitar o desenvolvimento fullstack
- Tailwind para estilização
- shadcn/ui como biblioteca de componentes
- lucide-react para icones
- @t3-oss/env-nextjs para garantir typesafe em váriaveis de ambiente
- zod para declaração de schemas e inferência de tipos
- next-themes para o dark/light mode

## Requisitos
Para executar este projeto é esperado que você tenha instalado localmente o Nodejs na versão 20 ou superior, também é esperado
que você tenha um conhecimento básico de javascript, react e css

## Como executar o projeto local:

Após clonar este repositório, acesse a pasta do projeto e instale as dependências com `pnpm` (recomendado) ou `npm`:

```bash
pnpm install
```

copie o arquivo de variáveis de ambiente:

```bash
cp .env.example .env
```

preencha as informações necessárias no arquivo de `.env` e em seguida basta executar o seguinte comando:

```bash
pnpm run dev
```

**os comandos do pnpm podem ser substituidos por npm**
