import React from 'react';
import marked from 'marked';
import styled from 'react-emotion';
import { breakpoints } from '../../utils/base.styles';

const Marked = styled.div`
  background-color: #fff;
  table {
    width: 100%;
    border-collapse: collapse;
    text-align: center;
  }
  td,
  tr,
  table th th {
    text-align: center;
  }
  th {
    background: #f5f5f5;
    font-weight: 400;
    text-align: center;
  }
  td,
  th {
    padding: 15px;
    border: 1px solid #ccc;
    text-align: center;
  }
  ${breakpoints.xs} {
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
      text-align: center;
      margin-bottom: 30px;
    }
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    tr {
      border: 1px solid #ccc;
      text-align: center;
    }
    td {
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
      text-align: center;
    }
    td:before {
      text-align: center;
      position: absolute;
      left: 6px;
      width: 30%;
      font-size: 0.7rem;
    }
    td:nth-of-type(1):before {
      content: 'Concept';
    }
    td:nth-of-type(1) {
      background: #f4f6fb;
      text-align: center;
    }
    td:nth-of-type(2):before {
      content: 'Best video';
    }
    td:nth-of-type(3):before {
      content: 'Best text';
    }
    td:nth-of-type(4):before {
      content: 'Duration';
    }
    td:nth-of-type(5):before {
      content: 'Prereq.';
    }
  }
`;

export default class MarkedJS extends React.Component {
  constructor(props) {
    super(props);
    marked.setOptions({
      renderer: new marked.Renderer(),
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
    });
  }

  render() {
    return (
      <div>
        {this.props.loading ? (
          <div>Loading...</div>
        ) : (
          <Marked
            dangerouslySetInnerHTML={{
              __html: marked(this.props.markdown),
            }}
          />
        )}
      </div>
    );
  }
}
