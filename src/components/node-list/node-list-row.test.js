import React from 'react';
import NodeListRow, { mapStateToProps } from './node-list-row';
import { getNodeData } from '../../selectors/nodes';
import { setup, mockState } from '../../utils/state.mock';

describe('NodeListRow', () => {
  const node = getNodeData(mockState.animals)[0];
  const setupProps = () => {
    const props = {
      active: true,
      checked: true,
      disabled: false,
      faded: false,
      visible: true,
      unset: false,
      id: node.id,
      label: node.highlightedLabel,
      name: node.name,
      onClick: jest.fn(),
      onMouseEnter: jest.fn(),
      onMouseLeave: jest.fn(),
      onChange: jest.fn(),
      type: node.type
    };
    return { props };
  };

  it('renders without throwing', () => {
    expect(() => setup.mount(<NodeListRow {...setupProps()} />)).not.toThrow();
  });

  describe('node list item', () => {
    it('handles mouseenter events', () => {
      const { props } = setupProps();
      const wrapper = setup.mount(<NodeListRow {...props} />);
      const nodeRow = () => wrapper.find('.pipeline-nodelist__row');
      nodeRow().simulate('mouseenter');
      expect(props.onMouseEnter.mock.calls.length).toEqual(1);
    });

    it('handles mouseleave events', () => {
      const { props } = setupProps();
      const wrapper = setup.mount(<NodeListRow {...props} />);
      const nodeRow = () => wrapper.find('.pipeline-nodelist__row');
      nodeRow().simulate('mouseleave');
      expect(props.onMouseLeave.mock.calls.length).toEqual(1);
    });

    it('uses active class if active', () => {
      const { props } = setupProps();
      const activeNodeWrapper = setup.mount(
        <NodeListRow {...props} active={true} />
      );
      expect(
        activeNodeWrapper
          .find('.pipeline-nodelist__row')
          .hasClass('pipeline-nodelist__row--active')
      ).toBe(true);
    });

    it('uses disabled class if disabled (via type/tag only)', () => {
      const { props } = setupProps();
      const disabledNodeWrapper = setup.mount(
        <NodeListRow {...props} disabled={true} />
      );
      expect(
        disabledNodeWrapper
          .find('.pipeline-nodelist__row')
          .hasClass('pipeline-nodelist__row--disabled')
      ).toBe(true);
    });
  });

  describe('node list item checkbox', () => {
    const { props } = setupProps();
    const wrapper = setup.mount(<NodeListRow {...props} />);
    const checkbox = () => wrapper.find('input');

    it('handles toggle event', () => {
      checkbox().simulate('change', { target: { checked: false } });
      expect(props.onChange.mock.calls.length).toEqual(1);
    });
  });

  it('maps state to props', () => {
    const expectedResult = expect.objectContaining({
      active: expect.any(Boolean)
    });
    expect(mapStateToProps(mockState.animals, {})).toEqual(expectedResult);
  });
});
