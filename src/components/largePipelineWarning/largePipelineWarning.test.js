import React from 'react';
import ConnectedModal, {
  LargeModal,
  mapStateToProps,
  mapDispatchToProps
} from './index';
import { mockState, setup } from '../../utils/state.mock';

describe('large modal', () => {
  it('renders without crashing', () => {
    const wrapper = setup.mount(<ConnectedModal />);
    expect(wrapper.find('.renderButton').length).toBe(1);
  });

  it('clicking the render anyways button will toggle the graph to display', () => {
    const mockFn = jest.fn();
    const props = {
      onToggleDisplayLargeGraph: mockFn
    };
    const wrapper = setup.mount(<LargeModal {...props} />);

    wrapper.find('.renderButton').simulate('click');
    expect(mockFn.mock.calls.length).toBe(1);
  });

  it('maps state to props', () => {
    const expectedResult = {
      nodesNo: expect.any(Number),
      edgesNo: expect.any(Number)
    };
    expect(mapStateToProps(mockState.animals)).toEqual(expectedResult);
  });

  it('mapDispatchToProps', () => {
    const dispatch = jest.fn();
    const expectedResult = {
      onToggleDisplayLargeGraph: expect.any(Function)
    };
    expect(mapDispatchToProps(dispatch)).toEqual(expectedResult);
  });
});