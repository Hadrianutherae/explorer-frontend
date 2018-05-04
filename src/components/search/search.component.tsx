import * as classNames from 'classnames';
import * as React from 'react';

import './search.scss';

import { SearchIcon } from '../icons/common.icons';

class SearchComponent extends React.PureComponent {
  state: {
    isInputFocused: boolean,
  } = {
    isInputFocused: false
  };
  
  inputElement: HTMLInputElement;
  
  constructor (props: any) {
    super(props);
    
    this.focusInput  = this.focusInput.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
  }
  
  componentDidUpdate (): void {
    if (this.state.isInputFocused) {
      this.inputElement.focus();
    }
  }
  
  render (): JSX.Element {
    const searchClassNames = classNames({
      'bi-search': true,
      'bi-search--focused': this.state.isInputFocused,
      'g-flex': true
    });
    
    return (
      <div className={ searchClassNames }>
        <button className='bi-btn bi-btn--flat g-flex__item-fixed'
                onClick={ this.focusInput }>
          <SearchIcon className='bi-search__icon'/>
        </button>
        
        <input className='bi-search__input g-flex__item'
               ref={ (input: HTMLInputElement) => {
                 this.inputElement = input;
               } }
               type='text'
               placeholder='Block, Hash, Transaction, Etc…'
               onBlur={ this.onInputBlur }/>
      </div>
    );
  }
  
  private onInputBlur (): void {
    if (this.inputElement.value.length === 0) {
      this.setState({
        isInputFocused: false
      });
    }
  }
  
  private focusInput (): void {
    this.setState({
      isInputFocused: true
    });
  }
}

export default SearchComponent;