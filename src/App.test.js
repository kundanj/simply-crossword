import React from 'react'
import { shallow } from 'enzyme'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Crossword from './containers/Crossword'
import * as utils from './common/utils'

configure({ adapter: new Adapter() });

jest.mock('./common/utils');

describe('Crossword component', () => {
        describe('when rendered', () => {
            it('should fetch a grid of a crossword', () => {
                const getSpy = jest.spyOn(utils, 'loadCW');
                const crossWordInstance = shallow(
                    <Crossword/>
                );
                expect(getSpy).toBeCalled();
            });

        });
    }
);
