local_resource(
  name='electron',
  deps=['index.js', 'index.html'],
  serve_cmd='node_modules/.bin/electron --trace-warnings index.js')

local_resource(
  name='test-chart',
  deps=['session-graph.js'],
  serve_cmd='busybox httpd -p 8080 -f .',
  links=['http://localhost:8080/test.html'])
