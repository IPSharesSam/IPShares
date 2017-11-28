
import React, { PureComponent } from 'react'

const styles = {
    wallet: {
        background: 'url("/images/wallet.png") no-repeat',
        backgroundSize: '100%',
        height: '3000px'
    }
}

class Timeline extends PureComponent {

    render() {
        return (
            <div style={ styles.wallet }></div>
        )
    }
}

export default Timeline