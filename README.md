# mnrp-iiif
Monorepo Experiment App + Api for implementing IIIF Image Server and Client Viewer

## Project Structure
### Image API
Presentation APIに対応しているものもある
- [ ] [serverless-IIIF](https://github.com/samvera/serverless-iiif)をCloudflare R2 + Workersに移植する
  - [ ] [Hono](https://hono.dev/)
  - [ ] [Elysia](https://elysiajs.com/): 興味ある! I love Bun!, ロゴが可愛い
- [ ] [express-iiif](https://github.com/tvanbeek/express-iiif) (No longer maintained)をHonoかElysiaあたりで書き直す?
- [ ] [Cantaloupe](https://cantaloupe-project.github.io/)

### Presentation API
できれば前述のImage APIでPresentation APIも兼ねたい

### IIIF Viewer
- [Clover IIIF](https://samvera-labs.github.io/clover-iiif) (TS)
  - serverless-IIIFと開発元同じ
- [Universal Viewer](https://github.com/universalviewer/universalviewer) (TS)
- [internetarchive/bookreader](https://github.com/internetarchive/bookreader)
- [Mirador](https://github.com/ProjectMirador/mirador) (JS)
- [Tify](https://github.com/tify-iiif-viewer/tify) (Vue)
- [OpenSeadragon](https://github.com/openseadragon/openseadragon) (JS)


## Notes
- えーん新プロジェクトはGitLabで立ち上げたいけど，GitLabでは誰も見ないという悲しい事実...

## Development

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.13. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.
