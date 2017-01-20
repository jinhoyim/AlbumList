import React, {Component} from 'react';
import './AlbumFilter.css';

class AlbumFilter extends Component {
  handleStatusClick = (status) => {
    this.props.handleFilterClick(status);
  };

  render() {
    const {selectedStatus} = this.props;
    return (
      <div className="AlbumFilter">
        <button className={selectedStatus === '' ?  'albumfilter-selected' : ''} onClick={() => this.handleStatusClick('')}>전체</button>
        <button className={selectedStatus === '1' ? 'albumfilter-selected' : ''} onClick={() => this.handleStatusClick('1')}>임시저장</button>
        <button className={selectedStatus === '2' ? 'albumfilter-selected' : ''} onClick={() => this.handleStatusClick('2')}>발매 진행중</button>
        <button className={selectedStatus === '3' ? 'albumfilter-selected' : ''} onClick={() => this.handleStatusClick('3')}>발매완료</button>
      </div>
    );
  }
}

export default AlbumFilter;