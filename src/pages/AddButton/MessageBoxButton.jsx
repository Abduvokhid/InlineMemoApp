function MessageBoxButton ({onChange, input}) {
  return <>
    <div class="form_item">
      <input onInput={onChange} type="text" required="required" name="name" id="name" placeholder={input.name}/>
    </div>
    <div class="form_item">
      <input onInput={onChange} type="text" required="required" maxlength="60" name="message" id="message"
             placeholder={input.message_box}/>
    </div>
  </>
}

export default MessageBoxButton
