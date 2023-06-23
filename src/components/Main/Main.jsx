

//CSS externo
//CSS Inline
//CSS JSON 

//Tambien se utiliza const para mostrar const user = props.user;/
/*Aqui no desestructuramos el objeto */
/* Vamos a reciir user y no cualqueir objeto al cambiar la palabra de props para poner user */
/* Props recibe los componentes en react, sin recibir las llaves o paramétros*/

const titleStyle = {
    color: 'white',
}


function Main ({name,age}){

    return(
        <>
        <h1 style={titleStyle}>
            Welcome, {name}    
        </h1>
        <h3
        
        style={{
                color:'red',
            }} 
            
        >
            {age}
        
        </h3>
        
        </>

    )

}


export default Main;