import React, { Component } from 'react';
import styles from './Header.module.scss';

class Header extends Component {


    render() {

        return (
            <div className={styles.header_div}>
                <h1>The Infamous Todo!</h1>
            </div>
        )
    }
}

export default Header;