import './OneProduct.css'


const OneProduct = (props) => {
    console.log(props.items); // kadangi gaunasi objektas reik .items del masyvo
    return (
        <div class='allCards'>
            {
                props.items.map((item, index) => (                  /*  prekes korteles divas ant jo galima deti css */
                    <div key={index}>
                        <div class='container1'>
                            <main class='grid'>
                                <article class="oneCard" id='cta'>
                                    <div class='flip-card'>
                                        <div class='flip-card-inner'>
                                            <div class='flip-card-front'>
                                                <img class="img" src={item.thumbnail} alt="" />
                                            </div>
                                            <div class='flip-card-back'>


                                            </div>
                                        </div>
                                    </div>

                                    <h4 class='title1'>{item.title}</h4>
                                    <p class="description">{item.description}</p>
                                    <div class="priceStock">
                                        <h5 class="price ">{item.price} Eur</h5>
                                        <button class='button1'>KREPŠELIS</button>

                                    </div>
                                </article>
                            </main>
                        </div>
                    </div>
                ))
            }
        </div >
    )
}

export default OneProduct
