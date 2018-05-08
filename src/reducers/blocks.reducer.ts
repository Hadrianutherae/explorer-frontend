import { GET_BLOCKS, GET_BLOCKS_SUCCESS } from '../constants/block.types';

export interface BlocksState {
  fetching: boolean;
  total: number;
  blocks: any[];
  limit: number;
  currentPage: number;
}

const initialState: BlocksState = {
  blocks: [],
  currentPage: 0,
  fetching: false,
  limit: 30,
  total: 0,
};

export function blocksReducer (state: BlocksState = initialState, action: any): BlocksState {
  switch (action.type) {
    case GET_BLOCKS: {
      
      return {
        ...state,
        fetching: true
      };
    }
    
    case GET_BLOCKS_SUCCESS: {
      return {
        ...state,
        blocks: action.payload.data.items,
        fetching: false,
        total: action.payload.data.total
      };
    }
    
    default:
      return { ...state };
  }
}
