import { connect } from 'react-redux'
import { MyAction } from '../Action'
import MyComponent from '../Component'
const mapStateToProps = (state) => ({
    data: state.MyReducer.data,
})

const mapDispathToProps = {
    getData: MyAction,
}

export default connect(mapStateToProps, mapDispathToProps)(MyComponent)