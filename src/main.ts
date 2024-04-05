import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Big Factorial</h1>
  <form id="form">
  <label for="number">Enter a number</label>
  <input id="number"/>
  <input class="submit" type="submit" value="Calculate factorial" />
  </form>
  <div>Result:<br><span id="result"/></div>
`

function factorial(n: bigint) {
  let f = 1n
  while (n > 1n) {
    f *= n
    n -= 1n
  }

  return f
}

document.querySelector<HTMLFormElement>('#form')!.onsubmit = (e: SubmitEvent) => {
  e.preventDefault()
  
  try {
    let n = BigInt(document.querySelector<HTMLInputElement>('#number')!.value)
    let f = factorial(n)

    document.querySelector<HTMLSpanElement>('#result')!.innerHTML = f.toString()
  } catch {
    document.querySelector<HTMLSpanElement>('#result')!.innerHTML = 'Error'
  }
}