function MessageBoxButton ({onChange}) {
  return <>
    <div class="form_item">
      <input onInput={onChange} type="text" required="required" name="name" id="name" placeholder="Text of the button"/>
    </div>
    <div class="form_item">
      <input onInput={onChange} type="text" required="required" maxlength="60" name="message" id="message"
             placeholder="Message text (60 symbols)"/>
    </div>
  </>
}

export default MessageBoxButton
