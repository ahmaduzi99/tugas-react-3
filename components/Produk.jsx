import React from 'react'
import CardPoduk from './CardProduk'

const Produk = () => {
    const listProduct = [
        {
          id: 1,
          deskripsi:'Sepatu dengan bahan terbaik terbuat dari bahan-bahan pilihan ',
          productName: 'Sneakers Converse CTAS',
          productPrice: 'Rp. 599.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/e81e4f913a1cad058ef66fea8e95c839/0/2/02-CONVERSE-FFSSBCONA-CONA03576C-Yellow.jpg'
        },
        {
          id: 2,
          deskripsi:'Sepatu yang cocok menemani jogging saat santai dan sibuk',
          productName: 'Converse Run Star Motion Canvas',
          productPrice: 'Rp. 1.799.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/C/O/CON171546C-1.jpg'
        },
        {
          id: 3,
          deskripsi:'Cocok buat anak Sekolah',
          productName: 'Converse CTAS Construct Colorblock',
          productPrice: 'Rp. 1.599.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA03472C-Grey.jpg'
        },
        {
          id: 4,
          deskripsi:'Sepatu All in bagus dehh',
          productName: 'Converse Chuck Taylor All Star',
          productPrice: 'Rp. 899.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCON0-CON135251C-Black.jpg'
        },
        {
          id: 5,
          deskripsi:'Gatau mimin pokonya suka tapi mahal',
          productName: 'Converse Unisex Chuck 70 Plus',
          productPrice: 'Rp. 1.599.000',
          urlImage: 'https://www.converse.id/media/catalog/product/cache/144a401d4eb9f312744987a3cea154c3/0/1/01-CONVERSE-FFSSBCONA-CONA02871C-Brown.jpg'
        },
      ]

    return (
        <div style={{
                display:'inline-grid',
                gridTemplateColumns:'auto auto',
                justifyContent:'space-around',
                padding:'5px'

        }}>

            {
                listProduct.map((value,index) =>{
                    return <CardPoduk key={index} id={value.id} deskripsi={value.deskripsi} productName={value.productName} productPrice={value.productPrice} urlImage={value.urlImage}/>

                    
                })
            }

        </div>
    )
}

export default Produk