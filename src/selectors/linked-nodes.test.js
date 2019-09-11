import { getLinkedNodes } from './linked-nodes';
import { getLayout } from './layout';
import { mockState } from '../utils/state.mock';
import { toggleNodeFocused } from '../actions';
import reducer from '../reducers';

describe('getLinkedNodes function', () => {
  it('should search through edges for ancestor and descendant nodes', () => {
    const { nodes } = getLayout(mockState.animals);
    const nodeID = nodes.find(d => d.id.includes('salmon')).id;
    const newMockState = reducer(mockState.animals, toggleNodeFocused(nodeID));
    const linkedNodes = getLinkedNodes(newMockState);
    expect(linkedNodes).toEqual(expect.any(Object));
    expect(linkedNodes['task/salmon']).toBe(true);
    expect(linkedNodes['data/pig']).toBe(true);
    expect(linkedNodes['task/trout']).toBe(true);
    expect(linkedNodes['data/whale']).toBe(true);
    expect(linkedNodes['data/horse']).toBe(true);
    expect(linkedNodes['data/sheep']).toBe(true);
    expect(linkedNodes['data/cat']).toBe(true);
    expect(linkedNodes['data/dog']).toBe(true);
    expect(linkedNodes['data/parameters']).toBe(true);
    expect(linkedNodes['data/parameters_rabbit']).toBe(true);
  });
});