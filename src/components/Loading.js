import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { loading } from '../images'


const styles = {
    loading: {
        width: '100%',
        zIndex: '999',
        position: 'fixed',
        textAlign: 'center',
        top: '25%'
    },
    img: {
        width: '64px',
    }
}
class Loading extends PureComponent {
    render() {
        if (this.props.show) {
            return (
                <div style={styles.loading}>
                    <img style={styles.img} src={loading} alt="loading" />
                </div>
            )
        }
        return null
    }
}

const mapStateToProps = ({ loading }) => ({ show: loading })

export default connect(mapStateToProps)(Loading)
