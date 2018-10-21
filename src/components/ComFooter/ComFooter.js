import React from 'react';
import './../../common/style/font.css'
import './index.less';
import {
    Link
  } from 'react-router-dom';
class ComFooter extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            selected : 0
        }
    }
    render() {
        return (
            <div className='footers'>
                <ul>
                    <li>
                        <Link to='/'>
                            <span className='icon icon-icon-home1'></span>
                            <span className='icon-word'>首页</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/find'>
                            <span className='icon icon-icon-seach2'></span>
                            <span className='icon-word'>发现</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/feidian'>
                            <span className='icon icon-icon-feidian'></span>
                            <span className='icon-word'>沸点</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/xiaoce'>
                            <span className='icon icon-icon-list2'></span>
                            <span className='icon-word'>小册</span>
                        </Link>
                    </li>
                    <li>
                        <Link to='/me'>
                            <span className='icon icon-icon-me2'></span>
                            <span className='icon-word'>我的</span>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }

}
export default ComFooter;
