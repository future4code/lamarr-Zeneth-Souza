import styled from 'styled-components';
import CardProfile from './CardProfile';


export function Home () {
    return (
        <>
        </>
    )
}

function TelaInicial(props) {



    return(
            <ContainerCard>
                <ContainerHeader>
                    <div>
                        <h1>AstroMatch</h1>
                    </div>
                    <ContainerBtton>
                        <button onClick={() => props.trocaTela('matchs')}>Ir para Matchs</button>
                    </ContainerBtton>
                </ContainerHeader>
              <CardProfile />
            </ContainerCard>
          
    )
}

export default TelaInicial;
