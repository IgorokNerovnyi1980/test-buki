import React, { Component } from 'react';
import { css } from '@emotion/core';

import { FadeLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  margin-top: 30vh;
  border-color: #8cc054;
`;

class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }
  render() {
    return (
      <div className="sweet-loading">
        <FadeLoader
          css={override}
          sizeUnit={'em'}
          size={14}
          color={'#8cc054'}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
export default Loader;
