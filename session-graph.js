
function renderSession(session, now) {
  let targets = session.status.targets.map((target) => {
    let result = {
      name: target.name,
      type: target.type
    }

    if (target.state.active) {
      result.startTime = target.state.active.startTime
      result.finishTime = now
      result.ready = target.state.active.ready
    } else if (target.state.terminated) {
      result.startTime = target.state.terminated.startTime
      result.finishTime = target.state.terminated.finishTime
      result.error = target.state.terminated.error
    } else {
      return
    }
    return result
  }).filter(Boolean)
  let max = d3.max(targets, (d) => d3.isoParse(d.finishTime))
  let min = d3.min(targets, (d) => d3.isoParse(d.startTime))
  let fiveMinutes = 5 * 60 * 1000
  if (max - min > fiveMinutes) {
    min = new Date(max.valueOf() - fiveMinutes)
  }

  targets = targets.filter((t) => d3.isoParse(t.finishTime) > min)
  sortTargets(targets)

  d3.selectAll("svg").remove()

  var svg = d3.selectAll(".svg")
      .append("svg")
      .attr("width", w())
      .attr("height", h())
      .attr("class", "svg");

  var timeScale = d3.scaleTime()
      .domain([min, max])
      .range([16,w()-16]);

  var types = targets.map((t) => t.type)
  var typeSet = []
  types.forEach((t) => {
    if (typeSet.indexOf(t) == -1) {
      typeSet.push(t)
    }
  })

  renderTitle(svg)
  renderBars(svg, targets, types, timeScale)
  renderGrid(svg, timeScale)
}

function w() { return document.body.offsetWidth }
function h() { return document.body.offsetHeight }

function renderTitle(svg) {
  svg.append("text")
      .text("Tilt Health")
      .attr("x", w()/2)
      .attr("y", 25)
      .attr("text-anchor", "middle")
      .attr("font-size", 18)
      .attr("font-family", "Inconsolata, monospace")
      .attr("font-weight", 700)
      .attr("fill", "#000000");
}

function renderGrid(svg, scale) {
  var xAxis = d3.axisBottom()
      .scale(scale)
      .tickFormat(d3.timeFormat('%H:%M:%S'))
      .ticks(5)

  svg.append('g')
    .attr("transform", `translate(0, ${h() - 64})`)
    .call(xAxis)
}

function color(target) {
  if (target.error) {
    return d3.rgb('#f6685c')
  }
  if (target.ready) {
    return d3.rgb('#20ba31')
  }
  return d3.rgb('#93a1a1')
}

function renderBars(svg, targets, types, scale) {
  let rowHeight = 48
  let barHeight = 32
  var rectangles = svg.append('g')
      .attr('transform', 'translate(0, 48)')
      .selectAll("rect")
      .data(targets)
      .enter();

  let clampX = (x) => {
    if (x < 64) {
      return 64
    } else if (x > w() - 64) {
      return w() - 64
    }
    return x
  }

  var bars = rectangles.append("rect")
      .attr("rx", 3)
      .attr("ry", 3)
      .attr("x", function(d){
        return scale(d3.isoParse(d.startTime))
      })
      .attr("y", function(d, i){
        return i*rowHeight;
      })
      .attr("width", function(d){
        return scale(d3.isoParse(d.finishTime)) - scale(d3.isoParse(d.startTime))
      })
      .attr("height", barHeight)
      .attr("stroke", "none")
      .attr("fill", (d) => color(d))

  rectangles.append("text")
    .text(function(d){
      return d.name;
    })
    .attr("x", function(d){
      return clampX(scale(d3.isoParse(d.startTime)) + (scale(d3.isoParse(d.finishTime)) - scale(d3.isoParse(d.startTime)))/2)
    })
    .attr("y", function(d, i){
      return (i + 0.45) *rowHeight;
    })
    .attr("font-size", 16)
    .attr("text-anchor", "middle")
    .attr("text-height", barHeight)
    .attr("fill", "#000");
}

// Sort the targets so that the most recent start time goes first.
//
// If two targets have the same prefix, then the one with
// the most recent start time goes last.
//
// If two targets have different prefixes, then the one with the
// most recent start time (for the whole prefix) goes first.
function sortTargets(targets) {
  let prefix = (t) => t.name.substring(0, t.name.lastIndexOf(':'))
  let startTimesByPrefix = {}
  targets.forEach((t) => {
    let p = prefix(t)
    let startTime = t.startTime
    let oldStartTime = startTimesByPrefix[p]
    if (!oldStartTime || oldStartTime < startTime) {
      startTimesByPrefix[p] = startTime
    }
  })

  targets.sort((a, b) => {
    let prefixA = prefix(a)
    let prefixB = prefix(b)
    let samePrefix = prefix(a) == prefix(b)
    let aTime = samePrefix ? a.startTime : startTimesByPrefix[prefixA]
    let bTime = samePrefix ? b.startTime : startTimesByPrefix[prefixB]
    return aTime > bTime ? -1 : bTime > aTime ? 1 : 0
  })
}
