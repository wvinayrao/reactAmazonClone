import React from 'react'
import './Home.css'
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <img className="home__image"
             src="https://images-na.ssl-images-amazon.com/images/G/01/Events/2020/APDHF2/XCM_CUTTLE_1255585_1316868_US_PD20_3297223_3000x1200_2X_US_en._CB418585376_.jpg"
             alt="" />
           {/* Create Products  */}
           <div className="home__row">
           <Product 
           id="1234"
           title="Learning: Some Random Prods"
           price={75555.00}
           rating={5}
           image="https://bringatrailer.com/wp-content/uploads/2020/04/1969_ford_mustang_sportsroof_1587671626410cb064a6f7f52ae3001_web-scaled.jpg?fit=940%2C627"
           />
           <Product 
           id="1234"
           title="Learning: Some Random Prods"
           price={75555.00}
           rating={5}
           image="https://bringatrailer.com/wp-content/uploads/2020/04/1969_ford_mustang_sportsroof_1587671626410cb064a6f7f52ae3001_web-scaled.jpg?fit=940%2C627"
           />
           </div>
           <div className="home__row">
           <Product 
           id="1234"
           title="Learning: Some Random Prods"
           price={75555.00}
           rating={5}
           image="https://bringatrailer.com/wp-content/uploads/2020/04/1969_ford_mustang_sportsroof_1587671626410cb064a6f7f52ae3001_web-scaled.jpg?fit=940%2C627"
           />
           <Product 
           id="1234"
           title="Learning: Some Random Prods"
           price={75555.00}
           rating={5}
           image="https://bringatrailer.com/wp-content/uploads/2020/04/1969_ford_mustang_sportsroof_1587671626410cb064a6f7f52ae3001_web-scaled.jpg?fit=940%2C627"
           />
           <Product 
           id="1234"
           title="Learning: Some Random Prods"
           price={75555.00}
           rating={5}
           image="https://bringatrailer.com/wp-content/uploads/2020/04/1969_ford_mustang_sportsroof_1587671626410cb064a6f7f52ae3001_web-scaled.jpg?fit=940%2C627"
           />
           </div>
           <div className="home__row">
           <Product 
           id="1234"
           title="Learning: Some Random Prods"
           price={75555.00}
           rating={5}
           image="https://bringatrailer.com/wp-content/uploads/2020/04/1969_ford_mustang_sportsroof_1587671626410cb064a6f7f52ae3001_web-scaled.jpg?fit=940%2C627"
           />
           </div>
        </div>
    )
}

export default Home
