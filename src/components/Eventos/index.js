const Eventos = ()=>{
    const handleMyEvent = (e)=>{console.log("Ativou!");
    };
    return(
        <div>
           <div>
                <button onClick={handleMyEvent}>Clique Aqui!</button>
           </div>
           <div>
                <button onClick={()=>{console.log("Voce clicou em outro botao!");
                }}>Clique aqui!</button>
           </div>
        </div>
    );
}

export default Eventos