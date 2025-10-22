import { useState } from 'react'

export default function Gallery() {
  const [images, setImages] = useState([])

  function onFilesChosen(files) {
    const list = Array.from(files)
    const readers = list.map(file => new Promise(res => {
      const reader = new FileReader()
      reader.onload = () => res({ name: file.name, src: reader.result })
      reader.readAsDataURL(file)
    }))
    Promise.all(readers).then(setImages)
  }

  return (
    <div>
      <h1>Photo Gallery</h1>
      <div className="card">
        <p>Drop images here or pick files. (This previews locally—add an uploader later if you want to persist.)</p>
        <label className="btn" htmlFor="picker">Choose images</label>
        <input id="picker" type="file" accept="image/*" multiple style={{display:'none'}} onChange={e=>onFilesChosen(e.target.files)} />
        <div onDragOver={e=>e.preventDefault()} onDrop={e=>{ e.preventDefault(); onFilesChosen(e.dataTransfer.files) }} style={{marginTop:'1rem', padding:'2rem', border:'2px dashed #ddd', borderRadius:'8px', textAlign:'center'}}>
          Drag & drop images here
        </div>
      </div>

      <div className="grid" style={{marginTop:'1rem'}}>
        {images.map((img, i) => (
          <figure key={i} className="card" style={{padding:0}}>
            <img src={img.src} alt={img.name} style={{width:'100%', height:'220px', objectFit:'cover', borderTopLeftRadius:'.75rem', borderTopRightRadius:'.75rem'}} />
            <figcaption style={{padding:'0.75rem'}}>{img.name}</figcaption>
          </figure>
        ))}
        {images.length === 0 && <p>No images yet.</p>}
      </div>
    </div>
  )
}
