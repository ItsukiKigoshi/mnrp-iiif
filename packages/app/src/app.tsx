import Image from "@samvera/clover-iiif/image";
export function App() {
  return (
    <div style={{ height: "800px" }}>
      <Image
        src="http://localhost:8182/iiif/3/image.tif"
        isTiledImage={true}
      />
    </div>
  )
}
