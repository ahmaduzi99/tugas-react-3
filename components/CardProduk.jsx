import React from 'react'

const CardPoduk = (props) =>{
    const handlebuttonClick = () => {
        alert(props.deskripsi);
    };

    return (
        <div onClick={handlebuttonClick} style={{
            textAlign:'center',
            border:'4px solid',
            height:250,
            width:250,
            padding:'10px',
            backgroundColor:'blue',
            fontFamily:'sans-serif',
            color:'white',
            borderRadius:'10px',
            marginLeft:'160%'
            
        }}>

            <img style={{
                width:200,
                height:200,
                borderRadius:8,
            }} src={props.urlImage}></img>

            <h2 style={{
                    fontSize:'12px'
            }}>
                {props.productName}

            </h2>
            <p>
                {props.productPrice}
            </p>
        </div>
    )
}

export default CardPoduk
