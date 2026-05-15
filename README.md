# mnrp-iiif
Monorepo Experiment App + Api for implementing IIIF Image Server and Client Viewer

Preact (Vite) + Cantaloupe with Bun Workspace

## Project Structure
### Image API
Presentation APIに対応しているものもある
- ☆[Cantaloupe](https://cantaloupe-project.github.io/)
- [serverless-IIIF](https://github.com/samvera/serverless-iiif)をCloudflare R2 + Workersに移植する
  - [Hono](https://hono.dev/)
  - [Elysia](https://elysiajs.com/): 興味ある! I love Bun!, ロゴが可愛い
- [express-iiif](https://github.com/tvanbeek/express-iiif) (No longer maintained)をHonoかElysiaあたりで書き直す?

### Presentation API
できれば前述のImage APIでPresentation APIも兼ねたい

### IIIF Viewer
- ☆[Clover IIIF](https://samvera-labs.github.io/clover-iiif) (TS)
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

- Cantaloupeはhttps://cantaloupe-project.github.io/からリリースをダウンロードし，`packages/cantaloupe-<version_name>`に置いてある想定
- 画像は`packages/cantaloupe-<version_name>/images`に置く
  - 本当は，Object Storageなどから取ってくるつもり

To run dev server:

```bash
bun dev
# Vite (Viewer): http://localhost:5173/
# Cantaloupe Image Server: http://localhost:8182/
```

`packages/cantaloupe-<version_name>/images/image.tif`が存在すれば
- http://localhost:5173/ でビューワ
- http://localhost:8182/iiif/3/image.tif/info.json と http://localhost:8182/iiif/3/image.tif/0,0,200,200/max/0/default.jpg でCantaloupeの出力結果が直接見られる
