import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { RouterPaths } from '../../../src/utils/RouterPaths';



export default class Home extends Component<any, any>{
    constructor(props: any){
        super(props);
        this.state = ({
            score: 0
        });
    }

    render() {
        return<>
            <Link to={{pathname: RouterPaths.TRUCO_GAUCHO_ROUTE, state: {}}}> <button>Jogar truco gaucho</button></Link>
            <Link to={{pathname: RouterPaths.TRUCO_GAUCHO_ROUTE, state: {}}}> <button>Jogar truco mineiro</button></Link>
        </>
    }
}