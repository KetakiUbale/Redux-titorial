import {connect} from 'react-redux'
import Home from "../component/Home";
import {addToCart } from '../service/actions/actions'

const mapStateToProps=state=>({
    cardData:state

})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))
})
export default connect(mapStateToProps,mapDispatchToProps)(Home)

//export default Home;