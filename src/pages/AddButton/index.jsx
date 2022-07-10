import './style.css'
import { createSignal, onMount } from 'solid-js'
import LinkButton from './LinkButton'
import MessageBoxButton from './MessageBoxButton'
import ShareButton from './ShareButton'
import SharePostButton from './SharePostButton'
import { useLocation } from 'solid-app-router'

const WEBAPP_URL = 'https://bot.inline.abdu.one/buttons/add'

const BUTTON = {
  LOADING: {
    text: 'PROCESSING',
    text_color: '#ffffff',
    color: '#c97f1d',
    is_active: false,
    is_visible: true,
  },
  ACTIVE: {
    text: 'ADD BUTTON',
    text_color: '#ffffff',
    color: '#36be4c',
    is_active: true,
    is_visible: true,
  },
  INACTIVE: {
    text: 'ADD BUTTON',
    text_color: '#ffffff',
    color: '#afafaf',
    is_active: false,
    is_visible: true,
  }
}

function AddButton () {
  const location = useLocation()
  const [type, setType] = createSignal(undefined)

  onMount(() => {
    setButtonActive(false)
    const root = document.documentElement
    if (root.style.getPropertyValue('--tg-color-scheme') === 'dark') {
      root.setAttribute('data-theme', 'dark')
    }
    window.Telegram.WebApp.MainButton.onClick(submitForm)
  })

  function setButtonActive (isActive = true) {
    window.Telegram.WebApp.MainButton.setParams(isActive ? BUTTON.ACTIVE : BUTTON.INACTIVE)
  }

  function onTypeChange (e) {
    setType(e.target.value)
    setButtonActive(false)
  }

  function onChange () {
    const form = document.querySelector('#form')
    const formData = new FormData(form)
    const values = [...formData.entries()]
    let isValid = true
    for (const value of values) if (!value[1] || value[1] === '') isValid = false
    setButtonActive(isValid)
  }

  async function submitForm () {
    const form = document.querySelector('#form')
    const formData = new FormData(form)
    const values = [...formData.entries()]
    const dataObject = { row: location.query.row || undefined, button: {} }
    for (const value of values) {
      dataObject.button[value[0]] = value[1]
    }

    const { user } = window.Telegram.WebApp.initDataUnsafe

    const data = {
      button_data: dataObject,
      token: location.query.token,
      user: user,
    }

    const mainButton = window.Telegram.WebApp.MainButton

    mainButton.showProgress()
    mainButton.setParams(BUTTON.LOADING)
    const response = await fetch(WEBAPP_URL, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    mainButton.hideProgress()
    if (response.ok) {
      mainButton.setParams(BUTTON.INACTIVE)
      window.Telegram.WebApp.close()
    } else {
      mainButton.setParams(BUTTON.ACTIVE)
    }
  }

  return <>
    <form class="form" id="form">
      <div class="form_item">
        <p class="description hint">Select the button type and fill necessary fields. All shown fields are required.</p>
      </div>
      <div class="form_item">
        <label class="select w-100" for="type">
          <select name="type" id="type" required="required" onChange={onTypeChange}>
            <option value="" disabled="disabled" selected="selected">Select the button type</option>
            <option value="link">Link</option>
            <option value="message_box">Message box</option>
            <option value="share">Share text</option>
            <option value="share_post">Share this post</option>
          </select>
          <svg>
            <use xlink:href="#select-arrow-down"></use>
          </svg>
        </label>
        <svg class="sprites">
          <symbol id="select-arrow-down" viewBox="0 0 10 6">
            <polyline points="1 1 5 5 9 1"></polyline>
          </symbol>
        </svg>
      </div>
      {type() === 'link' && <LinkButton onChange={onChange}/>}
      {type() === 'message_box' && <MessageBoxButton onChange={onChange}/>}
      {type() === 'share' && <ShareButton onChange={onChange}/>}
      {type() === 'share_post' && <SharePostButton onChange={onChange}/>}
    </form>
  </>
}

export default AddButton
