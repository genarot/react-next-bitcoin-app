import Navegation from "../components/Navegation/Navegation";
import MasterPage from "../components/Master";
import fetch from 'isomorphic-unfetch';
import Noticias from "../components/Noticias";
import Eventos from "../components/Eventos";

const Index = (props) => (
    <MasterPage>
        <div className="row">
            <div className="col-12">
                <div className="card">
                    <div className="card-header">
                        Precio del Bitcoin
                    </div>
                    <div className="card-body">
                        <h3 className="card-title">Precio Actual: ${props.precioBitcoin.price.toFixed(2)}</h3>
                        
                            <div className="row card-text">
                                <div className="col-md-4">
                                    <b>Ultima Hora:</b>
                                     {props.precioBitcoin.percent_change_1h} %
                                </div>
                                <div className="col-md-4">
                                    <b>
                                        Ultimas 24h:
                                    </b>
                                     {props.precioBitcoin.percent_change_24h} %
                                </div>
                                <div className="col-md-4">
                                    <b>
                                        Ultimos 7d:
                                    </b>
                                     {props.precioBitcoin.percent_change_7d} %
                                </div>
                            </div>
                    </div>
                </div>
                {console.log(props)}
            </div>
            <div className="col-md-8">
                <h2>Noticias sobre el BItcoin</h2>
                <Noticias 
                    noticias={props.noticias}
                />
            </div>
            <div className="col-md-4">
                <h2>Proximos eventos</h2>
                <Eventos 
                    eventos={props.eventos}/>
            </div>
        </div>
    </MasterPage>
    
);
Index.getInitialProps = async() => {
    try {

        const precio = await fetch('https://api.coinmarketcap.com/v2/ticker/1/');
        const noticias = await fetch(`https://newsapi.org/v2/everything/?q=bitcoin&apiKey=1976374f9d1446b290be434e147ea4de&language=es`);
        const eventos = await fetch('https://www.eventbriteapi.com/v3/events/search/?q=managua&location.address=Nicaragua&token=37IC2UCENTI4KE3DPJ3W');

        const resPrecio = await precio.json();
        const resNoticias =await noticias.json();
        const resEventos = await eventos.json();
        // {
        //     console.log(resNoticias);
        // }
        return {
            precioBitcoin: resPrecio.data.quotes.USD,
            noticias: resNoticias.articles,
            eventos: resEventos.events
        }
    }catch(_err) {
        {console.error(_err)}
        return {}
    }
}

export default Index;