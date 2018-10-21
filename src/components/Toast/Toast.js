import React from 'react';

export default class Toast extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        let {toast} = this.props;
        return (
            toast.isShow ? <div>{toast.tips}</div>: ''
        )
    }
}
