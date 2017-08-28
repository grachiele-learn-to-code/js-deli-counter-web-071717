function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.indexOf(name) + 1} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
    let serving = katzDeliLine.shift()
    return `Currently serving ${serving}.`
  }
}

function currentLine(katzDeliLine) {
  let currentLineIs = "The line is currently: "
  if (katzDeliLine.length === 0) {
    return "The line is currently empty."
  } else {
    for (let i = 0; i < katzDeliLine.length; i++) {
      currentLineIs = currentLineIs + `${i+1}. ${katzDeliLine[i]}, `
    }
  }
  return currentLineIs.slice(0,-2)
}
