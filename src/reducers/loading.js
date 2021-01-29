import {
  TOGGLE_GRAPH_LOADING,
  TOGGLE_DISPLAY_CHONKY_GRAPH,
  TOGGLE_IS_CHONKY,
  UPDATE_NODESNO,
  UPDATE_EDGESNO
} from '../actions/graph';
import { TOGGLE_PIPELINE_LOADING } from '../actions/pipelines';
import { TOGGLE_NODE_DATA_LOADING } from '../actions/nodes';

function loadingReducer(loadingState = {}, action) {
  switch (action.type) {
    case TOGGLE_PIPELINE_LOADING: {
      return Object.assign({}, loadingState, {
        pipeline: action.loading
      });
    }

    case TOGGLE_GRAPH_LOADING: {
      return Object.assign({}, loadingState, {
        graph: action.loading
      });
    }

    case TOGGLE_NODE_DATA_LOADING: {
      return Object.assign({}, loadingState, {
        node: action.loading
      });
    }

    case TOGGLE_IS_CHONKY: {
      return Object.assign({}, loadingState, {
        isChonky: action.isChonky
      });
    }

    case TOGGLE_DISPLAY_CHONKY_GRAPH: {
      return Object.assign({}, loadingState, {
        displayChonkyGraph: action.displayChonkyGraph
      });
    }

    case UPDATE_NODESNO: {
      return Object.assign({}, loadingState, {
        nodesNo: action.nodesNo
      });
    }

    case UPDATE_EDGESNO: {
      return Object.assign({}, loadingState, {
        edgesNo: action.edgesNo
      });
    }

    default:
      return loadingState;
  }
}

export default loadingReducer;
