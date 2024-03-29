import React, { Component } from 'react';

function sleep(ms) { // just a sleep util
    return new Promise(resolve => setTimeout(resolve, ms));
}

class Page extends Component {

    constructor(props) {
        super(props);
        this.state = {shouldRenderChildren: true};
    }

    isVisible() {
        if (this.props.left < 0) {
            return false;
        }
        if (this.props.left >= window.innerWidth) {
            return false;
        }
        return true;
    }

    move() {
        if (this.props.left !== this.props.from) {
            this.setState({ shouldRenderChildren: true });
        }
        this.reRender();
    }

    async reRender() {
        await sleep(1000);
        this.setState({shouldRenderChildren: this.isVisible()});
    }

    componentDidMount() {
        this.props.eventer.register(() => this.move());
    }

    componentWillUnmount() {
        this.props.eventer.unregister(() => this.move());
    }

    render() {
        return (
            <div
             style={{
                width: '100vw', 
                height: '100%',
                position: 'fixed',
                top: 0,
                left: 0,
                transform: 'translateX('+ this.props.left + 'px)',
                animationTimingFunction: 'ease-in',
                zIndex: -20,
                transition: 'transform .8s ease-in-out'
            }}> {this.state.shouldRenderChildren &&
                    this.props.children
                 }
            </div>
        );

    }

}

export default Page;
