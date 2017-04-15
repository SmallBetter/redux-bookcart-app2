import { configure, setAddon, addDecorator } from '@kadira/storybook'
import infoAddon from '@kadira/react-storybook-addon-info'

const req = require.context('../src/components', true, /__stories__\/.*.js$/)
function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

addDecorator(window.autoResponsiveWithMobileTitle)
setAddon(infoAddon)
configure(loadStories, module)
