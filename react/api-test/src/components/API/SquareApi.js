/*
 * @Author: Lix 
 * @Date: 2018-04-04 15:02:27 
 * @Last Modified by: Lix
 * @Last Modified time: 2018-04-04 15:07:02
 */
import React, { Component } from 'react';
import CodeText from '../Layout/CodeText';
import { Button } from 'antd';

class SquareApi extends Component {
  constructor(props) {
    super(props)
    this.state = {
      codeText: "",
      loading: false,
    }
    this.api = this.api.bind(this);
  }

  enterLoading = () => {
    this.setState({ loading: true });
  }

  api() {
    this.enterLoading();
    fetch('http://localhost/code-repo/PHP/wxdev/web/sina/home')
      .then(response => response.json())
      .then(json => {
        this.setState({
          codeText: JSON.stringify(json),
          loading: false
        });
      })
      .catch(ex => {console.log('parsed failed', ex)});
  }

  render() {
    return (
      <div>
          <Button type="primary" onClick={this.api} loading={this.state.loading}>广场动态接口测试</Button>
          <CodeText code={this.state.codeText} />
      </div>
    );
  }
}

export default SquareApi;

