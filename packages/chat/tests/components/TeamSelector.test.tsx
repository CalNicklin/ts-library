import * as React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import * as renderer from 'react-test-renderer'
import TeamSelector from '../../src/ui/components/TeamSelector'

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Router>
      <TeamSelector
        teams={[
          {
            name: 'LinkedIn',
            id: 'linkedin',
            iconUrl: '',
            channels: [
              {
                messages: [],
                name: 'general',
                id: 'g',
                teamId: 'linkedin',
                description: 'general chat for general folks',
              },
            ],
          },
        ]}
      />
    </Router>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
