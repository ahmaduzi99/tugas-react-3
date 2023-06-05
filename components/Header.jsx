import React from 'react'

const Header = () => {
    const nama = "ACHMAD FAUZI SUHANDI"
  return (
    <header style={{
            textAlign:'center',
            border:'5px solid',
            backgroundColor:'blue',
            fontSize:'50px',
            color:'white',
            padding:'10px'
    }}> {nama}

    </header>
  )
}

export default Header
