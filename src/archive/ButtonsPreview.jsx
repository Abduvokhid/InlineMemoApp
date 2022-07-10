import './style.css'
import InlineButton from './InlineButton'
import { createEffect, createSignal } from 'solid-js'

const state = [
  [
    { type: 'link', name: 'Telegram', link: 'https://t.me' },
    { type: 'link', name: 'Instagram', link: 'https://instagram.com' },
  ],
  [
    { type: 'link', name: 'Facebook', link: 'https://fb.com' },
  ],
]

function ButtonsPreview () {
  const [buttons, setButtons] = createSignal(state)

  createEffect(() => {
    const root = document.documentElement
    buttons().forEach((row, index) => {
      root.style.setProperty(`--buttons-row-${index}`, row.length.toString())
    })
  })

  const buttonList = buttons().map((row, index) => {
    const itemList = row.map(item => <InlineButton item={item} rowNumber={index}/>)
    itemList.push(<InlineButton rowNumber={index}/>)
    return <div class="row">{itemList}</div>
  })

  return <div class="container">
    {buttonList}
    <div class="row"><InlineButton/></div>
  </div>
}

export default ButtonsPreview
